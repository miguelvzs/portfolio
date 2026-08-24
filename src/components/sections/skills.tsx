import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { skillGroups } from "@/lib/content"

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Skills" title="Tecnologias que uso no dia a dia" id="skills-heading" />
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.08}>
              <h3 className="mb-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.08 + si * 0.03, duration: 0.3 }}
                  >
                    <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-brand hover:text-brand">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
