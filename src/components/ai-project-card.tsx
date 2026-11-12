import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Card } from "@/components/ui/card"
import { PipelineDiagram } from "@/components/pipeline-diagram"
import type { AiProject } from "@/lib/content"
import { useI18n } from "@/lib/i18n"

export function AiProjectCard({ project, index }: { project: AiProject; index: number }) {
  const { t } = useI18n()
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <Card className="h-full gap-3 p-5 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10 hover:ring-brand/50">
        <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
        <p className="text-base leading-relaxed text-muted-foreground">{project.description}</p>

        <PipelineDiagram steps={project.diagramSteps} />

        <ul className="space-y-1">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2 text-base text-foreground">
              <span aria-hidden="true" className="text-brand">
                ·
              </span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-x-6">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1 text-base text-muted-foreground transition-colors hover:text-brand"
          >
            {t.projects.viewRepo}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          {project.slug === "validador-registros-tabulares" && (
            <a
              href="#demo"
              className="inline-flex min-h-11 items-center gap-1 text-base text-muted-foreground transition-colors hover:text-brand"
            >
              {t.projects.tryDemo}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </Card>
    </Reveal>
  )
}
