import { ArrowRight } from "lucide-react"
import type { FlowStep } from "@/lib/copy-types"

export function PipelineDiagram({
  steps,
  label,
  mineLabel,
}: {
  steps: (string | FlowStep)[]
  label?: string
  mineLabel?: string
}) {
  const items = steps.map((s) => (typeof s === "string" ? { label: s } : s))
  return (
    <ol
      aria-label={label}
      className="flex flex-col gap-0 rounded-lg border border-border bg-background/60 p-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2"
    >
      {items.map((step, i) => (
        <li key={step.label} className="flex items-center gap-2" style={{ ["--i" as string]: i }}>
          <span
            className={
              "flow-step inline-block rounded-md px-2.5 py-1.5 font-mono text-base leading-snug " +
              (step.mine ? "bg-brand text-brand-foreground" : "bg-secondary text-foreground")
            }
          >
            {step.label}
            {step.mine && mineLabel && <span className="sr-only"> ({mineLabel})</span>}
          </span>
          {i < items.length - 1 && (
            <ArrowRight
              aria-hidden="true"
              className="my-1 size-3.5 shrink-0 rotate-90 text-brand sm:my-0 sm:rotate-0"
            />
          )}
        </li>
      ))}
    </ol>
  )
}
