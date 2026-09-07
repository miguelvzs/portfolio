import type { Messages } from "@/lib/i18n-types"

export const en: Messages = {
  meta: {
    title: "Miguel Vaz · Junior Fullstack Developer · Focus on AI",
    description:
      "Miguel Vaz, junior fullstack developer focused on artificial intelligence: React, Python, Node.js, and AI agents integrated via the Anthropic API. See my project portfolio.",
    ogDescription:
      "Junior fullstack developer focused on artificial intelligence. See my projects and get in touch.",
    twitterDescription: "Junior fullstack developer focused on artificial intelligence.",
    siteName: "Miguel Vaz Portfolio",
    jobTitle: "Junior Fullstack Developer · Focus on Artificial Intelligence",
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
    skills: "Skills",
    projects: "Projects",
    credentials: "Education",
    contact: "Contact",
  },
  profile: {
    role: "Junior Fullstack Developer · Focus on Artificial Intelligence",
  },
  hero: {
    subtitle:
      "Fullstack developer focused on artificial intelligence. I build the front-end in React, the back-end in Python and Node.js, and use that foundation to integrate AI agents into real systems.",
    available: "available for new projects",
    contactCta: "Get in touch",
    projectsCta: "View projects",
  },
  about: {
    eyebrow: "About",
    title: "Who's behind the code",
    paragraphs: [
      "I'm Miguel: I build fullstack applications, from React on the front-end to Python and Node.js on the back-end, and I use that as the base to build and test real AI agents.",
      "Day to day I integrate LLMs into real systems through the Anthropic API (Claude), write and iterate on prompts while measuring results, and I've already shipped an MCP server to expose tools to an agent. I cover what I write with automated tests and deploy to the cloud in containers.",
      "I'm a Systems Development Technician from SENAI and I'm studying Systems Analysis and Development at IFSP. Away from the keyboard, I like understanding how a product was built under the hood.",
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Technologies I use every day",
    groups: [
      {
        label: "Front-end",
        skills: ["JavaScript", "React", "HTML", "CSS", "Leaflet.js", "REST APIs"],
      },
      {
        label: "Back-end & data",
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
        label: "Artificial intelligence",
        skills: [
          "AI agents",
          "Anthropic API (Claude)",
          "GitHub Copilot",
          "Prompt engineering",
          "MCP servers",
          "n8n",
        ],
      },
      {
        label: "Quality & delivery",
        skills: [
          "Automated testing",
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
      "mv-financing": {
        description:
          "Personal finance app: JWT login, multi-device cloud sync, category budgets, goals, investments, and Excel/PDF reports.",
        role: "Full-stack development: API, authentication, and front-end.",
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
        note: "2nd semester as of Aug 2026",
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
        period: "Jan 2026 — present",
        role: "R&D Assistant",
        org: "Soft Film",
        desc: "Reviews and updates recipe components, requests Quality Control analyses, and logs and reclassifies production orders. A manual Excel routine that motivated automating validations in Python.",
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
    body: "I'm open to opportunities, freelance projects, and good conversations about technology. Have something in mind? Send a message and I'll get back to you.",
  },
  footer: {
    by: "by",
  },
}
