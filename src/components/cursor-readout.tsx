import { useEffect, useRef } from "react"

/** CAD-style pointer coordinates in page pixels. Desktop pointers only; writes to the DOM directly, no re-renders. */
export function CursorReadout() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return
    const pad = (n: number) => String(Math.round(n)).padStart(4, "0")
    const onMove = (e: PointerEvent) => {
      if (ref.current) ref.current.textContent = `x ${pad(e.pageX)}  y ${pad(e.pageY)}`
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed bottom-4 left-4 z-30 hidden rounded-[2px] border border-border bg-background/80 px-2 py-1 font-mono text-[11px] whitespace-pre text-muted-foreground tabular-nums backdrop-blur [@media(pointer:fine)]:lg:block"
    >
      x 0000  y 0000
    </div>
  )
}
