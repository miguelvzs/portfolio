import { useI18n } from "@/lib/i18n"

declare const __REV__: string
declare const __BUILT__: string

export function Footer() {
  const { t, content } = useI18n()
  const { profile } = content

  // drawing title block: who drew it, which revision, when
  const cells = [
    { k: "dwg", v: profile.name },
    { k: t.footer.rev, v: <a href={`${profile.github}/portfolio/commit/${__REV__}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand">{__REV__}</a> },
    { k: t.footer.built, v: __BUILT__ },
    { k: "", v: t.footer.sheet },
    { k: "src", v: <a href={`${profile.github}/portfolio`} target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-4">{t.footer.source}</a> },
  ]

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-5xl px-6">
      <dl className="ruled grid grid-cols-1 font-mono text-xs sm:grid-cols-5">
        {cells.map((c, i) => (
          <div key={i} className="border-border px-3 py-2.5 [&:not(:first-child)]:border-t sm:[&:not(:first-child)]:border-t-0 sm:[&:not(:first-child)]:border-l">
            {c.k && <dt className="text-[10px] text-muted-foreground">{c.k}</dt>}
            <dd className="text-foreground">{c.v}</dd>
          </div>
        ))}
      </dl>
      </div>
    </footer>
  )
}
