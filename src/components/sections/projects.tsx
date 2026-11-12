import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { BackgroundGrid } from "@/components/background-grid"
import { ProjectCard } from "@/components/project-card"
import { AiProjectCard } from "@/components/ai-project-card"
import { ValidatorDemo } from "@/components/validator-demo"
import { useI18n } from "@/lib/i18n"

export function Projects() {
  const { t, content } = useI18n()

  return (
    <section id="projects" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <BackgroundGrid className="opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,var(--color-brand)_0%,transparent_70%)] opacity-[0.08]"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} id="projects-heading" size="lg" />
        </Reveal>

        <Reveal>
          <h3 className="mb-5 font-mono text-[13px] tracking-widest text-muted-foreground uppercase">
            {t.projects.aiHeading}
          </h3>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {content.aiProjects.map((project, i) => (
            <AiProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <ValidatorDemo />

        <Reveal>
          <h3 className="mt-16 mb-5 font-mono text-[13px] tracking-widest text-muted-foreground uppercase">
            {t.projects.productsHeading}
          </h3>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {content.productProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
