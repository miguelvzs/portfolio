import { profile } from "@/lib/content"

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          por <span className="text-brand">{profile.name.toLowerCase().replace(" ", "")}</span> ·{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
