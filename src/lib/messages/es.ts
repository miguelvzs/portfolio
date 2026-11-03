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
    stackUsedIn: "Stack usada en {name}",
  },
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    cases: "Casos",
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
    available: "abierto a nuevos proyectos",
    contactCta: "Contactar",
    projectsCta: "Ver proyectos",
    cvCta: "Descargar CV",
    cvHref: "/cv/miguel-vaz-cv-en.pdf",
    sheet: { role: "cargo", base: "base", status: "estado", stack: "stack", baseValue: "Extrema, MG · Brasil", localTime: "hora de Brasilia", lastPush: "último push" },
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Software hecho cerca de la operación",
    paragraphs: [
      "Soy Miguel, desarrollador full stack. Construyo sistemas de punta a punta: hablo con el área de negocio, diseño la arquitectura, escribo front y back en TypeScript y me encargo de la nube, la seguridad y el despliegue.",
      "La IA es parte de cómo trabajo y de lo que entrego. Integro LLMs en sistemas reales sin atarme a un solo proveedor (Claude, DeepSeek y otros modelos vía OpenRouter), construyo agentes y pipelines que clasifican, extraen y validan datos, y ya implementé servidores MCP para exponer herramientas a agentes. En el día a día uso agentes de IA en el desarrollo, siempre con pruebas automatizadas y revisión.",
      "Soy Técnico en Desarrollo de Sistemas por el SENAI y estudio Análisis y Desarrollo de Sistemas en el IFSP. Antes de programar a tiempo completo, trabajé en I+D y en rutinas administrativas en la industria, y esa experiencia de operación orienta los sistemas que construyo hoy.",
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Stack de trabajo",
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
    title: "Proyectos personales y de competición",
    webHeading: "Proyectos anteriores (web)",
    showOlder: "Ver proyectos anteriores",
    aiHeading: "IA y automatización",
    productsHeading: "Productos",
    private: "privado",
    openSite: "abrir sitio",
    viewRepo: "ver repositorio",
    tryDemo: "probar en vivo",
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
    products: {
      morada: {
        description:
          "App móvil para inmigrantes: cuánto ganaste y gastaste, quién te debe, metas, plazos de documentos y comunidad de la ciudad. En portugués, español e inglés. En desarrollo.",
        role: "Producto propio: app, API, base de datos y deploy.",
      },
      "media-hub": {
        description:
          "Sistema interno en producción para una empresa de medios: puntos de exhibición, biblioteca, programación, producción, contratos y facturación, con asistente de IA.",
        role: "Desarrollo completo para un cliente.",
      },
      "quebra-gelo": {
        description:
          "1.er lugar entre 25 equipos en el hackathon OpenAI DevDay Exchange Community, organizado por los OpenAI Codex Ambassadors en São Paulo (2026): una mascota virtual que solo avanza cuando hablas con alguien de verdad en el evento, con pantalla en vivo para los organizadores.",
        role: "Desarrollo en dupla, del producto al deploy.",
      },
      vellfinancing: {
        description:
          "Control financiero personal: movimientos, presupuesto, metas, inversiones e importación de extractos bancarios OFX/CSV.",
        role: "Desarrollo completo, desde cero.",
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
        year: "2026",
        title: "1.er lugar — Hackathon OpenAI DevDay Exchange Community (São Paulo)",
        desc: "Entre 25 equipos, en el hackathon organizado por los OpenAI Codex Ambassadors, con Quebra-Gelo, hecho en dupla en un día. Premio de OpenAI: US$ 1.000 en créditos de Codex para el equipo y 12 meses de ChatGPT Pro para cada integrante.",
      },
      {
        year: "2026",
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
  stats: {
    label: "Números",
    items: [
      { value: "550+", label: "pruebas automatizadas entre los proyectos" },
      { value: "0,585 → 0,014", label: "layout shift móvil después de la optimización" },
      { value: "5 de 10", label: "pedidos rechazados recuperados por un agente de IA" },
      { value: "5.089 → 98 ms", label: "carga de la lista de auditorías con 300 registros" },
    ],
  },
  demo: {
    eyebrow: "Demo en vivo",
    title: "Validador de pedidos con agente de IA",
    intro: "Edita la planilla de ejemplo (datos ficticios), valídala con las reglas de negocio y pide a la IA que recupere lo que pueda. Las reglas corren en tu navegador; solo los pedidos rechazados van al LLM.",
    editLabel: "Planilla (CSV)",
    validate: "Validar",
    recover: "Recuperar con IA",
    recovering: "Recuperando…",
    reset: "Restaurar ejemplo",
    valid: "válidos",
    rejected: "rechazados",
    recovered: "recuperados por la IA",
    order: "Pedido",
    reasonsCol: "Motivos",
    corrections: "Correcciones aplicadas",
    noCorrections: "La IA no encontró una corrección segura para los pedidos restantes.",
    aiNote: "La IA solo corrige lo que se puede deducir de los otros campos del pedido. Cliente, SKU, ID y plazo nunca se inventan.",
    unavailable: "La IA no está disponible ahora. La validación sigue funcionando.",
    rateLimited: "Límite de uso alcanzado. Intenta de nuevo en unos minutos.",
    error: "No fue posible contactar a la IA ahora.",
    reasons: {
      id_empty: "ID vacío",
      id_dup: "ID duplicado: {value}",
      client_empty: "cliente vacío",
      email: "e-mail inválido",
      qty: "cantidad inválida",
      unit: "precio unitario inválido",
      total: "el total no cuadra",
      deadline: "plazo vencido o inválido",
      product_empty: "producto vacío",
      sku_empty: "SKU vacío",
    },
  },
  cases: {
    eyebrow: "Casos",
    title: "Sistemas que diseñé y construí",
    subtitle: "Trabajo profesional descrito sin datos internos. Los diagramas muestran la arquitectura, no pantallas reales.",
    context: "Contexto",
    did: "Qué hice",
    result: "Resultado",
    readArticle: "Leer el artículo sobre la migración (PT)",
    items: [
      {
        slug: "cloud",
        title: "Migración de una plataforma de RR. HH. a Google Cloud",
        context: "Plataforma de RR. HH. en producción, alojada en un VPS con Dokploy y archivos en MinIO, migrada a infraestructura gestionada en Google Cloud.",
        points: [
          "Cloud Run para backend y frontend, Cloud SQL (PostgreSQL) con backup diario y recuperación point-in-time de 7 días, Cloud Storage privado, Secret Manager por entorno y Load Balancer HTTPS con certificado gestionado.",
          "Despliegue con GitHub Actions y Workload Identity Federation, sin claves de cuenta de servicio: staging automático y producción manual, que solo acepta main con CI en verde.",
          "Migrations al iniciar el backend; si la nueva revisión no queda sana, el tráfico sigue en la anterior y el frontend no se publica. Rollback por revisión de Cloud Run.",
          "Restricciones de seguridad de la organización (claves de servicio y acceso público bloqueados) resueltas con el cliente nativo de Cloud Storage y build de imágenes en el runner.",
        ],
        result: "Migración concluida, con uptime checks cada 5 minutos, alertas multirregión, alerta de presupuesto y runbook de operación.",
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
        title: "Admisión digital con lectura de documentos por IA",
        context: "Flujo de admisión de punta a punta: desde la invitación al candidato hasta el envío del dosier a contabilidad.",
        points: [
          "Enlace con token cifrado válido por 7 días; el candidato envía fotos o PDF (anverso y reverso) y RR. HH. revisa todo en una pantalla.",
          "Lectura de documentos por IA vía OpenRouter, con modelo elegido por medición, cola de fallback y circuit breaker. Solo completa campos vacíos que pasan validación (dígito verificador, código postal, fechas); lo demás queda como sugerencia.",
          "Dosier en PDF y ZIP, e-mail transaccional e integraciones idempotentes con Google Sheets y Google Forms que soportan doble clic y reenvío.",
          "Seguridad: nadie asigna un rol superior al propio, el enlace se bloquea tras el envío, los enlaces inválidos tienen respuesta única y ninguna URL lleva datos personales.",
        ],
        result: "Módulo en producción, cubierto por cientos de pruebas automatizadas.",
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
          "Invitación",
          "Envío del candidato",
          "Lectura por IA",
          "Revisión de RR. HH.",
          "Dosier + integraciones",
        ],
      },
      {
        slug: "bi",
        title: "Hub de BI unificado con acceso por rol y modo TV",
        context: "Dashboards de BI dispersos, reunidos en un solo producto con control de acceso, auditoría y visualización en TV.",
        points: [
          "Monorepo con un paquete y esquema por BI; cada uno se migra desde el código existente en lugar de reescribirse, y solo sale de \"en integración\" al demostrar paridad.",
          "Autenticación propia (scrypt, sesión con expiración, contraseña provisional), RBAC por sector y rol validado en el backend y registro de auditoría.",
          "Modo TV en 1920×1080 que escala nítido hasta 4K, emparejado con código de un solo uso y acceso solo de lectura.",
          "Integración con Google vía OAuth con PKCE y tokens cifrados con AES-256-GCM y rotación de clave.",
        ],
        result: "Design system propio y CI que bloquea secretos expuestos, contraste por debajo de WCAG AA, errores de tipos y pruebas fallidas.",
        stack: [
          "Next.js",
          "Fastify",
          "Zod",
          "PostgreSQL",
          "pnpm workspaces",
          "Vitest",
        ],
        diagram: [
          "Navegador",
          "Next.js (mismo origen)",
          "API Fastify",
          "PostgreSQL",
          "APIs de Google",
        ],
      },
      {
        slug: "audit",
        title: "Auditoría 5S móvil con diseño antifraude",
        context: "Auditorías 5S en centros de distribución, hechas en el celular mientras el auditor recorre la ruta física.",
        points: [
          "Fotos solo desde la cámara de la app, sin subir de la galería; selfie al inicio y al final, lectura de código QR y cola offline que no pierde fotos.",
          "Nota calculada en el servidor: un ítem crítico no conforme reprueba, \"no aplica\" nunca cuenta como cero y la revisión del admin preserva el resultado original.",
          "Antifraude: el auditor nunca recibe el valor esperado (lo garantiza una prueba automatizada), conteo ciego y señales de sospecha calculadas al concluir.",
          "Login integrado al WMS mediante un adaptador aislado, con timeout y sin guardar ni registrar la contraseña.",
        ],
        result: "Lista de auditorías de 5.089 ms a 98 ms con 300 registros, 305 pruebas automatizadas y 60 de 60 pantallas sin scroll horizontal y con contraste AA.",
        stack: [
          "Next.js",
          "TanStack Query",
          "Fastify",
          "Prisma",
          "PostgreSQL",
          "Cloud Run",
        ],
        diagram: [
          "QR del sector",
          "Checklist en la ruta",
          "Foto + respuesta",
          "Nota en el servidor",
          "Plan de acción",
        ],
      },
    ],
  },
  process: {
    eyebrow: "Cómo trabajo",
    title: "Cómo un requisito llega a producción",
    items: [
      {
        title: "Especificación antes del código",
        desc: "Cada entrega empieza con spec, criterios de aceptación y registro de decisiones (ADRs). Creé este método en un proyecto y lo reutilicé en los siguientes.",
      },
      {
        title: "IA con revisión humana",
        desc: "Uso agentes de IA para acelerar implementación, pruebas y revisión, pero cada cambio pasa por PR, pruebas y una lectura crítica antes de salir.",
      },
      {
        title: "Calidad automatizada",
        desc: "Pruebas unitarias y end-to-end (Vitest, Jest, Playwright), verificación de accesibilidad WCAG AA y escaneo de secretos en CI.",
      },
      {
        title: "Producción desde el primer día",
        desc: "Staging con despliegue automático, producción con despliegue protegido, health checks, alertas y rollback. Logs sin datos personales, pensando en la LGPD.",
      },
    ],
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Dónde he trabajado",
    items: [
      {
        period: "sep/2026 — actual",
        role: "Desarrollador Full Stack",
        org: "Enviagora",
        desc: "Conduje la migración del Hub de RR. HH. a Google Cloud y construyo EnviaMind, la plataforma única de la empresa.",
        highlights: [
          "Plataforma: GCP con Terraform (Cloud Run, Cloud SQL con IP privada, Secret Manager, Load Balancer, Cloud DNS); CI/CD en GitHub Actions con Workload Identity Federation, secret scanning y deploy a producción con aprobación; monorepo con ~20 sistemas importados con su historial.",
          "Datos: PostgreSQL en capas raw/trusted/refined por área, clave universal de persona, RLS, RBAC calculado en el servidor y outbox para integraciones (ClickUp, ZapSign).",
          "Migración del Hub de RR. HH.: ensayo en QA, validación por conteo y checksum, cutover de ~45 min con rollback.",
          "Grabador de reuniones: PWA local-first con chunks y ACK, sin pérdida de audio; transcripción en streaming (Gemini Live) y final con diarización; un segundo modelo revisa la transcripción contra una base de conocimiento; un agente detecta compromisos cada 45 s en JSON validado con Zod, anclado al fragmento de origen y con umbral de confianza; los aprobados se vuelven tareas en ClickUp. Adapters cambian entre Claude y Gemini por variable; modelo elegido por benchmark (tasa de error de palabras de 13,4% a 7,6%).",
          "Admisión digital: OCR con texto del PDF y fallback a modelos de visión vía OpenRouter, extracción estructurada por tipo de documento, normalización determinista y cruce de identidad; evaluación ciega entre modelos.",
          "Portería: lectura de matrículas por visión (Claude en Vertex AI), regex y confianza mínima, con confirmación humana.",
          "Auditoría 5S: app móvil con cámara y código QR, puntuación en el servidor y antifraude.",
          "Spec-driven development, ADRs, pruebas (Vitest, Playwright), LGPD y agentes de IA en el flujo de desarrollo.",
        ],
        stack: "TypeScript, Node.js, Next.js, React, Fastify, PostgreSQL, Prisma, Zod, Tailwind CSS, TanStack Query, Vitest, Playwright, Docker, Terraform, Google Cloud, Vertex AI, GitHub Actions, three.js, Python",
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
    source: "código fuente",
    sheet: "hoja 01/01",
    rev: "rev",
    built: "build",
  },
}
