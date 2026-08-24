import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/content"

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Projetos" title="O que tenho construído" id="projects-heading" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
