export const profile = {
  name: "Miguel Vaz",
  role: "Desenvolvedor Fullstack Júnior · Foco em Inteligência Artificial",
  location: "Extrema/MG",
  email: "miguelsouza7970@gmail.com",
  github: "https://github.com/miguelvzs",
  linkedin: "https://linkedin.com/in/miguelvzs",
  url: "https://miguelvzs.dev",
}

export const nav = [
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Formação", href: "#credentials" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
]

export const aboutParagraphs = [
  "Sou o Miguel: desenvolvo aplicações fullstack, do front-end em React ao back-end em Python e Node.js, e uso isso como base pra construir e testar agentes de IA de verdade.",
  "No dia a dia integro LLMs a sistemas reais pela API da Anthropic (Claude), escrevo e itero prompt medindo resultado, e já implementei um servidor MCP pra expor ferramentas a um agente. Cubro o que escrevo com teste automatizado e publico em nuvem com contêiner.",
  "Sou Técnico em Desenvolvimento de Sistemas pelo SENAI e curso Análise e Desenvolvimento de Sistemas no IFSP. Fora do código, gosto de entender como um produto foi construído por trás.",
]

export type ExperienceItem = {
  period: string
  role: string
  org: string
  desc: string
}

export const experience: ExperienceItem[] = [
  {
    period: "jan/2026 — atual",
    role: "Assistente de P&D",
    org: "Soft Film",
    desc: "Revisa e atualiza componentes de receitas, solicita análises ao Controle de Qualidade, faz apontamento e reclassificação de ordens de produção. Rotina manual em Excel que motivou automatizar validações em Python.",
  },
  {
    period: "ago/2024 — dez/2025",
    role: "Aprendiz",
    org: "Hutchinson",
    desc: "Rotinas administrativas em ambiente industrial, adaptação rápida a processos e equipes.",
  },
  {
    period: "ago/2023 — jul/2024",
    role: "Aprendiz",
    org: "Panasonic do Brasil",
    desc: "Rotinas administrativas em ambiente corporativo, primeiro contato com processos de empresa grande.",
  },
]

export type EducationItem = {
  period: string
  title: string
  org: string
  note?: string
}

export const education: EducationItem[] = [
  {
    period: "fev/2026 — dez/2028",
    title: "Análise e Desenvolvimento de Sistemas",
    org: "IFSP",
    note: "2º semestre em ago/2026",
  },
  {
    period: "mar/2024 — ago/2025",
    title: "Técnico em Desenvolvimento de Sistemas",
    org: "SENAI CFP Janez Hlebanja",
  },
]

export type Award = {
  year: string
  title: string
  desc: string
}

export const awards: Award[] = [
  {
    year: "2026 — atual",
    title: "Embaixador SAGA SENAI — Projetos de Inovação",
    desc: "Único aluno selecionado por desempenho para representar a instituição, apresentar projetos e mentorar outros alunos.",
  },
  {
    year: "2021 · 2022",
    title: "Olimpíada Brasileira de Astronomia e Astronáutica",
    desc: "Medalha de Ouro (2021) e Prata (2022).",
  },
]

export type SkillGroup = {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Front-end",
    skills: ["JavaScript", "React", "HTML", "CSS", "Leaflet.js", "APIs REST"],
  },
  {
    label: "Back-end & dados",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Pandas",
      "NumPy",
      "Node.js",
      "C",
      "C#",
      "JSON",
      "Webhooks",
      "JWT",
      "SQL (MySQL, PostgreSQL)",
      "Redis",
    ],
  },
  {
    label: "Inteligência artificial",
    skills: [
      "Agentes de IA",
      "API Anthropic (Claude)",
      "GitHub Copilot",
      "Engenharia de prompt",
      "Servidores MCP",
      "n8n",
    ],
  },
  {
    label: "Qualidade & entrega",
    skills: [
      "Testes automatizados",
      "TestClient (FastAPI)",
      "Jest",
      "Git/GitHub",
      "Docker",
      "Render",
      "Fly.io",
    ],
  },
]

export type WebProject = {
  kind: "web"
  slug: string
  name: string
  description: string
  role: string
  stack: string[]
  demoUrl: string
  displayUrl: string
}

export type AiProject = {
  kind: "ai"
  slug: string
  name: string
  description: string
  role: string
  stack: string[]
  repoUrl: string
  highlights: string[]
  diagramSteps: string[]
}

export type Project = WebProject | AiProject

export const webProjects: WebProject[] = [
  {
    kind: "web",
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
    kind: "web",
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
    kind: "web",
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
    kind: "web",
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

export const aiProjects: AiProject[] = [
  {
    kind: "ai",
    slug: "validador-registros-tabulares",
    name: "Validador de Pedidos",
    description:
      "API REST que ingere planilhas de pedidos e valida cada registro por regra de negócio, apontando o campo inconsistente. Um agente de LLM relê os pedidos rejeitados e devolve campos estruturados em JSON pra recuperar o que dá.",
    role: "Desenvolvimento do back-end, do agente de IA e do servidor MCP.",
    stack: ["Python", "FastAPI", "Pandas", "Claude (Anthropic)", "MCP", "n8n"],
    repoUrl: "https://github.com/miguelvzs/validador-registros-tabulares",
    highlights: [
      "5 de 10 pedidos rejeitados recuperados pelo agente",
      "processamento em menos de 1s",
      "13 testes automatizados (e2e, endpoints incl. HTTP 422, MCP via JSON-RPC)",
    ],
    diagramSteps: [
      "Planilha de pedidos",
      "API REST (FastAPI)",
      "Validação por regra de negócio",
      "Agente LLM (Claude) relê rejeitados",
      "Registros recuperados em JSON",
    ],
  },
  {
    kind: "ai",
    slug: "pipeline-tendencia-conteudo",
    name: "Radar de Tendência",
    description:
      "Pipeline autônomo que ingere dados de APIs externas, filtra e classifica com um agente de LLM, e executa o fluxo completo sem intervenção humana, publicado em contêiner.",
    role: "Desenvolvimento do pipeline, integração com o agente de LLM e deploy.",
    stack: ["Python", "NumPy", "APIs HTTP", "Claude (Anthropic)", "Docker", "Fly.io"],
    repoUrl: "https://github.com/miguelvzs/pipeline-tendencia-conteudo",
    highlights: ["execução autônoma, sem intervenção humana", "publicado em contêiner na Fly.io"],
    diagramSteps: [
      "Sinal externo (API HTTP)",
      "Ingestão de dados",
      "Agente LLM classifica",
      "Fluxo executado sem intervenção",
      "Publicação",
    ],
  },
]
