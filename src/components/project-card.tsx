import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Card } from "@/components/ui/card"
import type { WebProject } from "@/lib/content"
import { useI18n } from "@/lib/i18n"

export function ProjectCard({ project, index }: { project: WebProject; index: number }) {
  const { t } = useI18n()
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <Card className="group h-full gap-0 py-0 transition-colors duration-200 hover:bg-muted/40 ">
        <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-2.5 font-mono text-[11px] text-muted-foreground">
          <span className="text-brand">fig. {String(index + 1).padStart(2, "0")}</span>
          <span className="truncate">{project.displayUrl ?? t.projects.private}</span>
        </div>

        <div className="flex flex-1 flex-col gap-2.5 p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-semibold text-foreground">{project.name}</h3>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-brand"
              >
                {t.projects.openSite}
                <ArrowUpRight className="size-3.5" />
              </a>
            ) : (
              <span className="text-xs text-muted-foreground">{t.projects.private}</span>
            )}
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

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
