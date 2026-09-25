import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { useI18n } from "@/lib/i18n"

export function Process() {
  const { t } = useI18n()

  return (
    <section id="process" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} id="process-heading" />
        </Reveal>

        <ol className="grid gap-6 sm:grid-cols-2">
          {t.process.items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={(i % 2) * 0.08} className="h-full rounded-xl border border-border bg-card/40 p-6">
                <p className="mb-3 font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
