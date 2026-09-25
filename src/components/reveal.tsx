import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

// Fade/slide-in on first scroll into view. CSS lives in index.css (.reveal).
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: "div" | "li"
}) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add("is-visible")
        observer.disconnect()
      },
      { rootMargin: "0px 0px -80px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </Tag>
  )
}
