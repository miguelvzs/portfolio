import type { Messages, NavId } from "@/lib/i18n-types"

export const profile = {
  name: "Miguel Vaz",
  location: "Extrema/MG",
  email: "miguelsouza7970@gmail.com",
  github: "https://github.com/miguelvzs",
  linkedin: "https://linkedin.com/in/miguelvzs",
  url: "https://miguelvzs.dev",
}

export const navItems: { id: NavId; href: string }[] = [
  { id: "about", href: "#about" },
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
  slug: "cortex" | "mv-financing" | "modus" | "elos"
  name: string
  description: string
  role: string
  stack: string[]
  demoUrl: string
  displayUrl: string
}

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

const webProjectMeta: Omit<WebProject, "description" | "role">[] = [
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
    slug: "mv-financing",
    name: "MV Financing",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "JWT", "Redis"],
    demoUrl: "https://mvfinancing.vercel.app/?demo",
    displayUrl: "mvfinancing.vercel.app",
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
