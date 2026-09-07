import type { Messages } from "@/lib/i18n-types"

export const pt: Messages = {
  meta: {
    title: "Miguel Vaz · Desenvolvedor Fullstack & AI Engineer",
    description:
      "Miguel Vaz, desenvolvedor fullstack e AI engineer: React, Python, Node.js e agentes de IA integrados via API da Anthropic. Confira meu portfólio de projetos.",
    ogDescription:
      "Desenvolvedor fullstack e AI engineer. Veja meus projetos e entre em contato.",
    twitterDescription: "Desenvolvedor fullstack e AI engineer.",
    siteName: "Portfólio Miguel Vaz",
    jobTitle: "Desenvolvedor Fullstack & AI Engineer",
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
    skills: "Skills",
    projects: "Projetos",
    credentials: "Formação",
    contact: "Contato",
  },
  profile: {
    role: "Desenvolvedor Fullstack & AI Engineer",
  },
  hero: {
    subtitle:
      "Desenvolvedor fullstack com foco em inteligência artificial. Construo o front-end em React, o back-end em Python e Node.js, e uso essa base pra integrar agentes de IA a sistemas reais.",
    available: "disponível para novos projetos",
    contactCta: "Entrar em contato",
    projectsCta: "Ver projetos",
  },
  about: {
    eyebrow: "Sobre",
    title: "Quem está por trás do código",
    paragraphs: [
      "Sou o Miguel: desenvolvo aplicações fullstack, do front-end em React ao back-end em Python e Node.js, e uso isso como base pra construir e testar agentes de IA de verdade.",
      "No dia a dia integro LLMs a sistemas reais pela API da Anthropic (Claude), escrevo e itero prompt medindo resultado, e já implementei um servidor MCP pra expor ferramentas a um agente. Cubro o que escrevo com teste automatizado e publico em nuvem com contêiner.",
      "Sou Técnico em Desenvolvimento de Sistemas pelo SENAI e curso Análise e Desenvolvimento de Sistemas no IFSP. Fora do código, gosto de entender como um produto foi construído por trás.",
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Tecnologias que uso no dia a dia",
    groups: [
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
      "mv-financing": {
        description:
          "App de finanças pessoais: login JWT, sincronização em nuvem multi-dispositivo, orçamentos por categoria, metas, investimentos e relatórios em Excel/PDF.",
        role: "Desenvolvimento full-stack: API, autenticação e front-end.",
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
        note: "2º semestre em ago/2026",
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
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Bora conversar?",
    body: "Estou aberto a oportunidades, projetos freelance e boas conversas sobre tecnologia. Tem algo em mente? Manda mensagem que eu respondo.",
  },
  footer: {
    by: "por",
  },
}
