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

export type NavId = "about" | "skills" | "projects" | "credentials" | "contact"

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
    aiHeading: string
    openSite: string
    viewRepo: string
    web: {
      cortex: WebProjectCopy
      "mv-financing": WebProjectCopy
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
  experience: {
    eyebrow: string
    title: string
    items: {
      period: string
      role: string
      org: string
      desc: string
    }[]
  }
  contact: {
    eyebrow: string
    title: string
    body: string
  }
  footer: {
    by: string
  }
}
