// Self-check for the demo rules. Run: node --experimental-strip-types scripts/check-validator.ts
import assert from "node:assert/strict"
import { applyCorrections, parseCsv, sampleCsv, validate } from "../src/lib/validator.ts"

const today = new Date("2026-01-10T12:00:00Z")
const checked = validate(parseCsv(sampleCsv(today)), today)
const bad = checked.filter((c) => c.reasons.length).map((c) => c.row.id_pedido + ":" + c.reasons.map((r) => r.code).join("+"))
assert.equal(checked.length, 12)
assert.equal(
  bad.join(" "),
  "P002:email P003:client_empty P004:total P006:qty+total P001:id_dup P008:sku_empty P009:deadline P011:email",
)
const fixed = validate(applyCorrections(checked.map((c) => c.row), [{ linha: 3, campo: "valor_total", valor: 120 }]), today)
assert.deepEqual(fixed[3].reasons, [])
console.log("validator self-check done")
