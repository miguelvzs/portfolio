import type { Messages } from "@/lib/i18n-types"

export const en: Messages = {
  meta: {
    title: "Miguel Vaz · Full Stack Developer · AI Engineering",
    description:
      "Miguel Vaz, full stack developer: TypeScript, Node.js, React, Next.js, PostgreSQL and Google Cloud, with AI applied to real systems. See experience and projects.",
    ogDescription:
      "Full stack developer applying AI to real systems. See experience and projects.",
    twitterDescription: "Full stack developer · AI Engineering.",
    siteName: "Miguel Vaz Portfolio",
    jobTitle: "Full Stack Developer",
    knowsAboutAi: "Artificial Intelligence",
  },
  aria: {
    skipToContent: "Skip to content",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    language: "Language",
    scrollToAbout: "Scroll to the about section",
    stackUsedIn: "Stack used in {name}",
  },
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    credentials: "Education",
    contact: "Contact",
  },
  profile: {
    role: "Full Stack Developer · AI Engineering",
  },
  hero: {
    subtitle:
      "I ship systems to production end to end: architecture, cloud, security and deployment, with AI built in where it solves a real problem.",
    available: "open to good conversations",
    contactCta: "Get in touch",
    projectsCta: "View projects",
  },
  about: {
    eyebrow: "About",
    title: "Who's behind the code",
    paragraphs: [
      "I'm Miguel, a full stack developer. I build systems end to end: I work with business teams, design the architecture, write front end and back end in TypeScript, and own cloud, security and deployment.",
      "AI is part of how I work and what I ship. I integrate LLMs into real systems without locking into a single provider (Claude, DeepSeek and other models via OpenRouter), build agents and pipelines that classify, extract and validate data, and have built MCP servers to expose tools to agents. Day to day I use AI agents in development, always backed by automated tests and review.",
      "I hold a Systems Development technical degree from SENAI and I'm studying Systems Analysis and Development at IFSP. Before coding full time, I worked in R&D and administrative roles in manufacturing, and that operations background shapes the systems I build today.",
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Technologies I use every day",
    groups: [
      {
        label: "Front end",
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
        label: "Back end & data",
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
          "REST APIs",
        ],
      },
      {
        label: "Artificial intelligence",
        skills: [
          "AI agents",
          "LLMs (Claude, DeepSeek)",
          "OpenRouter",
          "Structured outputs (JSON)",
          "Claude Code",
          "Cursor",
          "MCP servers",
          "Prompt engineering",
          "AI-powered OCR",
          "n8n",
        ],
      },
      {
        label: "Cloud, quality & delivery",
        skills: [
          "Google Cloud (Cloud Run, Cloud SQL)",
          "GitHub Actions",
          "Docker",
          "Vitest",
          "Jest",
          "Playwright",
          "WCAG AA accessibility",
          "Git/GitHub",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "What I've been building",
    webHeading: "Web",
    aiHeading: "AI & automation",
    openSite: "open site",
    viewRepo: "view repository",
    web: {
      cortex: {
        description:
          "Admin dashboard for a catering business to run day-to-day operations: orders, events, and operational control in one place.",
        role: "Front-end development and operational flow integration.",
      },
      modus: {
        description:
          "Maintenance management system: work orders, assets, and operations teams brought together in one place.",
        role: "Front-end development and maintenance workflow modeling.",
      },
      elos: {
        description:
          "Management system with user, address, and establishment records, an interactive Leaflet map, and postal-code lookup via the ViaCEP API. Data stored in LocalStorage.",
        role: "Complete front-end development, from scratch.",
      },
    },
    ai: {
      "validador-registros-tabulares": {
        description:
          "REST API that ingests order spreadsheets and validates each record against business rules, flagging the inconsistent field. An LLM agent rereads rejected orders and returns structured JSON fields to recover what it can.",
        role: "Back-end, AI agent, and MCP server development.",
        highlights: [
          "5 of 10 rejected orders recovered by the agent",
          "processing in under 1s",
          "13 automated tests (e2e, endpoints incl. HTTP 422, MCP via JSON-RPC)",
        ],
        diagramSteps: [
          "Order spreadsheet",
          "REST API (FastAPI)",
          "Business-rule validation",
          "LLM agent (Claude) rereads rejects",
          "Recovered records in JSON",
        ],
      },
      "pipeline-tendencia-conteudo": {
        description:
          "Autonomous pipeline that ingests data from external APIs, filters and classifies it with an LLM agent, and runs the full flow with no human intervention, shipped in a container.",
        role: "Pipeline development, LLM agent integration, and deploy.",
        highlights: [
          "autonomous execution, no human intervention",
          "published in a container on Fly.io",
        ],
        diagramSteps: [
          "External signal (HTTP API)",
          "Data ingestion",
          "LLM agent classifies",
          "Flow runs unattended",
          "Publication",
        ],
      },
    },
  },
  credentials: {
    eyebrow: "Education",
    title: "Education & awards",
    educationHeading: "Education",
    awardsHeading: "Awards",
    education: [
      {
        period: "Feb 2026 — Dec 2028",
        title: "Systems Analysis and Development",
        org: "IFSP",
        note: "in progress",
      },
      {
        period: "Mar 2024 — Aug 2025",
        title: "Systems Development Technician",
        org: "SENAI CFP Janez Hlebanja",
      },
    ],
    awards: [
      {
        year: "2026 — present",
        title: "SAGA SENAI Ambassador — Innovation Projects",
        desc: "Only student selected on performance to represent the institution, present projects, and mentor other students.",
      },
      {
        year: "2021 · 2022",
        title: "Brazilian Astronomy and Astronautics Olympiad",
        desc: "Gold medal (2021) and Silver (2022).",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've put in the work",
    items: [
      {
        period: "Sep 2026 — present",
        role: "Full Stack Developer",
        org: "Enviagora",
        desc: "I design, build and ship internal systems end to end: from gathering requirements with business teams to architecture, cloud, security and deployment.",
        highlights: [
          "Led the migration of the HR platform (Enviagora Hub) to Google Cloud: Cloud Run, Cloud SQL, Cloud Storage and Secret Manager, with automated staging, gated deploys via GitHub Actions, health checks and rollback.",
          "Shipped the Digital Onboarding module to production: candidate documents, PDF/ZIP dossier, transactional email and AI-powered OCR, with idempotency and PII-free logging.",
          "Architected EnviaMind, a monorepo that unifies the company's BI dashboards with sector- and role-based access, audit trail, TV mode and OAuth with encrypted tokens.",
          "Built dashboards integrated with ClickUp and Google, with PostgreSQL snapshots and fault tolerance, plus a KPI panel (MRR, SLA, funnel).",
          "Developed a 5S audit system for distribution centers: mobile app with camera and QR codes, WMS-integrated login and server-side scoring.",
          "Built a 3D office planner with three.js and a rules engine for circulation and fire escape routes.",
          "Cut mobile layout shift from 0.585 to 0.014 and maintain 550+ automated tests across projects, with spec-driven development.",
        ],
      },
      {
        period: "Jan 2026 — Aug 2026",
        role: "R&D Assistant",
        org: "Soft Film",
        desc: "R&D in a manufacturing environment: hands-on work with production orders, quality control and process data, the same operations I now build systems for.",
        highlights: [
          "Reviewed and updated components of production recipes.",
          "Handled production order reporting and reclassification, and bridged with Quality Control on analysis requests.",
          "Manual Excel routines led me to automate validations with Python, my first step in bringing software to operations.",
        ],
      },
      {
        period: "Aug 2024 — Dec 2025",
        role: "Apprentice",
        org: "Hutchinson",
        desc: "Administrative routines in an industrial environment, with fast adaptation to processes and teams.",
      },
      {
        period: "Aug 2023 — Jul 2024",
        role: "Apprentice",
        org: "Panasonic do Brasil",
        desc: "Administrative routines in a corporate environment, first contact with large-company processes.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Shall we talk?",
    body: "Open to good conversations about tech, projects and opportunities. Have something in mind? Send a message and I'll reply.",
  },
  footer: {
    by: "by",
  },
}
