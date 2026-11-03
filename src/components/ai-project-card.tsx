import { ArrowUpRight, Github } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Card } from "@/components/ui/card"
import { PipelineDiagram } from "@/components/pipeline-diagram"
import type { AiProject } from "@/lib/content"
import { useI18n } from "@/lib/i18n"

export function AiProjectCard({ project, index }: { project: AiProject; index: number }) {
  const { t } = useI18n()
  return (
    <Reveal delay={index * 0.08}>
      <Card className="h-full gap-0 py-0 transition-colors hover:bg-muted/40">
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="flex items-center gap-2 text-base font-semibold text-foreground">
              {project.name}
            </h3>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-brand"
            >
              <Github className="size-3.5" aria-hidden="true" />
              {t.projects.viewRepo}
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {project.slug === "validador-registros-tabulares" && (
            <a
              href="#demo"
              className="inline-flex w-fit items-center gap-1.5 spec transition-colors hover:text-foreground"
            >
              <span aria-hidden="true" className="size-1.5 bg-brand" />
              {t.projects.tryDemo}
            </a>
          )}
          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

          <PipelineDiagram steps={project.diagramSteps} />

          <ul className="space-y-1">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2 text-sm text-foreground">
                <span aria-hidden="true" className="text-brand">
                  →
                </span>
                {highlight}
              </li>
            ))}
          </ul>

          <ul
            className="mt-1 flex flex-wrap gap-1.5"
            aria-label={t.aria.stackUsedIn.replace("{name}", project.name)}
          >
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="spec"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Reveal>
  )
}
