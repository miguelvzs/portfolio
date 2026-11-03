import { useEffect, useRef, useState, type FormEvent } from "react"
import { useI18n } from "@/lib/i18n"
import { useTheme } from "@/lib/theme"
import { LOCALES, type Locale } from "@/lib/i18n-types"
import { isTyping, toggleDims } from "@/components/dimension-mode"

type Line = { kind: "in" | "out"; text: string }

export const openTerminal = () => window.dispatchEvent(new Event("terminal:open"))

/** Ctrl/⌘+K or "/" opens a small shell that drives the page. */
export function Terminal() {
  const { t, content, setLocale } = useI18n()
  const { toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState<Line[]>([])
  const [value, setValue] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [hIdx, setHIdx] = useState(-1)
  const input = useRef<HTMLInputElement>(null)
  const log = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || (e.key === "/" && !isTyping(e.target))) {
        e.preventDefault()
        setOpen(true)
      }
    }
    const onOpen = () => setOpen(true)
    window.addEventListener("keydown", onKey)
    window.addEventListener("terminal:open", onOpen)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("terminal:open", onOpen)
    }
  }, [])

  useEffect(() => {
    if (open) {
      if (!lines.length) setLines([{ kind: "out", text: t.fun.help }])
      requestAnimationFrame(() => input.current?.focus())
    }
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    log.current?.scrollTo({ top: log.current.scrollHeight })
  }, [lines])

  const ids = content.nav.map((n) => n.href.slice(1))

  function run(raw: string): string[] | null {
    const [cmd = "", ...args] = raw.trim().split(/\s+/)
    const arg = args.join(" ").toLowerCase()
    switch (cmd.toLowerCase()) {
      case "":
        return []
      case "help":
        return [t.fun.help]
      case "whoami":
        return [t.fun.whoami]
      case "stack":
        return content.skillGroups.map((g) => `${g.label}: ${g.skills.join(", ")}`)
      case "ls":
        return [t.fun.sections + content.nav.map((n) => n.href.slice(1)).join("  ")]
      case "cd": {
        const hit = content.nav.find((n) => n.href.slice(1) === arg || n.label.toLowerCase() === arg)
        if (!hit) return [t.fun.sections + ids.join("  ")]
        setOpen(false)
        document.querySelector(hit.href)?.scrollIntoView({ behavior: "smooth" })
        return [t.fun.goto + hit.label]
      }
      case "cv": {
        const a = document.createElement("a")
        a.href = t.hero.cvHref
        a.download = ""
        a.click()
        return [t.hero.cvCta]
      }
      case "contato":
      case "contact":
      case "contacto":
        return [content.profile.email, content.profile.linkedin, content.profile.github]
      case "theme":
        toggleTheme()
        return ["ok"]
      case "lang":
        if (!LOCALES.includes(arg as Locale)) return ["lang " + LOCALES.join(" | ")]
        setLocale(arg as Locale)
        return ["ok"]
      case "dims":
        return [toggleDims() ? t.fun.dimsOn : t.fun.dimsOff]
      case "sudo":
        return [t.fun.sudo + content.profile.email]
      case "clear":
        setLines([])
        return null
      case "exit":
        setOpen(false)
        return null
      default:
        return [t.fun.notFound + cmd]
    }
  }

  function submit(e: FormEvent) {
    e.preventDefault()
    const raw = value
    setValue("")
    setHIdx(-1)
    if (raw.trim()) setHistory((h) => [raw, ...h].slice(0, 30))
    const out = run(raw)
    if (out) setLines((l) => [...l, { kind: "in", text: raw }, ...out.map((text) => ({ kind: "out" as const, text }))])
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-background/60 px-4 pt-[14vh] backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div role="dialog" aria-modal="true" aria-label={t.fun.terminalLabel} className="ruled w-full max-w-2xl bg-popover font-mono text-[13px]">
        <div className="flex items-center justify-between border-b border-border px-4 py-2 text-[11px] text-muted-foreground">
          <span>~/miguelvzs</span>
          <span>esc</span>
        </div>
        <div ref={log} className="max-h-[48vh] space-y-1 overflow-y-auto px-4 py-3" aria-live="polite">
          {lines.map((line, i) =>
            line.kind === "in" ? (
              <p key={i} className="text-foreground">
                <span className="text-brand">$ </span>
                {line.text}
              </p>
            ) : (
              <p key={i} className="whitespace-pre-wrap text-muted-foreground">
                {line.text}
              </p>
            ),
          )}
        </div>
        <form onSubmit={submit} className="flex items-center gap-2 border-t border-border px-4 py-3">
          <label htmlFor="term-input" className="text-brand">
            miguel@prancheta:~$
          </label>
          <input
            id="term-input"
            ref={input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false)
              if (e.key === "ArrowUp" && history[hIdx + 1] !== undefined) {
                e.preventDefault()
                setHIdx(hIdx + 1)
                setValue(history[hIdx + 1])
              }
              if (e.key === "ArrowDown") {
                e.preventDefault()
                const next = hIdx - 1
                setHIdx(Math.max(next, -1))
                setValue(next >= 0 ? history[next] : "")
              }
            }}
            placeholder={t.fun.placeholder}
            autoFocus
            autoComplete="off"
            spellCheck={false}
            className="min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground/60"
          />
        </form>
      </div>
    </div>
  )
}
