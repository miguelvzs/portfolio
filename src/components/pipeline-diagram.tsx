import { useEffect, useRef } from "react"

/** Architecture flow drawn in pencil: each block appears, then the connector is traced to the next. */
export function PipelineDiagram({ steps }: { steps: string[] }) {
  const ref = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add("is-drawn")
        obs.disconnect()
      },
      { rootMargin: "0px 0px -15% 0px" },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <ol
      ref={ref}
      className="draw flex flex-col gap-0 rounded-[3px] border border-dashed border-border bg-background/60 p-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2"
    >
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2" style={{ "--i": i } as React.CSSProperties}>
          <span className="draw-node rounded-[2px] border border-border bg-secondary px-2.5 py-1.5 font-mono text-[11px] leading-snug text-foreground">
            {step}
          </span>
          {i < steps.length - 1 && (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 10"
              className="my-1 h-2.5 w-6 shrink-0 rotate-90 text-brand sm:my-0 sm:rotate-0"
            >
              <path className="draw-line" d="M1 5H21M17 1.5L21 5L17 8.5" fill="none" stroke="currentColor" strokeWidth="1.3" pathLength={1} />
            </svg>
          )}
        </li>
      ))}
    </ol>
  )
}
