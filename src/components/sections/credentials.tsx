import { Award as AwardIcon, GraduationCap } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { education, awards } from "@/lib/content"

export function Credentials() {
  return (
    <section id="credentials" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Formação" title="Formação & prêmios" id="credentials-heading" />
        </Reveal>

        <div className="grid gap-14 md:grid-cols-2">
          <Reveal>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              <GraduationCap className="size-3.5" aria-hidden="true" />
              Formação
            </h3>
            <ul className="space-y-5">
              {education.map((item) => (
                <li key={item.title}>
                  <p className="mb-0.5 font-mono text-[10px] tracking-widest text-brand uppercase">
                    {item.period}
                  </p>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.org}
                    {item.note ? ` · ${item.note}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              <AwardIcon className="size-3.5" aria-hidden="true" />
              Prêmios
            </h3>
            <ul className="space-y-5">
              {awards.map((item) => (
                <li key={item.title}>
                  <p className="mb-0.5 font-mono text-[10px] tracking-widest text-brand uppercase">
                    {item.year}
                  </p>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
