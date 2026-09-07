import type { Messages } from "@/lib/i18n-types"

export const es: Messages = {
  meta: {
    title: "Miguel Vaz · Desarrollador Fullstack & AI Engineer",
    description:
      "Miguel Vaz, desarrollador fullstack y AI engineer: React, Python, Node.js y agentes de IA integrados vía API de Anthropic. Consulta mi portafolio de proyectos.",
    ogDescription:
      "Desarrollador fullstack y AI engineer. Mira mis proyectos y ponte en contacto.",
    twitterDescription: "Desarrollador fullstack y AI engineer.",
    siteName: "Portafolio Miguel Vaz",
    jobTitle: "Desarrollador Fullstack & AI Engineer",
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
    skills: "Skills",
    projects: "Proyectos",
    credentials: "Formación",
    contact: "Contacto",
  },
  profile: {
    role: "Desarrollador Fullstack & AI Engineer",
  },
  hero: {
    subtitle:
      "Desarrollador fullstack con enfoque en inteligencia artificial. Construyo el front-end en React, el back-end en Python y Node.js, y uso esa base para integrar agentes de IA en sistemas reales.",
    available: "disponible para nuevos proyectos",
    contactCta: "Contactar",
    projectsCta: "Ver proyectos",
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Quién está detrás del código",
    paragraphs: [
      "Soy Miguel: desarrollo aplicaciones fullstack, del front-end en React al back-end en Python y Node.js, y uso eso como base para construir y probar agentes de IA de verdad.",
      "En el día a día integro LLMs a sistemas reales a través de la API de Anthropic (Claude), escribo e itero prompts midiendo resultados, y ya implementé un servidor MCP para exponer herramientas a un agente. Cubro lo que escribo con pruebas automatizadas y publico en la nube con contenedores.",
      "Soy Técnico en Desarrollo de Sistemas por el SENAI y curso Análisis y Desarrollo de Sistemas en el IFSP. Fuera del código, me gusta entender cómo se construyó un producto por detrás.",
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Tecnologías que uso en el día a día",
    groups: [
      {
        label: "Front-end",
        skills: ["JavaScript", "React", "HTML", "CSS", "Leaflet.js", "APIs REST"],
      },
      {
        label: "Back-end y datos",
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
        label: "Inteligencia artificial",
        skills: [
          "Agentes de IA",
          "API Anthropic (Claude)",
          "GitHub Copilot",
          "Ingeniería de prompt",
          "Servidores MCP",
          "n8n",
        ],
      },
      {
        label: "Calidad y entrega",
        skills: [
          "Pruebas automatizadas",
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
      "mv-financing": {
        description:
          "App de finanzas personales: login JWT, sincronización en la nube entre dispositivos, presupuestos por categoría, metas, inversiones e informes en Excel/PDF.",
        role: "Desarrollo full-stack: API, autenticación y front-end.",
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
        note: "2.º semestre en ago/2026",
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
        period: "ene/2026 — actualidad",
        role: "Asistente de I+D",
        org: "Soft Film",
        desc: "Revisa y actualiza componentes de recetas, solicita análisis a Control de Calidad, registra y reclasifica órdenes de producción. Rutina manual en Excel que motivó automatizar validaciones en Python.",
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
    body: "Estoy abierto a oportunidades, proyectos freelance y buenas conversaciones sobre tecnología. ¿Tienes algo en mente? Envíame un mensaje y te respondo.",
  },
  footer: {
    by: "por",
  },
}
