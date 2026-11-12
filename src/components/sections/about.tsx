import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { useI18n } from "@/lib/i18n"

export function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} id="about-heading" />
        </Reveal>

        <Reveal>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-[17px]">
            {t.about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
            <span className="mr-2 font-mono text-[13px] tracking-[0.14em] text-brand uppercase">
              {t.about.stackLabel}
            </span>
            {t.about.stack}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
