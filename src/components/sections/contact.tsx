import { Github, Linkedin, Mail } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/content"

const links = [
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Contato" title="Bora conversar?" id="contact-heading" />
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="gap-6 p-8 ring-border md:p-11">
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
              Estou aberto a oportunidades, projetos freelance e boas conversas sobre tecnologia.
              Tem algo em mente? Manda mensagem que eu respondo.
            </p>
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <Button key={link.label} variant="outline" className="h-10 gap-2 px-4" asChild>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <link.icon className="size-4" />
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
