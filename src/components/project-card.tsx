import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Card } from "@/components/ui/card"
import type { ProductProject } from "@/lib/content"
import { useI18n } from "@/lib/i18n"

export function ProjectCard({ project, index }: { project: ProductProject; index: number }) {
  const { t } = useI18n()
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <Card className="h-full gap-3 p-5 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10 hover:ring-brand/50">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
          <p className="font-mono text-[13px] tracking-wide text-brand">{project.status}</p>
        </div>

        <p className="text-base leading-relaxed text-muted-foreground">{project.description}</p>
        <p className="text-base leading-relaxed text-foreground/85">{project.role}</p>

        <p className="mt-auto font-mono text-[13px] leading-relaxed text-muted-foreground">{project.stack}</p>

        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-fit items-center gap-1 text-base text-muted-foreground transition-colors hover:text-brand"
          >
            {project.displayUrl ?? t.projects.openSite}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        ) : (
          <p className="min-h-11 pt-2.5 text-base text-muted-foreground">{t.projects.noLink}</p>
        )}
      </Card>
    </Reveal>
  )
}
