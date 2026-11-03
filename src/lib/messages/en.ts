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
    stackUsedIn: "Stack used in {name}",
  },
  nav: {
    about: "About",
    experience: "Experience",
    cases: "Case studies",
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
    available: "open to new projects",
    contactCta: "Get in touch",
    projectsCta: "View projects",
    cvCta: "Download CV",
    cvHref: "/cv/miguel-vaz-cv-en.pdf",
    sheet: { role: "role", base: "based in", status: "status", stack: "stack", baseValue: "Extrema, MG · Brazil", localTime: "Brasília time", lastPush: "last push" },
  },
  about: {
    eyebrow: "About",
    title: "Software built close to the operation",
    paragraphs: [
      "I'm Miguel, a full stack developer. I build systems end to end: I work with business teams, design the architecture, write front end and back end in TypeScript, and own cloud, security and deployment.",
      "AI is part of how I work and what I ship. I integrate LLMs into real systems without locking into a single provider (Claude, DeepSeek and other models via OpenRouter), build agents and pipelines that classify, extract and validate data, and have built MCP servers to expose tools to agents. Day to day I use AI agents in development, always backed by automated tests and review.",
      "I hold a Systems Development technical degree from SENAI and I'm studying Systems Analysis and Development at IFSP. Before coding full time, I worked in R&D and administrative roles in manufacturing, and that operations background shapes the systems I build today.",
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Working stack",
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
    title: "Personal and competition projects",
    webHeading: "Earlier projects (web)",
    showOlder: "Show earlier projects",
    aiHeading: "AI & automation",
    productsHeading: "Products",
    private: "private",
    openSite: "open site",
    viewRepo: "view repository",
    tryDemo: "try it live",
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
    products: {
      morada: {
        description:
          "Mobile app for immigrants: what you earned and spent, who still owes you, goals, document deadlines and a city community. In Portuguese, Spanish and English. In progress.",
        role: "My own product: app, API, database and deploy.",
      },
      "media-hub": {
        description:
          "Internal system in production for a media company: display points, content library, scheduling, production, contracts and billing, with an AI assistant.",
        role: "Full development for a client.",
      },
      "quebra-gelo": {
        description:
          "1st place out of 25 teams at the OpenAI DevDay Exchange Community Hackathon, run by the OpenAI Codex Ambassadors in São Paulo (2026): a virtual pet that only moves forward when you talk to someone for real at the event, with a live board for organizers.",
        role: "Built as a pair, from product to deploy.",
      },
      vellfinancing: {
        description:
          "Personal finance app: transactions, budgets, goals, investments and OFX/CSV bank statement import.",
        role: "Complete development, from scratch.",
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
        year: "2026",
        title: "1st place — OpenAI DevDay Exchange Community Hackathon (São Paulo)",
        desc: "Out of 25 teams, at the hackathon run by the OpenAI Codex Ambassadors, with Quebra-Gelo, built as a pair in one day. OpenAI prize: US$1,000 in Codex credits for the team and 12 months of ChatGPT Pro for each member.",
      },
      {
        year: "2026",
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
  stats: {
    label: "Numbers",
    items: [
      { value: "550+", label: "automated tests across projects" },
      { value: "0.585 → 0.014", label: "mobile layout shift after optimization" },
      { value: "5 of 10", label: "rejected orders recovered by an AI agent" },
      { value: "5,089 → 98 ms", label: "audit list load time with 300 records" },
    ],
  },
  demo: {
    eyebrow: "Live demo",
    title: "Order validator with an AI agent",
    intro: "Edit the sample spreadsheet (fictional data), validate it against the business rules and ask the AI to recover what it can. Rules run in your browser; only rejected orders are sent to the LLM.",
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
    noCorrections: "The AI found no safe fix for the remaining orders.",
    aiNote: "The AI only fixes what can be deduced from the order's other fields. Customer, SKU, ID and deadline are never made up.",
    unavailable: "The AI is unavailable right now. Validation still works.",
    rateLimited: "Usage limit reached. Try again in a few minutes.",
    error: "Couldn't reach the AI right now.",
    reasons: {
      id_empty: "empty ID",
      id_dup: "duplicate ID: {value}",
      client_empty: "empty customer",
      email: "invalid email",
      qty: "invalid quantity",
      unit: "invalid unit price",
      total: "total doesn't match",
      deadline: "deadline passed or invalid",
      product_empty: "empty product",
      sku_empty: "empty SKU",
    },
  },
  cases: {
    eyebrow: "Case studies",
    title: "Systems I designed and built",
    subtitle: "Professional work described without internal data. Diagrams show the architecture, not real screens.",
    context: "Context",
    did: "What I did",
    result: "Outcome",
    readArticle: "Read the article about the migration (PT)",
    items: [
      {
        slug: "cloud",
        title: "Migrating an HR platform to Google Cloud",
        context: "A production HR platform hosted on a VPS with Dokploy and files on MinIO, moved to managed infrastructure on Google Cloud.",
        points: [
          "Cloud Run for backend and frontend, Cloud SQL (PostgreSQL) with daily backups and 7-day point-in-time recovery, private Cloud Storage, per-environment Secret Manager and an HTTPS Load Balancer with a managed certificate.",
          "Deploys via GitHub Actions with Workload Identity Federation, no service account keys: automatic staging, and manual production that only accepts main with green CI.",
          "Migrations run on backend start; if the new revision isn't healthy, traffic stays on the previous one and the frontend isn't published. Rollback by Cloud Run revision.",
          "Worked around org security constraints (service account keys and public access blocked) with the native Cloud Storage client and image builds on the runner.",
        ],
        result: "Migration completed, with 5-minute uptime checks, multi-region alerting, budget alerts and an operations runbook.",
        stack: [
          "Google Cloud Run",
          "Cloud SQL",
          "Cloud Storage",
          "Secret Manager",
          "GitHub Actions",
          "Docker",
          "Prisma",
        ],
        diagram: [
          "GitHub Actions",
          "Workload Identity",
          "Artifact Registry",
          "Cloud Run",
          "Cloud SQL + Storage",
        ],
      },
      {
        slug: "onboarding",
        title: "Digital onboarding with AI document reading",
        context: "End-to-end hiring onboarding: from the candidate invite to sending the dossier to accounting.",
        points: [
          "Encrypted-token link valid for 7 days; the candidate uploads photos or PDFs (front and back) and HR reviews everything on one screen.",
          "AI document reading via OpenRouter, with a model chosen by measurement, a fallback queue and a circuit breaker. It only fills empty fields that pass validation (ID check digits, postal code, dates); everything else becomes a suggestion.",
          "PDF and ZIP dossier, transactional email and idempotent integrations with Google Sheets and Google Forms that handle double clicks and resends.",
          "Security: no one can grant a role above their own, the link locks after submission, invalid links get a single response and no URL carries personal data.",
        ],
        result: "Module in production, covered by hundreds of automated tests.",
        stack: [
          "TypeScript",
          "Fastify",
          "Next.js",
          "Prisma",
          "OpenRouter",
          "Resend",
          "Google APIs",
        ],
        diagram: [
          "Invite",
          "Candidate upload",
          "AI reading",
          "HR review",
          "Dossier + integrations",
        ],
      },
      {
        slug: "bi",
        title: "Unified BI hub with role-based access and TV mode",
        context: "Scattered BI dashboards brought into a single product with access control, audit logs and TV display.",
        points: [
          "Monorepo with one package and schema per dashboard; each one is migrated from existing code rather than rewritten, and only leaves \"integrating\" once it proves parity.",
          "Custom authentication (scrypt, expiring sessions, temporary passwords), sector- and role-based access enforced on the backend, and an audit trail.",
          "1920×1080 TV mode that scales crisply to 4K, paired with a one-time code and read-only access.",
          "Google integration via OAuth with PKCE and tokens encrypted with AES-256-GCM and key rotation.",
        ],
        result: "Custom design system and CI that blocks leaked secrets, sub-WCAG AA contrast, type errors and failing tests.",
        stack: [
          "Next.js",
          "Fastify",
          "Zod",
          "PostgreSQL",
          "pnpm workspaces",
          "Vitest",
        ],
        diagram: [
          "Browser",
          "Next.js (same origin)",
          "Fastify API",
          "PostgreSQL",
          "Google APIs",
        ],
      },
      {
        slug: "audit",
        title: "Mobile 5S audits with anti-fraud design",
        context: "5S audits in distribution centers, done on a phone while the auditor walks the physical route.",
        points: [
          "Photos only from the in-app camera, no gallery uploads; start and end selfies, QR code scanning and an offline queue that never loses photos.",
          "Server-side scoring: a failed critical item fails the audit, \"not applicable\" never counts as zero and admin reviews keep the original result.",
          "Anti-fraud: the auditor never receives the expected value (enforced by an automated test), blind counts and suspicion signals computed on completion.",
          "Login integrated with the WMS through an isolated adapter, with a timeout and without storing or logging the password.",
        ],
        result: "Audit list from 5,089 ms to 98 ms with 300 records, 305 automated tests and 60 of 60 screens with no horizontal scroll and AA contrast.",
        stack: [
          "Next.js",
          "TanStack Query",
          "Fastify",
          "Prisma",
          "PostgreSQL",
          "Cloud Run",
        ],
        diagram: [
          "Sector QR code",
          "Checklist on route",
          "Photo + answer",
          "Server-side score",
          "Action plan",
        ],
      },
    ],
  },
  process: {
    eyebrow: "How I work",
    title: "How a requirement reaches production",
    items: [
      {
        title: "Spec before code",
        desc: "Every delivery starts with a spec, acceptance criteria and decision records (ADRs). I created this method on one project and reused it on the next ones.",
      },
      {
        title: "AI with human review",
        desc: "I use AI agents to speed up implementation, testing and review, but every change goes through a PR, tests and a critical read before shipping.",
      },
      {
        title: "Automated quality",
        desc: "Unit and end-to-end tests (Vitest, Jest, Playwright), WCAG AA accessibility checks and secret scanning in CI.",
      },
      {
        title: "Production from day one",
        desc: "Staging with automatic deploys, production with gated deploys, health checks, alerts and rollback. PII-free logs, with LGPD in mind.",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've worked",
    items: [
      {
        period: "Sep 2026 — present",
        role: "Full Stack Developer",
        org: "Enviagora",
        desc: "I led the migration of the HR Hub to Google Cloud and I'm building EnviaMind, the company's single platform.",
        highlights: [
          "Platform: GCP in Terraform (Cloud Run, private-IP Cloud SQL, Secret Manager, Load Balancer, Cloud DNS); CI/CD on GitHub Actions with Workload Identity Federation, secret scanning and approval-gated production deploys; a monorepo with ~20 systems imported with full history.",
          "Data: PostgreSQL in raw/trusted/refined layers per department, a universal person key, RLS, server-side RBAC and an outbox for integrations (ClickUp, ZapSign).",
          "HR Hub migration: full rehearsal in QA, row count and checksum validation, ~45 min cutover with rollback.",
          "Meeting recorder: local-first PWA with chunked upload and ACKs, no audio lost; streaming transcription (Gemini Live) and a final pass with diarization; a second model reviews the transcript against a knowledge base; an agent detects commitments every 45 s as Zod-validated JSON, anchored to the source excerpt and gated by confidence; approved ones become ClickUp tasks. Adapters swap Claude and Gemini by config; model picked by benchmark (word error rate from 13.4% to 7.6%).",
          "Digital onboarding: OCR with PDF text and fallback to vision models via OpenRouter, structured extraction per document type, deterministic normalization and identity cross-checks; blind evaluation across models.",
          "Gatehouse: license plate reading with vision (Claude on Vertex AI), regex and minimum confidence, with human confirmation.",
          "5S audits: mobile app with camera and QR codes, server-side scoring and anti-fraud.",
          "Spec-driven development, ADRs, tests (Vitest, Playwright), LGPD and AI agents in the dev workflow.",
        ],
        stack: "TypeScript, Node.js, Next.js, React, Fastify, PostgreSQL, Prisma, Zod, Tailwind CSS, TanStack Query, Vitest, Playwright, Docker, Terraform, Google Cloud, Vertex AI, GitHub Actions, three.js, Python",
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
    source: "source code",
    sheet: "sheet 01/01",
    rev: "rev",
    built: "built",
  },
}
