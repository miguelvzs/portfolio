import { useMemo, useState } from "react"
import { RotateCcw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { useI18n } from "@/lib/i18n"
import {
  applyCorrections,
  parseCsv,
  sampleCsv,
  toCsv,
  validate,
  type Checked,
  type Correction,
  type Reason,
} from "@/lib/validator"

type Status = "idle" | "loading" | "done" | "unavailable" | "rateLimited" | "error"

export function ValidatorDemo() {
  const { t } = useI18n()
  const [csv, setCsv] = useState(sampleCsv)
  const [checked, setChecked] = useState<Checked[]>(() => validate(parseCsv(csv)))
  const [applied, setApplied] = useState<Correction[]>([])
  const [recoveredCount, setRecoveredCount] = useState(0)
  const [status, setStatus] = useState<Status>("idle")

  const rejected = useMemo(() => checked.filter((c) => c.reasons.length > 0), [checked])
  const reasonText = (r: Reason) => t.demo.reasons[r.code].replace("{value}", r.value ?? "")

  function run(text = csv) {
    setChecked(validate(parseCsv(text)))
    setApplied([])
    setRecoveredCount(0)
    setStatus("idle")
  }

  function reset() {
    const sample = sampleCsv()
    setCsv(sample)
    run(sample)
  }

  async function recover() {
    setStatus("loading")
    try {
      const res = await fetch("/api/recover", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          rejected: rejected.map((c) => ({
            linha: c.line,
            motivos: c.reasons.map((r) => r.code).join("; "),
            pedido: c.row,
          })),
        }),
      })
      if (res.status === 503) return setStatus("unavailable")
      if (res.status === 429) return setStatus("rateLimited")
      if (!res.ok) return setStatus("error")
      const { correcoes } = (await res.json()) as { correcoes: Correction[] }
      const rows = applyCorrections(
        checked.map((c) => c.row),
        correcoes
      )
      const next = validate(rows)
      const before = new Set(rejected.map((c) => c.line))
      setRecoveredCount(next.filter((c) => before.has(c.line) && c.reasons.length === 0).length)
      setChecked(next)
      setCsv(toCsv(rows))
      setApplied(correcoes)
      setStatus("done")
    } catch {
      setStatus("error")
    }
  }

  const message =
    status === "unavailable"
      ? t.demo.unavailable
      : status === "rateLimited"
        ? t.demo.rateLimited
        : status === "error"
          ? t.demo.error
          : null

  return (
    <Reveal>
      <Card id="demo" className="mt-12 scroll-mt-24 gap-5 p-6 ring-border md:p-8">
        <div>
          <p className="mb-2 font-mono text-xs tracking-[0.14em] text-brand uppercase">{t.demo.eyebrow}</p>
          <h3 className="text-xl font-semibold text-foreground md:text-2xl">{t.demo.title}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{t.demo.intro}</p>
        </div>

        <label className="block">
          <span className="mb-1.5 block font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            {t.demo.editLabel}
          </span>
          <textarea
            value={csv}
            onChange={(e) => setCsv(e.target.value)}
            spellCheck={false}
            rows={8}
            className="w-full resize-y rounded-lg border border-border bg-background p-3 font-mono text-[11px] leading-relaxed text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:text-xs"
          />
        </label>

        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => run()}>
            {t.demo.validate}
          </Button>
          <Button onClick={recover} disabled={status === "loading" || rejected.length === 0} className="gap-2">
            <Sparkles className="size-4" aria-hidden="true" />
            {status === "loading" ? t.demo.recovering : t.demo.recover}
          </Button>
          <Button variant="ghost" onClick={reset} className="gap-2">
            <RotateCcw className="size-4" aria-hidden="true" />
            {t.demo.reset}
          </Button>
        </div>

        <div aria-live="polite" className="space-y-4">
          <p className="font-mono text-sm text-foreground">
            {checked.length - rejected.length} {t.demo.valid} · {rejected.length} {t.demo.rejected}
            {status === "done" && (
              <span className="text-brand">
                {" "}
                · {recoveredCount} {t.demo.recovered}
              </span>
            )}
          </p>

          {message && <p className="text-sm text-muted-foreground">{message}</p>}

          {status === "done" && (
            <div className="rounded-lg border border-brand/30 bg-brand/5 p-4">
              <p className="mb-2 font-mono text-[11px] tracking-widest text-brand uppercase">{t.demo.corrections}</p>
              {applied.length === 0 ? (
                <p className="text-sm text-muted-foreground">{t.demo.noCorrections}</p>
              ) : (
                <ul className="space-y-1 font-mono text-xs text-foreground">
                  {applied.map((c) => (
                    <li key={`${c.linha}-${c.campo}`}>
                      {checked[c.linha]?.row.id_pedido} · {c.campo} → {String(c.valor)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {rejected.length > 0 && (
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/40 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  <tr>
                    <th className="px-3 py-2 font-normal">{t.demo.order}</th>
                    <th className="px-3 py-2 font-normal">{t.demo.reasonsCol}</th>
                  </tr>
                </thead>
                <tbody>
                  {rejected.map((c) => (
                    <tr key={c.line} className="border-t border-border">
                      <td className="px-3 py-2 font-mono text-foreground">{c.row.id_pedido || "—"}</td>
                      <td className="px-3 py-2 text-muted-foreground">{c.reasons.map(reasonText).join("; ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="text-xs text-muted-foreground">{t.demo.aiNote}</p>
        </div>
      </Card>
    </Reveal>
  )
}
