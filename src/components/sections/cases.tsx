import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { PipelineDiagram } from "@/components/pipeline-diagram"
import { Card } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"

const ARTICLES: Record<string, string> = {
  cloud: "/artigos/migracao-cloud-run/",
}

export function Cases() {
  const { t } = useI18n()

  return (
    <section id="cases" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow={t.cases.eyebrow} title={t.cases.title} id="cases-heading" size="lg" />
          <p className="-mt-6 mb-10 max-w-2xl text-sm text-muted-foreground md:-mt-8">{t.cases.subtitle}</p>
        </Reveal>

        <div className="space-y-8">
          {t.cases.items.map((item) => (
            <Reveal key={item.slug}>
              <Card className="gap-5 p-6 ring-border md:p-8">
                <h3 className="text-lg font-semibold text-foreground md:text-xl">{item.title}</h3>

                <div>
                  <p className="mb-1 font-mono text-[11px] tracking-widest text-brand uppercase">{t.cases.context}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.context}</p>
                </div>

                <PipelineDiagram steps={item.diagram} />

                <div>
                  <p className="mb-2 font-mono text-[11px] tracking-widest text-brand uppercase">{t.cases.did}</p>
                  <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-brand">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-brand/30 bg-brand/5 p-4">
                  <p className="mb-1 font-mono text-[11px] tracking-widest text-brand uppercase">{t.cases.result}</p>
                  <p className="text-sm leading-relaxed text-foreground">{item.result}</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <ul className="flex flex-wrap gap-1.5" aria-label={t.aria.stackUsedIn.replace("{name}", item.title)}>
                    {item.stack.map((tech) => (
                      <li key={tech} className="rounded-md bg-brand/10 px-2 py-0.5 font-mono text-[11px] text-brand">
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {ARTICLES[item.slug] && (
                    <a
                      href={ARTICLES[item.slug]}
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-brand"
                    >
                      {t.cases.readArticle}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
