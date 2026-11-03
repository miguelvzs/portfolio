import { cn } from "@/lib/utils"
import { localeMeta, LOCALES } from "@/lib/i18n-types"
import { useI18n } from "@/lib/i18n"

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div role="group" aria-label={t.aria.language} className="flex items-center font-mono text-xs">
      {LOCALES.map((code, i) => {
        const active = locale === code
        return (
          <span key={code} className="flex items-center">
            {i > 0 && <span className="px-1 text-border" aria-hidden="true">/</span>}
            <button
              type="button"
              onClick={() => setLocale(code)}
              aria-label={localeMeta[code].nativeName}
              aria-pressed={active}
              title={localeMeta[code].nativeName}
              className={cn(
                "rounded-[2px] px-1 py-1 uppercase transition-colors focus-visible:outline-2 focus-visible:outline-ring",
                active ? "text-brand underline underline-offset-4" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {code}
            </button>
          </span>
        )
      })}
    </div>
  )
}
