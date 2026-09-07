import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { localeMeta, LOCALES } from "@/lib/i18n-types"
import { useI18n } from "@/lib/i18n"

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div role="group" aria-label={t.aria.language} className="flex items-center">
      {LOCALES.map((code) => {
        const meta = localeMeta[code]
        const active = locale === code
        return (
          <Button
            key={code}
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => setLocale(code)}
            aria-label={meta.nativeName}
            aria-pressed={active}
            title={meta.nativeName}
            className={cn(active && "bg-muted ring-1 ring-brand/70")}
          >
            <img
              src={meta.flagSrc}
              alt=""
              width={20}
              height={14}
              draggable={false}
              className={cn(
                "h-3.5 w-5 rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.12)] transition-opacity dark:shadow-[0_0_0_1px_rgba(255,255,255,0.18)]",
                active ? "opacity-100" : "opacity-55 group-hover/button:opacity-100"
              )}
            />
          </Button>
        )
      })}
    </div>
  )
}
