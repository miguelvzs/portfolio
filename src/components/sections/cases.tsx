import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { PipelineDiagram } from "@/components/pipeline-diagram"
import { Card } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"

export function Cases() {
  const { t } = useI18n()

  return (
    <section id="cases" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow={t.cases.eyebrow} title={t.cases.title} id="cases-heading" size="lg" />
          <p className="-mt-6 mb-10 max-w-2xl text-base text-muted-foreground md:-mt-8">{t.cases.subtitle}</p>
        </Reveal>

        <div className="space-y-8">
          {t.cases.items.map((item) => {
            const result = item.arc.find(([key]) => key === "resultado")
            const story = item.arc.filter(([key]) => key !== "resultado")
            return (
              <Reveal key={item.slug}>
                <Card id={item.slug} className="scroll-mt-20 gap-6 p-6 ring-border md:p-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground md:text-2xl">{item.title}</h3>
                    <p className="mt-2 max-w-3xl text-base leading-relaxed text-muted-foreground">{item.intro}</p>
                  </div>

                  {item.flow && (
                    <div>
                      {item.flowLabel && (
                        <p className="mb-2 font-mono text-[13px] tracking-widest text-brand uppercase">
                          {item.flowLabel}
                        </p>
                      )}
                      <PipelineDiagram
                        steps={item.flow}
                        label={t.aria.flow.replace("{name}", item.title)}
                        mineLabel={t.aria.mine}
                      />
                      {item.flow.some((s) => s.mine) && (
                        <p className="mt-2 flex items-center gap-2 text-base text-muted-foreground">
                          <span aria-hidden="true" className="inline-block h-3 w-3 rounded-sm bg-brand" />
                          {t.aria.mine}
                        </p>
                      )}
                    </div>
                  )}

                  {item.body && (
                    <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-[17px]">{item.body}</p>
                  )}

                  {story.length > 0 && (
                  <dl className="grid gap-x-8 gap-y-2 md:grid-cols-[11rem_1fr] md:gap-y-5">
                    {story.map(([key, text], i) => (
                      <div key={key} className="contents">
                        <dt
                          className={
                            "font-mono text-[13px] tracking-widest text-brand uppercase md:mt-0 md:pt-1 " +
                            (i > 0 ? "mt-3" : "")
                          }
                        >
                          {t.cases.arcLabels[key]}
                        </dt>
                        <dd className="text-base leading-relaxed text-muted-foreground">{text}</dd>
                      </div>
                    ))}
                  </dl>
                  )}

                  {result && (
                    <div className="rounded-lg border border-brand/30 bg-brand/5 p-4">
                      <p className="mb-1 font-mono text-[13px] tracking-widest text-brand uppercase">
                        {t.cases.arcLabels.resultado}
                      </p>
                      <p className="text-base leading-relaxed text-foreground">{result[1]}</p>
                    </div>
                  )}

                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 w-fit items-center gap-1 text-base text-muted-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
                    >
                      {item.link.label}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  )}
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
