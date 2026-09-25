// Port of the business rules from github.com/miguelvzs/validador-registros-tabulares,
// trimmed to the columns the live demo uses.

export const COLUMNS = [
  "id_pedido",
  "cliente",
  "email",
  "produto",
  "sku",
  "quantidade",
  "valor_unitario",
  "valor_total",
  "prazo_entrega",
] as const

export type Column = (typeof COLUMNS)[number]
export type Row = Record<Column, string>
export type Reason = { code: ReasonCode; value?: string }
export type ReasonCode =
  | "id_empty"
  | "id_dup"
  | "client_empty"
  | "email"
  | "qty"
  | "unit"
  | "total"
  | "deadline"
  | "product_empty"
  | "sku_empty"
export type Checked = { row: Row; line: number; reasons: Reason[] }

const EMAIL = /^[^@]+@[^@]+\.[^@]+$/

const num = (v: string) => (v.trim() === "" ? NaN : Number(v.trim().replace(",", ".")))

export function parseCsv(text: string): Row[] {
  const lines = text.trim().split(/\r?\n/).filter((l) => l.trim() !== "")
  const [header, ...body] = lines
  const cols = header.split(",").map((c) => c.trim())
  return body.map((line) => {
    const cells = line.split(",")
    return Object.fromEntries(COLUMNS.map((c) => [c, (cells[cols.indexOf(c)] ?? "").trim()])) as Row
  })
}

export function toCsv(rows: Row[]): string {
  return [COLUMNS.join(","), ...rows.map((r) => COLUMNS.map((c) => r[c]).join(","))].join("\n")
}

export function validate(rows: Row[], today = new Date()): Checked[] {
  const seen = new Set<string>()
  const todayIso = today.toISOString().slice(0, 10)
  return rows.map((row, line) => {
    const reasons: Reason[] = []
    const id = row.id_pedido.trim()
    if (!id) reasons.push({ code: "id_empty" })
    else if (seen.has(id)) reasons.push({ code: "id_dup", value: id })
    else seen.add(id)
    if (!row.cliente.trim()) reasons.push({ code: "client_empty" })
    if (!EMAIL.test(row.email.trim())) reasons.push({ code: "email" })
    const qty = num(row.quantidade)
    const unit = num(row.valor_unitario)
    const total = num(row.valor_total)
    if (!Number.isInteger(qty) || qty <= 0) reasons.push({ code: "qty" })
    if (!(unit > 0)) reasons.push({ code: "unit" })
    if (Number.isNaN(total)) reasons.push({ code: "total" })
    else if (!Number.isNaN(qty) && !Number.isNaN(unit) && Math.abs(total - qty * unit) > 0.02)
      reasons.push({ code: "total" })
    const deadline = row.prazo_entrega.trim()
    if (!/^\d{4}-\d{2}-\d{2}$/.test(deadline) || deadline < todayIso) reasons.push({ code: "deadline" })
    if (!row.produto.trim()) reasons.push({ code: "product_empty" })
    if (!row.sku.trim()) reasons.push({ code: "sku_empty" })
    return { row, line, reasons }
  })
}

export type Correction = { linha: number; campo: Column; valor: string | number }

export function applyCorrections(rows: Row[], corrections: Correction[]): Row[] {
  const next = rows.map((r) => ({ ...r }))
  for (const c of corrections) {
    if (next[c.linha] && (COLUMNS as readonly string[]).includes(c.campo)) next[c.linha][c.campo] = String(c.valor)
  }
  return next
}

function isoInDays(days: number, today = new Date()) {
  const d = new Date(today)
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

// Fictional sample: 12 orders, 7 with problems, some fixable from the other fields.
export function sampleCsv(today = new Date()): string {
  const d = (n: number) => isoInDays(n, today)
  return [
    COLUMNS.join(","),
    `P001,Ana Souza,ana.souza@exemplo.com,Caneca,CAN-01,2,25.00,50.00,${d(5)}`,
    `P002,Bruno Lima,bruno.lima(at)exemplo.com,Caderno,CAD-02,1,18.90,18.90,${d(7)}`,
    `P003,,carla@exemplo.com,Estojo,EST-03,1,12.00,12.00,${d(4)}`,
    `P004,Diego Alves,diego@exemplo.com,Camiseta,CAM-04,3,40.00,100.00,${d(9)}`,
    `P005,Elisa Rocha,elisa@exemplo.com,Luminária,LUM-05,1,89.90,89.90,${d(3)}`,
    `P006,Fábio Nunes,fabio@exemplo.com,Mochila,MOC-06,0,150.00,150.00,${d(6)}`,
    `P001,Gabi Costa,gabi@exemplo.com,Boné,BON-07,1,35.00,35.00,${d(8)}`,
    `P008,Hugo Reis,hugo@exemplo.com,Agenda,,1,29.00,29.00,${d(5)}`,
    `P009,Iris Melo,iris@exemplo.com,Garrafa,GAR-09,2,45.50,91.00,${d(-3)}`,
    `P010,João Prado,joao@exemplo.com,Mousepad,MOU-10,2,22.00,44.00,${d(10)}`,
    `P011,Karen Dias,karen@exemplo,Fone,FON-11,1,120.00,120.00,${d(12)}`,
    `P012,Lucas Pires,lucas@exemplo.com,Adesivo,ADE-12,10,2.50,25.00,${d(2)}`,
  ]
    .join("\n")
    .replace("karen@exemplo,com.br", "karen@exemplo")
}
