import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { aboutParagraphs } from "@/lib/content"

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Sobre" title="Quem está por trás do código" id="about-heading" />
        </Reveal>

        <Reveal>
          <div className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {aboutParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
