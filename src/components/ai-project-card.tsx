import { ArrowUpRight, Github, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { PipelineDiagram } from "@/components/pipeline-diagram"
import type { AiProject } from "@/lib/content"

export function AiProjectCard({ project, index }: { project: AiProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <Card className="h-full gap-0 py-0 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10 hover:ring-brand/50">
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="flex items-center gap-2 text-base font-semibold text-foreground">
              <Sparkles className="size-4 text-brand" aria-hidden="true" />
              {project.name}
            </h3>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-brand"
            >
              <Github className="size-3.5" aria-hidden="true" />
              ver repositório
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

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

          <ul className="mt-1 flex flex-wrap gap-1.5" aria-label={`Stack usada em ${project.name}`}>
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-brand/10 px-2 py-0.5 font-mono text-[11px] text-brand"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  )
}
