import { Reveal } from "@/components/reveal"
import { useI18n } from "@/lib/i18n"

export function Stats() {
  const { t } = useI18n()

  return (
    <section aria-label={t.stats.label} className="border-t border-border py-12 md:py-16">
      <dl className="mx-auto grid max-w-5xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.stats.items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.08} className="flex flex-col-reverse text-center sm:text-left">
            <dt className="mt-1 text-sm text-muted-foreground">{item.label}</dt>
            <dd className="font-mono text-2xl font-semibold tracking-tight whitespace-nowrap text-foreground">
              {item.value}
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
