import type { Messages, NavId } from "@/lib/i18n-types"
import type { ExperienceCopy } from "@/lib/copy-types"

export const profile = {
  name: "Miguel Vaz",
  email: "miguelsouza7970@gmail.com",
  github: "https://github.com/miguelvzs",
  linkedin: "https://linkedin.com/in/miguelvzs",
  url: "https://miguelvaz.vercel.app",
}

export const navItems: { id: NavId; href: string }[] = [
  { id: "about", href: "#about" },
  { id: "experience", href: "#experience" },
  { id: "cases", href: "#cases" },
  { id: "projects", href: "#projects" },
  { id: "notes", href: "#notes" },
  { id: "credentials", href: "#credentials" },
  { id: "contact", href: "#contact" },
]

export type ProductProject = {
  slug: string
  name: string
  status?: string
  description: string
  role: string
  href?: string
  displayUrl?: string
}

export type AiProject = {
  slug: "validador-registros-tabulares" | "pipeline-tendencia-conteudo"
  name: string
  description: string
  role: string
  repoUrl: string
  highlights: string[]
  diagramSteps: string[]
}

const productMeta: Omit<ProductProject, "status" | "description" | "role">[] = [
  {
    slug: "studoo",
    name: "Studoo",
  },
  {
    slug: "media-hub",
    name: "Media Ops Hub",
  },
  {
    slug: "vellfinancing",
    name: "MV Financing",
    href: "https://github.com/miguelvzs/vellfinancing",
    displayUrl: "github.com/miguelvzs/vellfinancing",
  },
]

const olderMeta: Omit<ProductProject, "status" | "description" | "role">[] = [
  { slug: "cortex", name: "Cortex", href: "https://cortex-demo-eight.vercel.app/", displayUrl: "cortex-demo-eight.vercel.app" },
  { slug: "modus", name: "Modus", href: "https://plataformamodus.vercel.app/?demo", displayUrl: "plataformamodus.vercel.app" },
  { slug: "elos", name: "ELOS", href: "https://elosgestao.netlify.app/", displayUrl: "elosgestao.netlify.app" },
]

const aiMeta: Omit<AiProject, "description" | "role" | "highlights" | "diagramSteps">[] = [
  {
    slug: "validador-registros-tabulares",
    name: "Validador de Pedidos",
    repoUrl: "https://github.com/miguelvzs/validador-registros-tabulares",
  },
  {
    slug: "pipeline-tendencia-conteudo",
    name: "Radar de Tendência",
    repoUrl: "https://github.com/miguelvzs/pipeline-tendencia-conteudo",
  },
]

export type LocalizedContent = {
  profile: typeof profile & { role: string }
  nav: { id: NavId; href: string; label: string }[]
  productProjects: ProductProject[]
  olderProjects: ProductProject[]
  aiProjects: AiProject[]
  experience: ExperienceCopy[]
}

export function buildContent(t: Messages): LocalizedContent {
  return {
    profile: { ...profile, role: t.profile.role },
    nav: navItems.map((item) => ({ ...item, label: t.nav[item.id] })),
    productProjects: productMeta.map((p) => ({ ...p, ...t.projects.products[p.slug as keyof typeof t.projects.products] })),
    olderProjects: olderMeta.map((p) => ({ ...p, ...t.projects.older[p.slug as keyof typeof t.projects.older] })),
    aiProjects: aiMeta.map((p) => ({ ...p, ...t.projects.ai[p.slug] })),
    experience: t.experience.items,
  }
}
