import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { useI18n } from "@/lib/i18n"

export function Notes() {
  const { t } = useI18n()

  return (
    <section id="notes" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow={t.notes.eyebrow} title={t.notes.title} id="notes-heading" />
        </Reveal>

        <ul className="max-w-3xl divide-y divide-border border-y border-border">
          {t.notes.items.map((note) => (
            <Reveal as="li" key={note.title}>
              {note.href ? (
                <a href={note.href} className="group block py-6">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-brand">
                    {note.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">{note.summary}</p>
                  <span className="mt-2 inline-flex min-h-11 items-center gap-1 text-base text-brand">
                    {t.notes.read}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </a>
              ) : (
                <div className="py-6">
                  <h3 className="text-lg font-semibold text-foreground">{note.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">{note.summary}</p>
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
