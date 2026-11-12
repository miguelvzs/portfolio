import type { pt } from "@/lib/messages/pt"

export const LOCALES = ["pt", "en"] as const

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
}

export type NavId = "about" | "experience" | "cases" | "projects" | "notes" | "credentials" | "contact"

/** O PT é a fonte da forma; o EN precisa ter exatamente as mesmas chaves. */
export type Messages = typeof pt
