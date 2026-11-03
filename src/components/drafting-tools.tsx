import { useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react"
import { useI18n } from "@/lib/i18n"

type Pos = { x: number; y: number }

/**
 * Drafting instruments lying on the hero, inspired by a cutting mat with real objects on it.
 * Each one is draggable (mouse or touch); double-click puts it back. Desktop widths only,
 * so they sit in the page margins instead of on top of the text.
 */
export function DraftingTools() {
  const { t } = useI18n()
  const [note1, note2, note3] = t.fun.note

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden xl:block">
      <Tool className="top-[12%] left-[2.5%]" rotate={-6}>
        {/* sticky note */}
        <div className="relative w-40 bg-[#f4e7a1] px-4 pt-5 pb-4 font-mono text-[12px] leading-snug text-[#1b2a3a] shadow-[0_10px_20px_-8px_rgb(5_15_30/55%)]">
          <span className="absolute top-0 left-1/2 h-4 w-14 -translate-x-1/2 -translate-y-1/2 rotate-2 bg-white/50" />
          <p className="text-[15px] font-semibold">{note1}</p>
          <p>{note2}</p>
          <p className="mt-2 text-[11px] opacity-70">{note3}</p>
        </div>
      </Tool>

      <Tool className="top-[8%] right-[3%]" rotate={28}>
        {/* mechanical pencil */}
        <svg width="26" height="250" viewBox="0 0 26 250">
          <rect x="7" y="0" width="12" height="20" rx="2" fill="#2f4f72" />
          <rect x="5" y="20" width="16" height="150" rx="3" fill="#183a5e" stroke="#8fc0ff" strokeOpacity=".35" />
          <rect x="18" y="24" width="3" height="60" rx="1.5" fill="#cfe2fa" opacity=".5" />
          <g stroke="#8fc0ff" strokeOpacity=".3">
            {Array.from({ length: 14 }, (_, i) => (
              <path key={i} d={`M5 ${180 + i * 3}H21`} />
            ))}
          </g>
          <rect x="5" y="170" width="16" height="44" fill="#22476d" />
          <path d="M5 214H21L15 236H11Z" fill="#9db8d6" />
          <rect x="12.2" y="236" width="1.6" height="12" fill="#e6eef8" />
        </svg>
      </Tool>

      <Tool className="right-[0.5%] bottom-[3%]" rotate={-12}>
        {/* 45° set square: outer triangle with a cutout and a tiny scale */}
        <svg width="150" height="150" viewBox="0 0 190 190">
          <path
            d="M4 186V4L186 186Z M30 160V66L124 160Z"
            fillRule="evenodd"
            fill="#8fc0ff"
            fillOpacity=".14"
            stroke="#8fc0ff"
            strokeOpacity=".7"
          />
          <g stroke="#8fc0ff" strokeOpacity=".6">
            {Array.from({ length: 17 }, (_, i) => (
              <path key={i} d={`M4 ${176 - i * 10}H${i % 5 === 0 ? 14 : 9}`} />
            ))}
          </g>
        </svg>
      </Tool>

      <Tool className="bottom-[5%] left-[22%]" rotate={-2}>
        {/* 30 cm ruler, mm ticks */}
        <svg width="380" height="44" viewBox="0 0 380 44">
          <rect x=".5" y=".5" width="379" height="43" rx="3" fill="#cfe2fa" fillOpacity=".1" stroke="#8fc0ff" strokeOpacity=".55" />
          <g stroke="#8fc0ff" strokeOpacity=".7">
            {Array.from({ length: 121 }, (_, i) => (
              <path key={i} d={`M${10 + i * 3} 1V${i % 10 === 0 ? 16 : i % 5 === 0 ? 11 : 7}`} />
            ))}
          </g>
          <g fill="#9db8d6" fontFamily="ui-monospace,monospace" fontSize="8">
            {Array.from({ length: 13 }, (_, i) => (
              <text key={i} x={10 + i * 30} y="27" textAnchor="middle">
                {i}
              </text>
            ))}
          </g>
        </svg>
      </Tool>

      <p className="absolute bottom-[2%] left-[22%] font-mono text-[10px] text-muted-foreground/70">{t.fun.dragHint}</p>
    </div>
  )
}

let topZ = 1

function Tool({ children, className, rotate }: { children: ReactNode; className: string; rotate: number }) {
  const [pos, setPos] = useState<Pos>({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [z, setZ] = useState(0)
  const start = useRef<{ px: number; py: number; x: number; y: number } | null>(null)

  const down = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    start.current = { px: e.clientX, py: e.clientY, x: pos.x, y: pos.y }
    setDragging(true)
    setZ(++topZ)
  }
  const move = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = start.current
    if (!s) return
    setPos({ x: s.x + e.clientX - s.px, y: s.y + e.clientY - s.py })
  }
  const up = () => {
    start.current = null
    setDragging(false)
  }

  return (
    <div
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerCancel={up}
      onDoubleClick={() => setPos({ x: 0, y: 0 })}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) rotate(${rotate + (dragging ? 2 : 0)}deg) scale(${dragging ? 1.04 : 1})`,
        zIndex: z,
        transition: dragging ? "none" : "transform .45s cubic-bezier(.34,1.56,.64,1)",
      }}
      className={
        "pointer-events-auto absolute touch-none select-none " +
        (dragging ? "cursor-grabbing drop-shadow-[0_18px_22px_rgb(3_12_25/45%)]" : "cursor-grab") +
        " " +
        className
      }
    >
      {children}
    </div>
  )
}
