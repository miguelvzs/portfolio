import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundGrid } from "@/components/background-grid"
import { useI18n } from "@/lib/i18n"
import avatar from "@/assets/avatar.webp"

export function Hero() {
  const { t, content } = useI18n()
  const { profile } = content

  const socials = [
    { icon: Github, href: profile.github, label: "GitHub" },
    { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  ]

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-background"
    >
      <BackgroundGrid />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="rise">
          <div className="pop mb-6 inline-block">
            <img
              src={avatar}
              alt="Miguel Vaz"
              width={160}
              height={160}
              className="mx-auto h-28 w-28 rounded-full border-4 border-background object-cover shadow-lg md:h-40 md:w-40"
            />
          </div>

          <h1
            className="rise mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl"
          >
            {profile.name}
          </h1>

          <p
            className="rise mb-4 font-mono text-sm text-brand md:text-base"
          >
            {profile.role}
          </p>

          <p
            className="rise mx-auto mb-4 max-w-3xl text-xl text-muted-foreground md:text-2xl"
          >
            {t.hero.subtitle}
          </p>

          <div
            style={{ animationDelay: "0.45s" }}
            className="rise mb-8 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.available}
          </div>

          <div
            style={{ animationDelay: "0.5s" }}
            className="rise mb-12 flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="h-11 gap-2 px-6" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                {t.hero.contactCta}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-11 gap-2 px-6" asChild>
              <a href="#projects">
                {t.hero.projectsCta}
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-11 gap-2 px-6" asChild>
              <a href={t.hero.cvHref} download>
                <Download className="h-4 w-4" />
                {t.hero.cvCta}
              </a>
            </Button>
          </div>

          <div style={{ animationDelay: "0.6s" }} className="rise flex justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition hover:-translate-y-0.5 hover:scale-110 hover:bg-primary hover:text-primary-foreground active:scale-95"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label={t.aria.scrollToAbout}
        className="nudge absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
