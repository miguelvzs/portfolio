export const profile = {
  name: "Miguel Vaz",
  role: "Desenvolvedor C# · .NET · TypeScript",
  location: "Brasil",
  email: "miguelsouza7970@gmail.com",
  github: "https://github.com/miguelvzs",
  linkedin: "https://linkedin.com/in/miguelvzs",
  url: "https://miguelvzs.dev",
}

export const nav = [
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
]

export const aboutParagraphs = [
  "Sou o Miguel: desenvolvedor focado em construir coisas web que funcionam de verdade, não só que parecem funcionar em vídeo de demonstração.",
  "No dia a dia trabalho com C#, .NET e TypeScript, do back-end à interface. Gosto de detalhe — daquela UI que a pessoa usa sem perceber o trabalho que teve por trás.",
  "Fora do editor, estou mexendo em algum freela, lendo sobre arquitetura de software ou testando produto novo pra ver como foi construído.",
]

export const timeline = [
  {
    year: "desde 2026",
    title: "Projetos freelance & portfólio",
    desc: "Cortex, MV Financing, Modus e ELOS. Produto real, cliente real, prazo real.",
  },
  {
    year: "2025",
    title: "Primeiros projetos web",
    desc: "HTML, CSS e JavaScript puro. Descoberta de que front-end é muito mais do que aparenta.",
  },
  {
    year: "2024",
    title: "Primeira linha de código",
    desc: "Python no ensino médio. Um print(\"olá, mundo\") que mudou o plano.",
  },
]

export type SkillGroup = {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { label: "Linguagens & runtime", skills: ["C#", ".NET", "TypeScript", "JavaScript", "Python", "Node.js"] },
  { label: "Dados & infra", skills: ["PostgreSQL", "SQL Server", "Redis", "Docker", "Git"] },
  { label: "Web & integrações", skills: ["React", "Leaflet.js", "JWT", "ViaCEP"] },
]

export type Project = {
  slug: string
  name: string
  description: string
  role: string
  stack: string[]
  demoUrl: string
  displayUrl: string
}

export const projects: Project[] = [
  {
    slug: "cortex",
    name: "Cortex",
    description:
      "Painel administrativo para um buffet tocar o dia a dia: pedidos, eventos e controle da operação em um só lugar.",
    role: "Desenvolvimento front-end e integração dos fluxos operacionais.",
    stack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://cortex-demo-eight.vercel.app/",
    displayUrl: "cortex-demo-eight.vercel.app",
  },
  {
    slug: "mv-financing",
    name: "MV Financing",
    description:
      "App de finanças pessoais: login JWT, sincronização em nuvem multi-dispositivo, orçamentos por categoria, metas, investimentos e relatórios em Excel/PDF.",
    role: "Desenvolvimento full-stack: API, autenticação e front-end.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "JWT", "Redis"],
    demoUrl: "https://mvfinancing.vercel.app/?demo",
    displayUrl: "mvfinancing.vercel.app",
  },
  {
    slug: "modus",
    name: "Modus",
    description:
      "Sistema de gestão de manutenção: ordens de serviço, ativos e equipes operacionais reunidos num lugar só.",
    role: "Desenvolvimento front-end e modelagem dos fluxos de manutenção.",
    stack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://plataformamodus.vercel.app/?demo",
    displayUrl: "plataformamodus.vercel.app",
  },
  {
    slug: "elos",
    name: "ELOS",
    description:
      "Sistema de gestão com cadastro de usuários, endereços e estabelecimentos, mapa interativo via Leaflet e busca de CEP pela API ViaCEP. Dados em LocalStorage.",
    role: "Desenvolvimento front-end completo, do zero.",
    stack: ["HTML", "CSS", "JavaScript", "Leaflet.js", "ViaCEP"],
    demoUrl: "https://elosgestao.netlify.app/",
    displayUrl: "elosgestao.netlify.app",
  },
]
