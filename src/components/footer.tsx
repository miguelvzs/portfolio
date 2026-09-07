import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t, content } = useI18n()

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          {t.footer.by}{" "}
          <span className="text-brand">{content.profile.name.toLowerCase().replace(" ", "")}</span> ·{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
