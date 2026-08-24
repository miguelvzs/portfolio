import { ArrowRight } from "lucide-react"

export function PipelineDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col gap-0 rounded-lg border border-border bg-background/60 p-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span className="rounded-md bg-secondary px-2.5 py-1.5 font-mono text-[11px] leading-snug text-foreground">
            {step}
          </span>
          {i < steps.length - 1 && (
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
