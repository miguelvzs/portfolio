import { ArrowUpRight, Lock } from "lucide-react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { WebProject } from "@/lib/content"

export function ProjectCard({ project, index }: { project: WebProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
    >
      <Card className="group h-full gap-0 py-0 ring-border transition-all duration-300 hover:-translate-y-1 hover:ring-brand/50">
        <div className="border-b border-border bg-muted/40 px-3 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <div className="ml-2 flex flex-1 items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1">
              <Lock className="size-2.5 text-emerald-500" />
              <span className="truncate font-mono text-[10px] text-muted-foreground">
                {project.displayUrl}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2.5 p-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-semibold text-foreground">{project.name}</h3>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-brand"
            >
              abrir site
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

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
