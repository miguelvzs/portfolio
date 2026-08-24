import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { BackgroundGrid } from "@/components/background-grid"
import { skillGroups } from "@/lib/content"

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <BackgroundGrid className="opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,var(--color-brand)_0%,transparent_70%)] opacity-[0.08]"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tecnologias que uso no dia a dia"
            id="skills-heading"
            size="lg"
          />
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2">
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
