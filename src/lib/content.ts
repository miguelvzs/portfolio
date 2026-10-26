import type { Messages, NavId } from "@/lib/i18n-types"

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
  { id: "skills", href: "#skills" },
  { id: "projects", href: "#projects" },
  { id: "credentials", href: "#credentials" },
  { id: "contact", href: "#contact" },
]

export type ExperienceItem = {
  period: string
  role: string
  org: string
  desc: string
  highlights?: string[]
}

export type EducationItem = {
  period: string
  title: string
  org: string
  note?: string
}

export type Award = {
  year: string
  title: string
  desc: string
}

export type SkillGroup = {
  label: string
  skills: string[]
}

export type WebProject = {
  kind: "web"
  slug: string
  name: string
  description: string
  role: string
  stack: string[]
  // sem demoUrl = projeto privado, o card mostra o selo em vez do link
  demoUrl?: string
  displayUrl?: string
}

type WebMeta<S> = Omit<WebProject, "description" | "role" | "slug"> & { slug: S }

export type AiProject = {
  kind: "ai"
  slug: "validador-registros-tabulares" | "pipeline-tendencia-conteudo"
  name: string
  description: string
  role: string
  stack: string[]
  repoUrl: string
  highlights: string[]
  diagramSteps: string[]
}

export type Project = WebProject | AiProject

const productProjectMeta: WebMeta<keyof Messages["projects"]["products"]>[] = [
  {
    kind: "web",
    slug: "morada",
    name: "Morada",
    stack: ["Expo", "React Native", "Next.js", "Prisma", "PostgreSQL"],
    demoUrl: "https://getmorada.app",
    displayUrl: "getmorada.app",
  },
  {
    kind: "web",
    slug: "media-hub",
    name: "Media Ops Hub",
    stack: ["Next.js 16", "Prisma", "PostgreSQL", "AI SDK", "Vercel Blob"],
  },
  {
    kind: "web",
    slug: "quebra-gelo",
    name: "Quebra-Gelo",
    stack: ["TypeScript", "Vite", "Express"],
    demoUrl: "https://quebra-gelo.julioakamine.com",
    displayUrl: "quebra-gelo.julioakamine.com",
  },
  {
    kind: "web",
    slug: "vellfinancing",
    name: "MV Financing",
    stack: ["JavaScript", "Drizzle", "PostgreSQL", "Vercel"],
    demoUrl: "https://github.com/miguelvzs/vellfinancing",
    displayUrl: "github.com/miguelvzs/vellfinancing",
  },
]

const webProjectMeta: WebMeta<keyof Messages["projects"]["web"]>[] = [
  {
    kind: "web",
    slug: "cortex",
    name: "Cortex",
    stack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://cortex-demo-eight.vercel.app/",
    displayUrl: "cortex-demo-eight.vercel.app",
  },
  {
    kind: "web",
    slug: "modus",
    name: "Modus",
    stack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://plataformamodus.vercel.app/?demo",
    displayUrl: "plataformamodus.vercel.app",
  },
  {
    kind: "web",
    slug: "elos",
    name: "ELOS",
    stack: ["HTML", "CSS", "JavaScript", "Leaflet.js", "ViaCEP"],
    demoUrl: "https://elosgestao.netlify.app/",
    displayUrl: "elosgestao.netlify.app",
  },
]

const aiProjectMeta: Omit<AiProject, "description" | "role" | "highlights" | "diagramSteps">[] = [
  {
    kind: "ai",
    slug: "validador-registros-tabulares",
    name: "Validador de Pedidos",
    stack: ["Python", "FastAPI", "Pandas", "Claude (Anthropic)", "MCP", "n8n"],
    repoUrl: "https://github.com/miguelvzs/validador-registros-tabulares",
  },
  {
    kind: "ai",
    slug: "pipeline-tendencia-conteudo",
    name: "Radar de Tendência",
    stack: ["Python", "NumPy", "APIs HTTP", "Claude (Anthropic)", "Docker", "Fly.io"],
    repoUrl: "https://github.com/miguelvzs/pipeline-tendencia-conteudo",
  },
]

export type LocalizedContent = {
  profile: typeof profile & { role: string }
  nav: { id: NavId; href: string; label: string }[]
  aboutParagraphs: Messages["about"]["paragraphs"]
  skillGroups: SkillGroup[]
  productProjects: WebProject[]
  webProjects: WebProject[]
  aiProjects: AiProject[]
  education: EducationItem[]
  awards: Award[]
  experience: ExperienceItem[]
}

export function buildContent(t: Messages): LocalizedContent {
  return {
    profile: { ...profile, role: t.profile.role },
    nav: navItems.map((item) => ({ ...item, label: t.nav[item.id] })),
    aboutParagraphs: t.about.paragraphs,
    skillGroups: t.skills.groups,
    productProjects: productProjectMeta.map((project) => ({
      ...project,
      description: t.projects.products[project.slug].description,
      role: t.projects.products[project.slug].role,
    })),
    webProjects: webProjectMeta.map((project) => ({
      ...project,
      description: t.projects.web[project.slug].description,
      role: t.projects.web[project.slug].role,
    })),
    aiProjects: aiProjectMeta.map((project) => ({
      ...project,
      description: t.projects.ai[project.slug].description,
      role: t.projects.ai[project.slug].role,
      highlights: t.projects.ai[project.slug].highlights,
      diagramSteps: t.projects.ai[project.slug].diagramSteps,
    })),
    education: t.credentials.education,
    awards: t.credentials.awards,
    experience: t.experience.items,
  }
}
