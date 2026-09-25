// Vercel Function: asks an LLM (via OpenRouter) to fix rejected demo orders.
// Env: OPENROUTER_API_KEY (required), OPENROUTER_MODEL (optional).
// Set a spending limit on the OpenRouter key: this endpoint is public.

const MODEL = process.env.OPENROUTER_MODEL || "deepseek/deepseek-chat"
const FIELDS = ["id_pedido", "cliente", "email", "produto", "sku", "quantidade", "valor_unitario", "valor_total", "prazo_entrega"]
const MAX_ROWS = 20
const MAX_BODY = 20_000

const SYSTEM = `Você corrige pedidos rejeitados por um validador.
Proponha uma correção só quando o valor certo puder ser deduzido com segurança dos outros campos do mesmo pedido
(ex.: recalcular valor_total = quantidade × valor_unitario, deduzir quantidade = valor_total ÷ valor_unitario,
consertar um e-mail com erro de digitação óbvio como "(at)" no lugar de "@").
Nunca invente cliente, SKU, id_pedido, prazo ou domínio de e-mail. Se não houver correção segura, não corrija.
Responda somente com JSON: {"correcoes":[{"linha":<número>,"campo":"<campo>","valor":<texto ou número>}]}`

// ponytail: in-memory limit per warm instance, not global. Real cap is the OpenRouter key limit.
const hits = new Map()
function limited(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60_000)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > 5
}

const json = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } })

export async function POST(request) {
  if (!process.env.OPENROUTER_API_KEY) return json(503, { error: "unavailable" })
  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown"
  if (limited(ip)) return json(429, { error: "rate_limited" })

  const raw = await request.text()
  if (raw.length > MAX_BODY) return json(413, { error: "too_large" })
  let rejected
  try {
    rejected = JSON.parse(raw).rejected
  } catch {
    return json(400, { error: "bad_json" })
  }
  if (!Array.isArray(rejected) || rejected.length === 0 || rejected.length > MAX_ROWS)
    return json(400, { error: "bad_input" })

  const lines = new Set(rejected.map((r) => r.linha))
  const payload = rejected.map((r) => ({
    linha: r.linha,
    motivos: String(r.motivos ?? "").slice(0, 300),
    pedido: Object.fromEntries(FIELDS.map((f) => [f, String(r.pedido?.[f] ?? "").slice(0, 120)])),
  }))

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "content-type": "application/json",
      "x-title": "Portfolio validator demo",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 800,
      temperature: 0,
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: JSON.stringify(payload) },
      ],
    }),
    signal: AbortSignal.timeout(25_000),
  }).catch(() => null)
  if (!res || !res.ok) return json(502, { error: "llm_failed" })

  const text = (await res.json())?.choices?.[0]?.message?.content ?? ""
  const start = text.indexOf("{")
  const end = text.lastIndexOf("}")
  let parsed = null
  try {
    parsed = JSON.parse(text.slice(start, end + 1))
  } catch {
    return json(502, { error: "llm_bad_output" })
  }

  // Same guard as the original project: drop corrections for unknown rows/fields or non-scalar values.
  const correcoes = (Array.isArray(parsed?.correcoes) ? parsed.correcoes : []).filter(
    (c) =>
      lines.has(c?.linha) &&
      FIELDS.includes(c?.campo) &&
      c.campo !== "id_pedido" &&
      (typeof c.valor === "string" || typeof c.valor === "number")
  )
  return json(200, { correcoes, model: MODEL })
}
