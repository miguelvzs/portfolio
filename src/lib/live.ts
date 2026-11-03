import { useEffect, useState } from "react"

/** Current time in Extrema (America/Sao_Paulo), ticking every second. */
export function useLocalTime(locale: string) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return new Intl.DateTimeFormat(locale, {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now)
}

type Push = { repo: string; at: string }
const CACHE_KEY = "last-push"

/** Latest public push on GitHub. Cached per session to stay under the 60 req/h anonymous limit. */
export function useLastPush(user: string) {
  const [push, setPush] = useState<Push | null>(() => {
    try {
      const raw = sessionStorage.getItem(CACHE_KEY)
      return raw ? (JSON.parse(raw) as Push) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (push) return
    const ctrl = new AbortController()
    fetch(`https://api.github.com/users/${user}/events/public?per_page=30`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : []))
      .then((events: { type: string; repo: { name: string }; created_at: string }[]) => {
        const ev = events.find((e) => e.type === "PushEvent")
        if (!ev) return
        const next = { repo: ev.repo.name.split("/")[1], at: ev.created_at }
        setPush(next)
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(next))
        } catch {
          /* storage blocked: fine, refetch next visit */
        }
      })
      .catch(() => {})
    return () => ctrl.abort()
  }, [push, user])

  return push
}

/** "3 hours ago" style, in the page locale. */
export function timeAgo(iso: string, locale: string) {
  const s = (Date.parse(iso) - Date.now()) / 1000
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })
  const steps: [Intl.RelativeTimeFormatUnit, number][] = [
    ["second", 60],
    ["minute", 60],
    ["hour", 24],
    ["day", 30],
    ["month", 12],
  ]
  let v = s
  for (const [unit, size] of steps) {
    if (Math.abs(v) < size) return rtf.format(Math.round(v), unit)
    v /= size
  }
  return rtf.format(Math.round(v), "year")
}

/** Id of the section currently under the navbar, for the active nav link. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [ids.join()]) // eslint-disable-line react-hooks/exhaustive-deps
  return active
}
