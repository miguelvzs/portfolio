import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { aboutParagraphs, timeline } from "@/lib/content"

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Sobre" title="Quem está por trás do código" id="about-heading" />
        </Reveal>

        <div className="grid gap-14 md:grid-cols-2">
          <Reveal>
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              {aboutParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="relative border-l border-border pl-6">
              {timeline.map((item) => (
                <li key={item.year} className="relative mb-7 last:mb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-brand"
                  />
                  <p className="mb-1 font-mono text-[10px] tracking-widest text-brand uppercase">
                    {item.year}
                  </p>
                  <p className="mb-1 text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
