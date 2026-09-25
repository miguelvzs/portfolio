import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t, content } = useI18n()
  const { profile } = content

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          {profile.name} ·{" "}
          <a
            href={`${profile.github}/portfolio`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline underline-offset-4"
          >
            {t.footer.source}
          </a>{" "}
          · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
