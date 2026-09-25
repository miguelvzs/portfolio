import type { ReasonCode } from "@/lib/validator"

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

export type NavId = "about" | "experience" | "cases" | "skills" | "projects" | "credentials" | "contact"

export type WebProjectCopy = {
  description: string
  role: string
}

export type AiProjectCopy = {
  description: string
  role: string
  highlights: string[]
  diagramSteps: string[]
}

export type Messages = {
  meta: {
    title: string
    description: string
    ogDescription: string
    twitterDescription: string
    siteName: string
    jobTitle: string
    knowsAboutAi: string
  }
  aria: {
    skipToContent: string
    mainNav: string
    mobileNav: string
    openMenu: string
    closeMenu: string
    themeLight: string
    themeDark: string
    language: string
    scrollToAbout: string
    stackUsedIn: string
  }
  nav: Record<NavId, string>
  profile: {
    role: string
  }
  hero: {
    subtitle: string
    available: string
    contactCta: string
    projectsCta: string
    cvCta: string
    cvHref: string
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: [string, string, string]
  }
  skills: {
    eyebrow: string
    title: string
    groups: { label: string; skills: string[] }[]
  }
  projects: {
    eyebrow: string
    title: string
    webHeading: string
    showOlder: string
    aiHeading: string
    openSite: string
    viewRepo: string
    tryDemo: string
    web: {
      cortex: WebProjectCopy
      modus: WebProjectCopy
      elos: WebProjectCopy
    }
    ai: {
      "validador-registros-tabulares": AiProjectCopy
      "pipeline-tendencia-conteudo": AiProjectCopy
    }
  }
  credentials: {
    eyebrow: string
    title: string
    educationHeading: string
    awardsHeading: string
    education: {
      period: string
      title: string
      org: string
      note?: string
    }[]
    awards: {
      year: string
      title: string
      desc: string
    }[]
  }
  stats: {
    label: string
    items: { value: string; label: string }[]
  }
  demo: {
    eyebrow: string
    title: string
    intro: string
    editLabel: string
    validate: string
    recover: string
    recovering: string
    reset: string
    valid: string
    rejected: string
    recovered: string
    order: string
    reasonsCol: string
    corrections: string
    noCorrections: string
    aiNote: string
    unavailable: string
    rateLimited: string
    error: string
    reasons: Record<ReasonCode, string>
  }
  cases: {
    eyebrow: string
    title: string
    subtitle: string
    context: string
    did: string
    result: string
    readArticle: string
    items: {
      slug: string
      title: string
      context: string
      points: string[]
      result: string
      stack: string[]
      diagram: string[]
    }[]
  }
  process: {
    eyebrow: string
    title: string
    items: { title: string; desc: string }[]
  }
  experience: {
    eyebrow: string
    title: string
    items: {
      period: string
      role: string
      org: string
      desc: string
      highlights?: string[]
    }[]
  }
  contact: {
    eyebrow: string
    title: string
    body: string
  }
  footer: {
    source: string
  }
}
