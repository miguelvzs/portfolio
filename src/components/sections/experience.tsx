import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { experience } from "@/lib/content"

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Experiência" title="Onde já botei a mão" id="experience-heading" />
        </Reveal>

        <ol className="relative max-w-3xl border-l border-border pl-6">
          {experience.map((item, i) => (
            <motion.li
              key={item.org}
              className="relative mb-8 last:mb-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
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
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
