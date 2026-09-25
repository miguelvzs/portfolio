import type { Messages } from "@/lib/i18n-types"

export const pt: Messages = {
  meta: {
    title: "Miguel Vaz · Desenvolvedor Full Stack · AI Engineering",
    description:
      "Miguel Vaz, desenvolvedor full stack na Enviagora: TypeScript, Node.js, React, Next.js, PostgreSQL e Google Cloud, com IA aplicada a sistemas reais. Veja experiência e projetos.",
    ogDescription:
      "Desenvolvedor full stack na Enviagora, com IA aplicada a sistemas reais. Veja experiência e projetos.",
    twitterDescription: "Desenvolvedor full stack na Enviagora · AI Engineering.",
    siteName: "Portfólio Miguel Vaz",
    jobTitle: "Desenvolvedor Full Stack",
    knowsAboutAi: "Inteligência Artificial",
  },
  aria: {
    skipToContent: "Pular para o conteúdo",
    mainNav: "Navegação principal",
    mobileNav: "Navegação móvel",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    themeLight: "Ativar tema claro",
    themeDark: "Ativar tema escuro",
    language: "Idioma",
    scrollToAbout: "Rolar para a seção sobre",
    stackUsedIn: "Stack usada em {name}",
  },
  nav: {
    about: "Sobre",
    experience: "Experiência",
    skills: "Skills",
    projects: "Projetos",
    credentials: "Formação",
    contact: "Contato",
  },
  profile: {
    role: "Desenvolvedor Full Stack @ Enviagora · AI Engineering",
  },
  hero: {
    subtitle:
      "Levo sistemas internos à produção de ponta a ponta: arquitetura, nuvem, segurança e deploy, com IA integrada onde ela resolve problema de verdade.",
    available: "aberto a boas conversas",
    contactCta: "Entrar em contato",
    projectsCta: "Ver projetos",
  },
  about: {
    eyebrow: "Sobre",
    title: "Quem está por trás do código",
    paragraphs: [
      "Sou o Miguel, desenvolvedor full stack na Enviagora. Construo sistemas internos de ponta a ponta: converso com a área de negócio, desenho a arquitetura, escrevo front e back em TypeScript e cuido da nuvem, da segurança e do deploy.",
      "IA faz parte de como eu trabalho e do que entrego: integro LLMs a sistemas reais pela API da Anthropic (Claude), já implementei um servidor MCP e uso agentes de IA no desenvolvimento, sempre com teste automatizado e revisão.",
      "Sou Técnico em Desenvolvimento de Sistemas pelo SENAI e curso Análise e Desenvolvimento de Sistemas no IFSP. Fora do código, gosto de entender como um produto foi construído por trás.",
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Tecnologias que uso no dia a dia",
    groups: [
      {
        label: "Front-end",
        skills: [
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "TanStack Query",
          "three.js",
          "HTML/CSS",
        ],
      },
      {
        label: "Back-end & dados",
        skills: [
          "Node.js",
          "Fastify",
          "Prisma",
          "Zod",
          "PostgreSQL",
          "Python",
          "FastAPI",
          "Pandas",
          "Redis",
          "APIs REST",
        ],
      },
      {
        label: "Inteligência artificial",
        skills: [
          "Agentes de IA",
          "API Anthropic (Claude)",
          "Claude Code",
          "Cursor",
          "Servidores MCP",
          "Engenharia de prompt",
          "OCR com IA",
          "n8n",
        ],
      },
      {
        label: "Nuvem, qualidade & entrega",
        skills: [
          "Google Cloud (Cloud Run, Cloud SQL)",
          "GitHub Actions",
          "Docker",
          "Vitest",
          "Jest",
          "Playwright",
          "Acessibilidade WCAG AA",
          "Git/GitHub",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Projetos",
    title: "O que tenho construído",
    webHeading: "Web",
    aiHeading: "IA & automação",
    openSite: "abrir site",
    viewRepo: "ver repositório",
    web: {
      cortex: {
        description:
          "Painel administrativo para um buffet tocar o dia a dia: pedidos, eventos e controle da operação em um só lugar.",
        role: "Desenvolvimento front-end e integração dos fluxos operacionais.",
      },
      modus: {
        description:
          "Sistema de gestão de manutenção: ordens de serviço, ativos e equipes operacionais reunidos num lugar só.",
        role: "Desenvolvimento front-end e modelagem dos fluxos de manutenção.",
      },
      elos: {
        description:
          "Sistema de gestão com cadastro de usuários, endereços e estabelecimentos, mapa interativo via Leaflet e busca de CEP pela API ViaCEP. Dados em LocalStorage.",
        role: "Desenvolvimento front-end completo, do zero.",
      },
    },
    ai: {
      "validador-registros-tabulares": {
        description:
          "API REST que ingere planilhas de pedidos e valida cada registro por regra de negócio, apontando o campo inconsistente. Um agente de LLM relê os pedidos rejeitados e devolve campos estruturados em JSON pra recuperar o que dá.",
        role: "Desenvolvimento do back-end, do agente de IA e do servidor MCP.",
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
      "pipeline-tendencia-conteudo": {
        description:
          "Pipeline autônomo que ingere dados de APIs externas, filtra e classifica com um agente de LLM, e executa o fluxo completo sem intervenção humana, publicado em contêiner.",
        role: "Desenvolvimento do pipeline, integração com o agente de LLM e deploy.",
        highlights: [
          "execução autônoma, sem intervenção humana",
          "publicado em contêiner na Fly.io",
        ],
        diagramSteps: [
          "Sinal externo (API HTTP)",
          "Ingestão de dados",
          "Agente LLM classifica",
          "Fluxo executado sem intervenção",
          "Publicação",
        ],
      },
    },
  },
  credentials: {
    eyebrow: "Formação",
    title: "Formação & prêmios",
    educationHeading: "Formação",
    awardsHeading: "Prêmios",
    education: [
      {
        period: "fev/2026 — dez/2028",
        title: "Análise e Desenvolvimento de Sistemas",
        org: "IFSP",
        note: "cursando",
      },
      {
        period: "mar/2024 — ago/2025",
        title: "Técnico em Desenvolvimento de Sistemas",
        org: "SENAI CFP Janez Hlebanja",
      },
    ],
    awards: [
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
    ],
  },
  experience: {
    eyebrow: "Experiência",
    title: "Onde já botei a mão",
    items: [
      {
        period: "set/2026 — atual",
        role: "Desenvolvedor Full Stack",
        org: "Enviagora",
        desc: "Projeto, construo e levo à produção sistemas internos de ponta a ponta: do levantamento com a área de negócio à arquitetura, nuvem, segurança e deploy.",
        highlights: [
          "Conduzi a migração da plataforma de RH (Enviagora Hub) para o Google Cloud: Cloud Run, Cloud SQL, Cloud Storage e Secret Manager, com staging automático, deploy protegido via GitHub Actions, health checks e rollback.",
          "Levei à produção o módulo de Admissão Digital: documentos do candidato, dossiê em PDF/ZIP, e-mail transacional e OCR com IA, com idempotência e logs sem dados pessoais.",
          "Arquitetei o EnviaMind, monorepo que unifica os BIs da empresa com acesso por setor e papel, trilha de auditoria, modo TV e OAuth com tokens cifrados.",
          "Criei dashboards integrados ao ClickUp e ao Google, com snapshot em PostgreSQL e tolerância a falhas, e um painel de indicadores (MRR, SLA, funil).",
          "Desenvolvi um sistema de auditoria 5S para centros de distribuição: app mobile com câmera e QR Code, login integrado ao WMS e nota calculada no servidor.",
          "Construí um planejador 3D de escritório com three.js e um motor de regras de circulação e rota de fuga.",
          "Reduzi o layout shift mobile de 0,585 para 0,014 e mantenho mais de 550 testes automatizados entre os projetos, com desenvolvimento orientado por especificação.",
        ],
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
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Bora conversar?",
    body: "Aberto a boas conversas sobre tecnologia, projetos e oportunidades. Tem algo em mente? Manda mensagem que eu respondo.",
  },
  footer: {
    by: "por",
  },
}
