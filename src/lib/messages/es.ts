import type { Messages } from "@/lib/i18n-types"

export const es: Messages = {
  meta: {
    title: "Miguel Vaz · Desarrollador Full Stack · AI Engineering",
    description:
      "Miguel Vaz, desarrollador full stack: TypeScript, Node.js, React, Next.js, PostgreSQL y Google Cloud, con IA aplicada a sistemas reales. Mira experiencia y proyectos.",
    ogDescription:
      "Desarrollador full stack con IA aplicada a sistemas reales. Mira experiencia y proyectos.",
    twitterDescription: "Desarrollador full stack · AI Engineering.",
    siteName: "Portafolio Miguel Vaz",
    jobTitle: "Desarrollador Full Stack",
    knowsAboutAi: "Inteligencia Artificial",
  },
  aria: {
    skipToContent: "Saltar al contenido",
    mainNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    themeLight: "Activar tema claro",
    themeDark: "Activar tema oscuro",
    language: "Idioma",
    scrollToAbout: "Ir a la sección sobre mí",
    stackUsedIn: "Stack usada en {name}",
  },
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    skills: "Skills",
    projects: "Proyectos",
    credentials: "Formación",
    contact: "Contacto",
  },
  profile: {
    role: "Desarrollador Full Stack · AI Engineering",
  },
  hero: {
    subtitle:
      "Llevo sistemas a producción de punta a punta: arquitectura, nube, seguridad y despliegue, con IA integrada donde resuelve un problema real.",
    available: "abierto a buenas conversaciones",
    contactCta: "Contactar",
    projectsCta: "Ver proyectos",
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Quién está detrás del código",
    paragraphs: [
      "Soy Miguel, desarrollador full stack. Construyo sistemas de punta a punta: hablo con el área de negocio, diseño la arquitectura, escribo front y back en TypeScript y me encargo de la nube, la seguridad y el despliegue.",
      "La IA es parte de cómo trabajo y de lo que entrego. Integro LLMs en sistemas reales sin atarme a un solo proveedor (Claude, DeepSeek y otros modelos vía OpenRouter), construyo agentes y pipelines que clasifican, extraen y validan datos, y ya implementé servidores MCP para exponer herramientas a agentes. En el día a día uso agentes de IA en el desarrollo, siempre con pruebas automatizadas y revisión.",
      "Soy Técnico en Desarrollo de Sistemas por el SENAI y estudio Análisis y Desarrollo de Sistemas en el IFSP. Antes de programar a tiempo completo, trabajé en I+D y en rutinas administrativas en la industria, y esa experiencia de operación orienta los sistemas que construyo hoy.",
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Tecnologías que uso en el día a día",
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
        label: "Back-end y datos",
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
        label: "Inteligencia artificial",
        skills: [
          "Agentes de IA",
          "LLMs (Claude, DeepSeek)",
          "OpenRouter",
          "Salidas estructuradas (JSON)",
          "Claude Code",
          "Cursor",
          "Servidores MCP",
          "Ingeniería de prompts",
          "OCR con IA",
          "n8n",
        ],
      },
      {
        label: "Nube, calidad y entrega",
        skills: [
          "Google Cloud (Cloud Run, Cloud SQL)",
          "GitHub Actions",
          "Docker",
          "Vitest",
          "Jest",
          "Playwright",
          "Accesibilidad WCAG AA",
          "Git/GitHub",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Lo que he estado construyendo",
    webHeading: "Web",
    aiHeading: "IA y automatización",
    openSite: "abrir sitio",
    viewRepo: "ver repositorio",
    web: {
      cortex: {
        description:
          "Panel de administración para que un servicio de catering gestione el día a día: pedidos, eventos y control de la operación en un solo lugar.",
        role: "Desarrollo front-end e integración de los flujos operativos.",
      },
      modus: {
        description:
          "Sistema de gestión de mantenimiento: órdenes de servicio, activos y equipos operativos reunidos en un solo lugar.",
        role: "Desarrollo front-end y modelado de los flujos de mantenimiento.",
      },
      elos: {
        description:
          "Sistema de gestión con registro de usuarios, direcciones y establecimientos, mapa interactivo con Leaflet y búsqueda de código postal mediante la API ViaCEP. Datos en LocalStorage.",
        role: "Desarrollo front-end completo, desde cero.",
      },
    },
    ai: {
      "validador-registros-tabulares": {
        description:
          "API REST que ingiere hojas de pedidos y valida cada registro según reglas de negocio, señalando el campo inconsistente. Un agente de LLM relee los pedidos rechazados y devuelve campos estructurados en JSON para recuperar lo que se pueda.",
        role: "Desarrollo del back-end, del agente de IA y del servidor MCP.",
        highlights: [
          "5 de 10 pedidos rechazados recuperados por el agente",
          "procesamiento en menos de 1 s",
          "13 pruebas automatizadas (e2e, endpoints incl. HTTP 422, MCP vía JSON-RPC)",
        ],
        diagramSteps: [
          "Hoja de pedidos",
          "API REST (FastAPI)",
          "Validación por regla de negocio",
          "Agente LLM (Claude) relee rechazados",
          "Registros recuperados en JSON",
        ],
      },
      "pipeline-tendencia-conteudo": {
        description:
          "Pipeline autónomo que ingiere datos de APIs externas, filtra y clasifica con un agente de LLM, y ejecuta el flujo completo sin intervención humana, publicado en contenedor.",
        role: "Desarrollo del pipeline, integración con el agente de LLM y deploy.",
        highlights: [
          "ejecución autónoma, sin intervención humana",
          "publicado en contenedor en Fly.io",
        ],
        diagramSteps: [
          "Señal externa (API HTTP)",
          "Ingesta de datos",
          "Agente LLM clasifica",
          "Flujo ejecutado sin intervención",
          "Publicación",
        ],
      },
    },
  },
  credentials: {
    eyebrow: "Formación",
    title: "Formación y premios",
    educationHeading: "Formación",
    awardsHeading: "Premios",
    education: [
      {
        period: "feb/2026 — dic/2028",
        title: "Análisis y Desarrollo de Sistemas",
        org: "IFSP",
        note: "en curso",
      },
      {
        period: "mar/2024 — ago/2025",
        title: "Técnico en Desarrollo de Sistemas",
        org: "SENAI CFP Janez Hlebanja",
      },
    ],
    awards: [
      {
        year: "2026 — actualidad",
        title: "Embajador SAGA SENAI — Proyectos de Innovación",
        desc: "Único alumno seleccionado por desempeño para representar a la institución, presentar proyectos y mentorear a otros alumnos.",
      },
      {
        year: "2021 · 2022",
        title: "Olimpíada Brasileña de Astronomía y Astronáutica",
        desc: "Medalla de Oro (2021) y Plata (2022).",
      },
    ],
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Dónde ya puse las manos a la obra",
    items: [
      {
        period: "sep/2026 — actual",
        role: "Desarrollador Full Stack",
        org: "Enviagora",
        desc: "Diseño, construyo y llevo a producción sistemas internos de punta a punta: desde el relevamiento con el área de negocio hasta la arquitectura, la nube, la seguridad y el despliegue.",
        highlights: [
          "Conduje la migración de la plataforma de RR. HH. (Enviagora Hub) a Google Cloud: Cloud Run, Cloud SQL, Cloud Storage y Secret Manager, con staging automático, despliegue protegido vía GitHub Actions, health checks y rollback.",
          "Llevé a producción el módulo de Admisión Digital: documentos del candidato, dosier en PDF/ZIP, e-mail transaccional y OCR con IA, con idempotencia y logs sin datos personales.",
          "Diseñé la arquitectura de EnviaMind, monorepo que unifica los BI de la empresa con acceso por sector y rol, auditoría, modo TV y OAuth con tokens cifrados.",
          "Creé dashboards integrados con ClickUp y Google, con snapshots en PostgreSQL y tolerancia a fallos, y un panel de indicadores (MRR, SLA, embudo).",
          "Desarrollé un sistema de auditoría 5S para centros de distribución: app móvil con cámara y código QR, login integrado al WMS y nota calculada en el servidor.",
          "Construí un planificador 3D de oficinas con three.js y un motor de reglas de circulación y rutas de evacuación.",
          "Reduje el layout shift móvil de 0,585 a 0,014 y mantengo más de 550 pruebas automatizadas entre los proyectos, con desarrollo guiado por especificación.",
        ],
      },
      {
        period: "ene/2026 — ago/2026",
        role: "Asistente de I+D",
        org: "Soft Film",
        desc: "I+D en un entorno industrial: experiencia directa con órdenes de producción, control de calidad y datos de proceso, la misma operación para la que hoy construyo sistemas.",
        highlights: [
          "Revisé y actualicé componentes de las recetas de producción.",
          "Hice el registro y la reclasificación de órdenes de producción y el enlace con Control de Calidad en las solicitudes de análisis.",
          "La rutina manual en Excel me llevó a automatizar validaciones con Python, mi primer paso para llevar software a la operación.",
        ],
      },
      {
        period: "ago/2024 — dic/2025",
        role: "Aprendiz",
        org: "Hutchinson",
        desc: "Rutinas administrativas en un entorno industrial, adaptación rápida a procesos y equipos.",
      },
      {
        period: "ago/2023 — jul/2024",
        role: "Aprendiz",
        org: "Panasonic do Brasil",
        desc: "Rutinas administrativas en un entorno corporativo, primer contacto con procesos de una empresa grande.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "¿Hablamos?",
    body: "Abierto a buenas conversaciones sobre tecnología, proyectos y oportunidades. ¿Tienes algo en mente? Escríbeme y te respondo.",
  },
  footer: {
    by: "por",
  },
}
