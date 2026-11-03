import { useEffect, useState, useSyncExternalStore } from "react"
import { useI18n } from "@/lib/i18n"

// Tiny shared store so the terminal and the D key flip the same switch.
let on = false
const listeners = new Set<() => void>()
export function toggleDims() {
  on = !on
  listeners.forEach((l) => l())
  return on
}
function subscribe(l: () => void) {
  listeners.add(l)
  return () => listeners.delete(l)
}
export const useDims = () => useSyncExternalStore(subscribe, () => on)

export function isTyping(target: EventTarget | null) {
  const el = target as HTMLElement | null
  return !!el && (el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName))
}

type Box = { x: number; y: number; w: number; h: number; tag: string }

/** Figma-inspector style overlay: real width/height of whatever is under the pointer. */
export function DimensionMode() {
  const { t } = useI18n()
  const active = useDims()
  const [box, setBox] = useState<Box | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "d" || e.ctrlKey || e.metaKey || e.altKey || isTyping(e.target)) return
      toggleDims()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    if (!active) {
      setBox(null)
      return
    }
    let target: Element | null = null
    const measure = () => {
      if (!target) return
      const r = target.getBoundingClientRect()
      setBox({ x: r.left, y: r.top, w: r.width, h: r.height, tag: target.tagName.toLowerCase() })
    }
    const onMove = (e: PointerEvent) => {
      target = document.elementFromPoint(e.clientX, e.clientY)
      measure()
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("scroll", measure, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("scroll", measure)
    }
  }, [active])

  if (!active) return null
  const r = (n: number) => Math.round(n)

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] font-mono text-[10px] text-brand">
      {box && (
        <>
          <div
            className="absolute border border-dashed border-brand bg-brand/5"
            style={{ left: box.x, top: box.y, width: box.w, height: box.h }}
          />
          {/* width dimension line above the box */}
          <div className="absolute flex items-center" style={{ left: box.x, top: box.y - 14, width: box.w }}>
            <span className="h-2 w-px bg-brand" />
            <span className="h-px flex-1 bg-brand/70" />
            <span className="mx-1 bg-background px-1 tabular-nums">{r(box.w)}</span>
            <span className="h-px flex-1 bg-brand/70" />
            <span className="h-2 w-px bg-brand" />
          </div>
          {/* height dimension line to the right */}
          <div className="absolute flex flex-col items-center" style={{ left: box.x + box.w + 6, top: box.y, height: box.h }}>
            <span className="h-px w-2 bg-brand" />
            <span className="w-px flex-1 bg-brand/70" />
            <span className="my-1 bg-background px-1 tabular-nums">{r(box.h)}</span>
            <span className="w-px flex-1 bg-brand/70" />
            <span className="h-px w-2 bg-brand" />
          </div>
          <span className="absolute bg-brand px-1 text-brand-foreground" style={{ left: box.x, top: box.y + box.h + 4 }}>
            {box.tag}
          </span>
        </>
      )}
      <span className="absolute bottom-12 left-4 rounded-[2px] border border-brand bg-background px-2 py-1">
        {t.fun.dimsBadge} · D
      </span>
    </div>
  )
}
