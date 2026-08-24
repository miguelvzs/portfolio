import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { BackgroundGrid } from "@/components/background-grid"
import { ProjectCard } from "@/components/project-card"
import { AiProjectCard } from "@/components/ai-project-card"
import { webProjects, aiProjects } from "@/lib/content"

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <BackgroundGrid className="opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,var(--color-brand)_0%,transparent_70%)] opacity-[0.08]"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Projetos"
            title="O que tenho construído"
            id="projects-heading"
            size="lg"
          />
        </Reveal>

        <Reveal>
          <h3 className="mb-5 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Web
          </h3>
        </Reveal>
        <div className="mb-16 grid gap-6 sm:grid-cols-2">
          {webProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <Reveal>
          <h3 className="mb-5 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            IA & automação
          </h3>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {aiProjects.map((project, i) => (
            <AiProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
