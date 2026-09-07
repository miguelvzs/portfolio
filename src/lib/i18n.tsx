import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { localeMeta, LOCALES, type Locale, type Messages } from "@/lib/i18n-types"
import { dictionaries } from "@/lib/messages"
import { buildContent, type LocalizedContent } from "@/lib/content"

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
  content: LocalizedContent
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function isLocale(value: string | null): value is Locale {
  return value === "pt" || value === "en" || value === "es"
}

function localeFromNavigator(): Locale {
  if (typeof navigator === "undefined") return "pt"
  const lang = (navigator.language || "").toLowerCase()
  if (lang.startsWith("en")) return "en"
  if (lang.startsWith("es")) return "es"
  return "pt"
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "pt"
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    // localStorage can throw in private mode
  }
  return localeFromNavigator()
}

type JsonLdPerson = {
  jobTitle?: string
  knowsAbout?: string[]
}

function applyDocumentMeta(locale: Locale, t: Messages) {
  const meta = localeMeta[locale]
  document.documentElement.lang = meta.htmlLang
  document.title = t.meta.title

  const setNamed = (name: string, value: string) => {
    document.querySelector(`meta[name="${name}"]`)?.setAttribute("content", value)
  }
  const setProperty = (property: string, value: string) => {
    document.querySelector(`meta[property="${property}"]`)?.setAttribute("content", value)
  }

  setNamed("description", t.meta.description)
  setNamed("twitter:title", t.meta.title)
  setNamed("twitter:description", t.meta.twitterDescription)
  setProperty("og:title", t.meta.title)
  setProperty("og:description", t.meta.ogDescription)
  setProperty("og:locale", meta.ogLocale)
  setProperty("og:site_name", t.meta.siteName)

  const existingAlternates = document.querySelectorAll('meta[property="og:locale:alternate"]')
  existingAlternates.forEach((node) => node.remove())
  const head = document.head
  for (const other of LOCALES) {
    if (other === locale) continue
    const tag = document.createElement("meta")
    tag.setAttribute("property", "og:locale:alternate")
    tag.setAttribute("content", localeMeta[other].ogLocale)
    head.appendChild(tag)
  }

  const script = document.querySelector('script[type="application/ld+json"]')
  if (!script?.textContent) return
  try {
    const data = JSON.parse(script.textContent) as JsonLdPerson
    data.jobTitle = t.meta.jobTitle
    data.knowsAbout = [
      "JavaScript",
      "React",
      "Python",
      "FastAPI",
      "Node.js",
      "C#",
      t.meta.knowsAboutAi,
      "Anthropic Claude API",
      "MCP",
    ]
    script.textContent = JSON.stringify(data)
  } catch {
    // keep existing JSON-LD if parsing fails
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)
  const t = dictionaries[locale]
  const content = useMemo(() => buildContent(t), [t])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // ignore quota / privacy errors
    }
    applyDocumentMeta(locale, t)
  }, [locale, t])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const value = useMemo(
    () => ({ locale, setLocale, t, content }),
    [locale, setLocale, t, content]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useI18n must be used within LocaleProvider")
  return ctx
}
