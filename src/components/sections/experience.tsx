import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { useI18n } from "@/lib/i18n"

export function Experience() {
  const { t, content } = useI18n()

  return (
    <section id="experience" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.experience.eyebrow}
            title={t.experience.title}
            id="experience-heading"
          />
        </Reveal>

        <ol className="relative max-w-3xl border-l border-border pl-6">
          {content.experience.map((item, i) => (
            <Reveal as="li" key={item.org} delay={i * 0.08} className="relative mb-8 last:mb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-brand"
              />
              <p className="mb-1 font-mono text-[10px] tracking-widest text-brand uppercase">
                {item.period}
              </p>
              <p className="mb-1 text-sm font-semibold text-foreground">
                {item.role} <span className="font-normal text-muted-foreground">· {item.org}</span>
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              {item.highlights && (
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-brand">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
