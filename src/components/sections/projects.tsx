import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { ProjectCard } from "@/components/project-card"
import { AiProjectCard } from "@/components/ai-project-card"
import { webProjects, aiProjects } from "@/lib/content"

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Projetos" title="O que tenho construído" id="projects-heading" />
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
