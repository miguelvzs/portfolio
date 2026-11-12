import { Award as AwardIcon, GraduationCap } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { useI18n } from "@/lib/i18n"

export function Credentials() {
  const { t } = useI18n()

  return (
    <section id="credentials" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow={t.credentials.eyebrow} title={t.credentials.title} id="credentials-heading" />
        </Reveal>

        <div className="grid gap-14 md:grid-cols-2">
          <Reveal>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-[13px] tracking-widest text-muted-foreground uppercase">
              <GraduationCap className="size-4" aria-hidden="true" />
              {t.credentials.educationHeading}
            </h3>
            <ul className="space-y-5">
              {t.credentials.education.map((item) => (
                <li key={item.title}>
                  <p className="text-base font-semibold text-foreground">{item.title}</p>
                  <p className="text-base text-muted-foreground">{item.org}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-[13px] tracking-widest text-muted-foreground uppercase">
              <AwardIcon className="size-4" aria-hidden="true" />
              {t.credentials.awardsHeading}
            </h3>
            <ul className="space-y-5">
              {t.credentials.awards.map((item) => (
                <li key={item.title}>
                  {item.year && (
                    <p className="mb-0.5 font-mono text-[13px] tracking-widest text-brand uppercase">{item.year}</p>
                  )}
                  <p className="text-base font-semibold text-foreground">{item.title}</p>
                  <p className="text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
