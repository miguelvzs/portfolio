// Formas compartilhadas pelo texto em PT e EN.

export type ArcKey = "problema" | "restricao" | "decisao" | "erro" | "fora" | "resultado"

export type FlowStep = { label: string; mine?: boolean }

export type CaseCopy = {
  slug: "vell" | "morada" | "quebra-gelo"
  title: string
  intro: string
  flowLabel?: string
  flow?: FlowStep[]
  body?: string
  arc: [ArcKey, string][]
  stack?: string
  link?: { href: string; label: string }
}

export type ExperienceCopy = {
  period?: string
  role: string
  org: string
  desc: string
  highlights?: string[]
  more?: string[]
}

export type ProductCopy = {
  status?: string
  description: string
  role: string
}

export type AiProjectCopy = {
  description: string
  role: string
  highlights: string[]
  diagramSteps: string[]
}

export type NoteCopy = {
  title: string
  summary: string
  href: string
}
