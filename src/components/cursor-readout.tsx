import { useEffect, useRef } from "react"
import { useI18n } from "@/lib/i18n"

/** CAD-style pointer coordinates in page pixels, plus the keyboard hints. Desktop pointers only. */
export function CursorReadout() {
  const { t } = useI18n()
  const ref = useRef<HTMLSpanElement>(null)

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
      aria-hidden="true"
      className="pointer-events-none fixed bottom-4 left-4 z-30 hidden items-center divide-x divide-border rounded-[2px] border border-border bg-background/80 font-mono text-[11px] whitespace-pre text-muted-foreground tabular-nums backdrop-blur [@media(pointer:fine)]:lg:flex"
    >
      <span ref={ref} className="px-2 py-1">
        x 0000  y 0000
      </span>
      <span className="px-2 py-1">{t.fun.terminalHint}</span>
      <span className="px-2 py-1">D · {t.fun.dimsBadge}</span>
    </div>
  )
}
