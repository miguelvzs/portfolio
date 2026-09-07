import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { useI18n } from "@/lib/i18n"

export function About() {
  const { t, content } = useI18n()

  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} id="about-heading" />
        </Reveal>

        <Reveal>
          <div className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {content.aboutParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
