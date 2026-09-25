import { ChevronDown } from "lucide-react"
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
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            id="projects-heading"
            size="lg"
          />
        </Reveal>

        <Reveal>
          <h3 className="mb-5 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {t.projects.aiHeading}
          </h3>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {content.aiProjects.map((project, i) => (
            <AiProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <ValidatorDemo />

        <details className="group mt-12">
          <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:border-brand hover:text-brand [&::-webkit-details-marker]:hidden">
            <ChevronDown aria-hidden="true" className="size-3.5 transition-transform group-open:rotate-180" />
            {t.projects.showOlder}
          </summary>
          <h3 className="mt-8 mb-5 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {t.projects.webHeading}
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {content.webProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </details>
      </div>
    </section>
  )
}
