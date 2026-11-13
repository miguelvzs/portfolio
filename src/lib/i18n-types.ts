import type { pt } from "@/lib/messages/pt"

export const LOCALES = ["pt", "en", "es"] as const

export type Locale = (typeof LOCALES)[number]

export type LocaleMeta = {
  htmlLang: string
  ogLocale: string
  flagSrc: string
  nativeName: string
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  pt: {
    htmlLang: "pt-BR",
    ogLocale: "pt_BR",
    flagSrc: "/assets/flags/br.svg",
    nativeName: "Português",
  },
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    flagSrc: "/assets/flags/us.svg",
    nativeName: "English",
  },
  es: {
    htmlLang: "es",
    ogLocale: "es_ES",
    flagSrc: "/assets/flags/es.svg",
    nativeName: "Español",
  },
}

export type NavId = "about" | "experience" | "cases" | "projects" | "notes" | "credentials" | "contact"

/** O PT é a fonte da forma; EN e ES precisam ter exatamente as mesmas chaves (regra: sempre PT, EN e ES). */
export type Messages = typeof pt
