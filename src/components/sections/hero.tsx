import { ArrowUpRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import avatar from "@/assets/avatar.webp"

export function Hero() {
  const { t, content } = useI18n()
  const { profile } = content
  const sheet = t.hero.sheet

  const links = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: profile.email, href: `mailto:${profile.email}` },
  ]

  const rows = [
    { k: sheet.role, v: profile.role },
    { k: sheet.base, v: sheet.baseValue },
    { k: sheet.status, v: t.hero.available },
    { k: sheet.stack, v: "TypeScript · Next.js · PostgreSQL · Google Cloud" },
  ]

  return (
    <section id="hero" className="relative w-full overflow-hidden">
      <div className="mx-auto grid min-h-[88dvh] max-w-6xl items-center gap-14 px-6 pt-16 pb-24 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div className="rise">
          <h1 className="text-[clamp(3.25rem,9vw,7rem)] leading-[0.92] font-bold tracking-[-0.045em] text-foreground">
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-brand">{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>

          {/* dimension line under the name, as on a technical drawing */}
          <div aria-hidden="true" className="mt-6 flex max-w-md items-center gap-3 text-brand/80">
            <span className="h-3 w-px bg-current" />
            <span className="relative h-px flex-1 bg-current">
              <span className="absolute top-1/2 left-0 size-1.5 -translate-y-1/2 rotate-45 border-b border-l border-current" />
              <span className="absolute top-1/2 right-0 size-1.5 -translate-y-1/2 rotate-45 border-t border-r border-current" />
            </span>
            <span className="h-3 w-px bg-current" />
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button size="lg" className="h-11 gap-2 px-5" asChild>
              <a href={`mailto:${profile.email}`}>{t.hero.contactCta}</a>
            </Button>
            <a
              href={t.hero.cvHref}
              download
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline decoration-border underline-offset-[6px] transition-colors hover:decoration-brand"
            >
              <Download className="size-4" aria-hidden="true" />
              {t.hero.cvCta}
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-foreground underline decoration-border underline-offset-[6px] transition-colors hover:decoration-brand"
            >
              {t.hero.projectsCta}
            </a>
          </div>
        </div>

        <aside style={{ animationDelay: "0.15s" }} className="rise w-full max-w-md justify-self-start lg:justify-self-end">
          <figure className="ruled overflow-hidden">
            <img
              src={avatar}
              alt={profile.name}
              width={480}
              height={480}
              className="aspect-[4/3] w-full object-cover object-[50%_30%]"
            />
          </figure>

          {/* title block: the facts a recruiter scans first */}
          <dl className="ruled mt-3 grid grid-cols-[auto_1fr] font-mono text-xs">
            {rows.map((row, i) => (
              <div key={row.k} className="contents">
                <dt className={"border-r border-border px-3 py-2.5 text-muted-foreground " + (i ? "border-t" : "")}>
                  {row.k}
                </dt>
                <dd className={"px-3 py-2.5 text-foreground " + (i ? "border-t border-border" : "")}>{row.v}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-brand"
                >
                  {link.label}
                  {link.href.startsWith("http") && <ArrowUpRight className="size-3" aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
