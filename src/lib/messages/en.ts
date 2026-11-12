import type { Messages } from "@/lib/i18n-types"

export const en: Messages = {
  meta: {
    title: "Miguel Vaz · Full Stack Developer · AI Engineering",
    description:
      "Miguel Vaz, full stack developer: Google Cloud, PostgreSQL and TypeScript, with AI applied to systems that reach production. Cases, projects and contact.",
    ogDescription:
      "Full stack developer. I take systems to production, with AI built in where it solves a real problem.",
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
    flow: "Flow of {name}",
    mine: "my decision",
  },
  nav: {
    about: "About",
    experience: "Experience",
    cases: "Cases",
    projects: "Projects",
    notes: "Notes",
    credentials: "Education",
    contact: "Contact",
  },
  profile: {
    role: "Full Stack Developer · AI Engineering",
  },
  hero: {
    subtitle:
      "I take systems to production end to end: architecture, cloud, security and deploy, with AI built in where it solves a real problem.",
    available: "I'm open to new projects.",
    contactCta: "Get in touch",
    projectsCta: "See projects",
    cvCta: "Download CV",
    cvHref: "/cv/miguel-vaz-cv-en.pdf",
  },
  about: {
    eyebrow: "About",
    title: "The person behind the code",
    paragraphs: [
      "I'm a full stack developer at Enviagora. I run every project on Google Cloud with Terraform, led the migration of the HR Hub to it, and I'm part of the team building EnviaMind, the single platform that brings together HR, operations, the gatehouse, finance and leadership.",
      "On AI, I build flows meant for production. What the model extracts goes through validation, a confidence threshold or a person's approval before it turns into an action. I don't lock into one provider (Claude, Gemini and GPT via Vertex AI and OpenRouter), I track the cost of every call and I pick the model by evaluation.",
      "Before software, I came through industry: a technical degree in Systems Development from SENAI, mechanical drafting, electromechanical maintenance, and roles at Panasonic, Hutchinson and in R&D at Soft Film. Outside work, I'm building Morada, and I'm part of the Ponto e Vírgula team, which is writing the spec for Studoo.",
    ],
    stackLabel: "Stack",
    stack:
      "TypeScript, Node.js, React, Next.js, Fastify, PostgreSQL, Prisma, Zod, Python, Google Cloud, Terraform, Docker, GitHub Actions, Vertex AI and AI SDK.",
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've put my hands",
    items: [
      {
        period: "current",
        role: "Full Stack Developer",
        org: "Enviagora",
        desc: "I build the company's internal systems and take them to production, from infrastructure to AI flows.",
        highlights: [
          "Platform on Google Cloud in Terraform: Cloud Run, private-IP Cloud SQL, Secret Manager, Load Balancer and Cloud DNS. CI/CD on GitHub Actions with Workload Identity Federation, secret scanning and approval-gated production deploys. A monorepo with about 20 systems imported with full history.",
          "Data in PostgreSQL in layers (raw, trusted and refined) per department, a universal person key, RLS, server-side RBAC and an outbox for the ClickUp and ZapSign integrations.",
          "HR Hub migration: a full rehearsal in QA, row count and checksum validation and a cutover of about 45 minutes, with rollback ready.",
          "Meeting recorder: a local-first PWA that uploads audio in chunks, with receipt acknowledgements, and loses nothing. Streaming transcription (Gemini Live) and a final pass with diarization; a second model reviews it against a knowledge base; an agent extracts commitments every 45 s, anchored to the source excerpt, which only become ClickUp tasks once approved.",
          "Digital onboarding: OCR with the PDF text and fallback to vision models via OpenRouter, extraction per document type, deterministic normalization and identity cross-checks, with blind evaluation across models.",
          "Gatehouse: license plate reading with vision (Claude on Vertex AI), with minimum confidence and human confirmation.",
          "5S audits: a mobile app with camera and QR codes, server-side scoring and anti-fraud.",
        ],
      },
      {
        role: "R&D Assistant",
        org: "Soft Film",
        desc: "Research and development in an industrial setting.",
      },
      {
        role: "Apprentice",
        org: "Hutchinson and Panasonic",
        desc: "My first steps in industry, in administrative routines.",
      },
    ],
  },
  cases: {
    eyebrow: "Cases",
    title: "Systems I designed and built",
    subtitle: "Each case tells the problem, the constraint, the decision and where it stands today. No client data.",
    arcLabels: {
      problema: "The problem",
      restricao: "The constraint",
      decisao: "The decision",
      erro: "What went wrong",
      fora: "What was left out",
      resultado: "Where it stands",
    },
    items: [
      {
        slug: "vell",
        title: "Vell, my website studio",
        intro:
          "Every website preview goes through the same flow, with a team of AI agents and four points where I decide. Nothing ships 100% automatically.",
        flowLabel: "the flow of a preview",
        flow: [
          { label: "Research and dossier" },
          { label: "Target and direction", mine: true },
          { label: "Build" },
          { label: "Draft", mine: true },
          { label: "Automated QA" },
          { label: "Independent review" },
          { label: "Final version", mine: true },
          { label: "Publishing" },
          { label: "Sending", mine: true },
        ],
        arc: [
          ["problema", "Make a custom website preview for each business, fast enough to go with the first contact and without looking like a template."],
          ["restricao", "Nothing goes out without me: no preview goes live or reaches anyone without my approval. And nothing is made up: prices, ratings, testimonials, phone numbers and hours only with a source."],
          ["decisao", "Agents with separate roles, because whoever builds doesn't review. The reviewer scores each criterion and only approves with all of them at 8.5 or above; QA rejects on its own anything that fails 16 px text, 44 px targets, AA contrast and LCP under 2.5 s."],
          ["erro", "The first original version of a preview came out looking like generic AI: editorial serif, off-white background, predictable cards. I rejected it. It became a rule: the original version starts from real references and the client's identity, with the direction approved before any code."],
          ["resultado", "In use. The rules live in a single file every agent reads before starting, and each rejection of mine becomes a new line. Previews go live with noindex, only for people who have the link."],
        ],
        link: { href: "https://velldigital.vercel.app", label: "Vell website" },
      },
      {
        slug: "morada",
        title: "Morada, an app for immigrants",
        intro:
          "Money, documents and deadlines for people living in a new country. My own product: app, API, database and deploy, in Portuguese, Spanish and English.",
        flowLabel: "the app's layers",
        flow: [
          { label: "App · Expo" },
          { label: "Cache · TanStack Query" },
          { label: "Contract · Zod" },
          { label: "API · Next.js" },
          { label: "Database · PostgreSQL" },
        ],
        arc: [
          ["problema", "People who just arrived in a new country use their phone on the street, often one-handed and on limited mobile data. They need to know how much they earned and spent, who still owes them and which document deadline is coming up."],
          ["restricao", "Privacy and bad networks. The app never talks to the database or an external provider and carries no secrets; on a bad network it shows the last reading. And three languages from day one."],
          ["decisao", "Balance, totals and status are computed only on the server, so the home screen, finances, report and PDF always match. The balance shows only what is real: money to receive or to pay never goes into it. The same Zod schema validates the form in the app and again in the API."],
          ["fora", "A web version in v1, because only the native app can remind you with the app closed. Email-code-only login became a password, so people can sign in every day without opening their email. And on the day I signed up, the EU server was sold out: I chose Canada, with a backup copy in the EU, and accepted about 100 ms more per call."],
          ["resultado", "First TestFlight build on 10/26/2026 and an open public beta. 345 tests on the API and a security audit with no critical, high or medium findings. It hasn't been validated in real use yet: that's the next step."],
        ],
        link: { href: "https://getmorada.app", label: "getmorada.app" },
      },
      {
        slug: "quebra-gelo",
        title: "Quebra-Gelo, 1st place at an OpenAI hackathon",
        intro:
          "OpenAI DevDay Exchange Community Hackathon, in São Paulo, run by the OpenAI Codex Ambassadors. Built in a pair with Julio Akamine.",
        arc: [
          ["problema", "The idea: a virtual pet that only grows when you actually talk to someone at the event."],
          ["restricao", "One day, in a pair."],
          ["decisao", "Real-time multiplayer over WebSocket, the pet created by multimodal AI with structured output, and a live big screen so the organizers could follow the event. My role: development in a pair, from product to deploy."],
          ["resultado", "1st place out of 25 teams. OpenAI prize: US$ 1,000 in Codex credits for the team and 12 months of ChatGPT Pro for each member."],
        ],
        link: { href: "https://quebra-gelo.julioakamine.com", label: "open Quebra-Gelo" },
      },
    ],
  },
  process: {
    eyebrow: "How I work",
    title: "From requirement to production, no shortcuts",
    items: [
      {
        title: "Spec before code",
        desc: "Every delivery starts with a spec, and decisions are recorded in ADRs. When someone asks why something is the way it is, the answer is written down.",
      },
      {
        title: "Agents in development, review on every PR",
        desc: "I build with Claude Code and Cursor. No change goes live without automated tests (Vitest, Playwright) and review on the PR.",
      },
      {
        title: "Models picked by evaluation",
        desc: "I compare models blind on the same material and track the cost of every call. In the meeting recorder, switching models by benchmark took the word error rate from 13.4% to 7.6%.",
      },
      {
        title: "Production with a safety net",
        desc: "Production deploys only with approval, secrets out of the code and scanning in CI. In the HR Hub migration, a full rehearsal in QA and rollback ready before the cutover.",
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "What I've been building",
    productsHeading: "Products",
    aiHeading: "AI & automation",
    openSite: "open site",
    viewRepo: "view repository",
    tryDemo: "try it below",
    noLink: "no public link",
    products: {
      studoo: {
        status: "in specification",
        description:
          "Learn any subject fast, with AI, the way Duolingo teaches a language. You say what you want to learn and the AI proposes a plan; nothing generated goes into the plan without a tap to accept it. There's no app yet: there's the spec and the brand.",
        role: "Built with the Ponto e Vírgula team, which I'm part of.",
      },
      vellfinancing: {
        status: "open source",
        description:
          "Personal finance tracker: transactions, budget, goals, investments and OFX/CSV bank statement import.",
        role: "Built end to end, from scratch.",
      },
    },
    ai: {
      "validador-registros-tabulares": {
        description:
          "An API that ingests order spreadsheets and validates each record against business rules, pointing to the inconsistent field. An agent rereads only the rejected orders and returns structured JSON fields to recover what can be deduced.",
        role: "Back end, AI agent and MCP server.",
        highlights: [
          "5 of 10 rejected orders recovered by the agent, in the sample batch",
          "processing in under 1 s",
          "13 end-to-end checks, including MCP over JSON-RPC",
        ],
        diagramSteps: [
          "Order spreadsheet",
          "API (FastAPI)",
          "Business rules",
          "Agent rereads rejected",
          "Recovered records",
        ],
      },
      "pipeline-tendencia-conteudo": {
        description:
          "A pipeline that ingests data from external APIs, filters it, classifies it with an LLM agent and runs the full flow with no human intervention, deployed in a container.",
        role: "Pipeline, agent integration and deploy.",
        highlights: ["runs on its own, no human intervention", "deployed in a container on Fly.io"],
        diagramSteps: ["External signal (API)", "Ingestion", "Agent classifies", "Flow runs", "Publishing"],
      },
    },
  },
  demo: {
    eyebrow: "Runs on this page",
    title: "Order validator with an AI agent",
    intro:
      "Edit the sample spreadsheet (fictional data), validate it against business rules and ask the AI to recover what it can. The rules run in your browser; only rejected orders go to the model.",
    editLabel: "Spreadsheet (CSV)",
    validate: "Validate",
    recover: "Recover with AI",
    recovering: "Recovering…",
    reset: "Reset sample",
    valid: "valid",
    rejected: "rejected",
    recovered: "recovered by AI",
    order: "Order",
    reasonsCol: "Reasons",
    corrections: "Corrections applied",
    noCorrections: "The AI found no safe correction for the remaining orders.",
    aiNote:
      "The AI only fixes what can be deduced from the order's other fields. Client, SKU, ID and deadline are never made up.",
    unavailable: "The AI is unavailable right now. Validation still works.",
    rateLimited: "Usage limit reached. Try again in a few minutes.",
    error: "Couldn't reach the AI right now.",
    reasons: {
      id_empty: "empty ID",
      id_dup: "duplicate ID: {value}",
      client_empty: "empty client",
      email: "invalid email",
      qty: "invalid quantity",
      unit: "invalid unit price",
      total: "total doesn't match",
      deadline: "deadline past or invalid",
      product_empty: "empty product",
      sku_empty: "empty SKU",
    },
  },
  notes: {
    eyebrow: "Notes",
    title: "What I write about the work",
    read: "read the article",
    items: [
      {
        title: "How I migrated the HR Hub database to Google Cloud",
        summary:
          "A full rehearsal in QA, row count and checksum validation and a cutover of about 45 minutes, with rollback ready.",
        href: "/artigos/migracao-cloud-run/",
      },
    ],
  },
  credentials: {
    eyebrow: "Education",
    title: "Education & awards",
    educationHeading: "Education",
    awardsHeading: "Awards",
    education: [
      { title: "Technical degree in Systems Development", org: "SENAI" },
      { title: "Mechanical drafting and electromechanical maintenance", org: "industrial background" },
    ],
    awards: [
      {
        year: "2026",
        title: "1st place at the OpenAI DevDay Exchange Community Hackathon (São Paulo)",
        desc: "Out of 25 teams, with Quebra-Gelo, built in a pair in one day.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Got a system that needs to reach production?",
    body: "Or an AI flow that needs control before it turns into an action? Write to me by email or on LinkedIn.",
  },
  footer: {
    source: "source code",
  },
}
