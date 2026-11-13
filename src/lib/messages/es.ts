import type { Messages } from "@/lib/i18n-types"

// Español neutro. Mismo contenido y mismas fuentes que pt.ts; nada se agrega solo en este idioma.
// No hay CV en español: el botón descarga el CV en inglés, como en el sitio de octubre.
export const es: Messages = {
  meta: {
    title: "Miguel Vaz · Desarrollador Full Stack · AI Engineering",
    description:
      "Miguel Vaz, desarrollador full stack: Google Cloud, PostgreSQL y TypeScript, con IA aplicada a sistemas que llegan a producción. Casos, proyectos y contacto.",
    ogDescription:
      "Desarrollador full stack. Llevo sistemas a producción, con IA integrada donde resuelve un problema real.",
    twitterDescription: "Desarrollador full stack · AI Engineering.",
    siteName: "Portafolio de Miguel Vaz",
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
    flow: "Flujo de {name}",
    mine: "decisión mía",
  },
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    cases: "Casos",
    projects: "Proyectos",
    notes: "Notas",
    credentials: "Formación",
    contact: "Contacto",
  },
  profile: {
    role: "Desarrollador Full Stack · AI Engineering",
  },
  hero: {
    subtitle:
      "Llevo sistemas a producción de extremo a extremo: arquitectura, nube, seguridad y deploy, con IA integrada donde resuelve un problema real.",
    available: "Estoy abierto a nuevos proyectos.",
    contactCta: "Escríbeme",
    projectsCta: "Ver proyectos",
    cvCta: "Descargar CV (en inglés)",
    cvHref: "/cv/miguel-vaz-cv-en.pdf",
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Lo que hago hoy y de dónde vengo",
    paragraphs: [
      "Soy desarrollador full stack en Enviagora. Allí uso Google Cloud con Terraform en todos los proyectos y formo parte del equipo que construye EnviaMind, la plataforma única que reúne RR. HH., operación, control de acceso, finanzas y dirección.",
      "En IA, construyo flujos pensados para producción. Lo que extrae el modelo pasa por validación, un umbral de confianza o la aprobación de una persona antes de convertirse en una acción. No me ato a un solo proveedor (Claude, Gemini y GPT vía Vertex AI y OpenRouter), mido el costo de cada llamada y elijo el modelo por evaluación.",
      "Antes del software, pasé por la industria: técnico en Desarrollo de Sistemas por el SENAI, dibujo técnico mecánico, mantenimiento electromecánico y pasos por Panasonic, Hutchinson y el área de I+D de Soft Film. Hoy estudio Análisis y Desarrollo de Sistemas en el IFSP. Fuera del trabajo, construyo Morada y formo parte del equipo Ponto e Vírgula, que está escribiendo la especificación de Studoo.",
    ],
    stackLabel: "Stack",
    stack:
      "TypeScript, Node.js, React, Next.js, Fastify, PostgreSQL, Prisma, Zod, Python, Google Cloud, Terraform, Docker, GitHub Actions, Vertex AI y AI SDK.",
  },
  experience: {
    moreLabel: "más detalles",
    eyebrow: "Experiencia",
    title: "Dónde ya puse manos a la obra",
    items: [
      {
        period: "actual",
        role: "Desarrollador Full Stack",
        org: "Enviagora",
        desc: "Construyo los sistemas internos de la empresa y los llevo a producción, desde la infraestructura hasta los flujos con IA.",
        highlights: [
          "Lideré la migración del Hub de RR. HH. a Google Cloud: ensayo general completo en QA, validación por conteo y checksum y un cutover de unos 45 minutos, con rollback listo.",
          "En el grabador de reuniones, un agente lee la transcripción cada 45 s y propone compromisos, cada uno anclado al fragmento del que salió. Solo se convierten en tareas de ClickUp después de que una persona los aprueba. Cambiar de modelo por benchmark bajó la tasa de error por palabra (WER) del 13,4 % al 7,6 %.",
          "En la admisión digital, la lectura de documentos usa el texto del PDF y recurre a modelos de visión solo cuando hace falta; los modelos se compararon a ciegas antes de elegir.",
        ],
        more: [
          "Plataforma en Google Cloud con Terraform: Cloud Run, Cloud SQL con IP privada, Secret Manager, Load Balancer y Cloud DNS. CI/CD en GitHub Actions con Workload Identity Federation, detección de secretos y deploy a producción solo con aprobación. Un monorepo con unos 20 sistemas importados con su historial.",
          "Datos en PostgreSQL por capas (raw, trusted y refined) en cada área, una clave universal de persona, RLS, RBAC calculado en el servidor y un outbox para las integraciones con ClickUp y ZapSign.",
          "Grabador de reuniones: una PWA local-first que sube el audio por partes, con confirmación de recepción y sin pérdida de audio; transcripción en streaming (Gemini Live) y una pasada final con diarización; un segundo modelo la revisa contra una base de conocimiento.",
          "Admisión digital: extracción por tipo de documento, normalización determinística y cruce de identidad, con OpenRouter como alternativa.",
          "Control de acceso: lectura de la placa del vehículo por visión (Claude en Vertex AI), con confianza mínima y confirmación humana.",
          "Auditorías 5S: app móvil con cámara y código QR, puntaje calculado en el servidor y antifraude.",
        ],
      },
      {
        role: "Asistente de I+D",
        org: "Soft Film",
        desc: "Investigación y desarrollo en un entorno industrial.",
      },
      {
        role: "Aprendiz",
        org: "Hutchinson y Panasonic",
        desc: "Mis primeros pasos en la industria, en tareas administrativas.",
      },
    ],
  },
  cases: {
    eyebrow: "Casos",
    title: "Sistemas que diseñé y construí",
    subtitle: "Cada caso cuenta el problema, la restricción, la decisión y dónde está hoy. Ningún dato de cliente.",
    arcLabels: {
      problema: "El problema",
      restricao: "La restricción",
      decisao: "La decisión",
      erro: "Lo que salió mal",
      fora: "Lo que quedó fuera",
      resultado: "Dónde está",
    },
    items: [
      {
        slug: "vell",
        title: "Vell, mi agencia de sitios web",
        intro:
          "Cada vista previa de sitio pasa por el mismo flujo, con un equipo de agentes de IA y cuatro puntos en los que decido yo. Nada sale 100 % automático.",
        flowLabel: "el flujo de una vista previa",
        flow: [
          { label: "Investigación y dossier" },
          { label: "Objetivo y dirección", mine: true },
          { label: "Construcción" },
          { label: "Borrador", mine: true },
          { label: "QA automático" },
          { label: "Revisión independiente" },
          { label: "Versión final", mine: true },
          { label: "Publicación" },
          { label: "Envío", mine: true },
        ],
        arc: [
          ["problema", "Hacer una vista previa de sitio a medida para cada negocio, lo bastante rápido para enviarla en el primer contacto y sin cara de plantilla."],
          ["restricao", "Nada sale sin mí: ninguna vista previa se publica ni le llega a nadie sin mi aprobación. Y nada se inventa: precios, calificaciones, testimonios, teléfonos y horarios, solo con fuente."],
          ["decisao", "Agentes con roles separados, porque quien construye no revisa. El revisor califica por criterio y solo aprueba con todos en 8,5 o más; el QA rechaza por sí solo lo que no cumpla texto de 16 px, áreas táctiles de 44 px, contraste AA y LCP por debajo de 2,5 s."],
          ["resultado", "12 vistas previas hasta ahora (12/11/2026). Las reglas están en un único archivo que todos los agentes leen antes de empezar, y cada rechazo mío se convierte en una línea nueva. Las vistas previas se publican con noindex, solo para quien tiene el enlace."],
        ],
        link: { href: "https://velldigital.vercel.app", label: "sitio de Vell" },
      },
      {
        slug: "morada",
        title: "Morada, una app para inmigrantes",
        intro:
          "Dinero, documentos y plazos para quien vive en un país nuevo. Producto propio: app, API, base de datos y deploy, en portugués, español e inglés.",
        flowLabel: "las capas de la app",
        flow: [
          { label: "App · Expo" },
          { label: "Caché · TanStack Query" },
          { label: "Contrato · Zod" },
          { label: "API · Next.js" },
          { label: "Base de datos · PostgreSQL" },
        ],
        arc: [
          ["problema", "Quien acaba de llegar a un país nuevo usa el teléfono en la calle, muchas veces con una sola mano y con datos móviles limitados. Necesita saber cuánto ganó y gastó, quién todavía le debe y qué plazo de documento está por vencer."],
          ["restricao", "Privacidad y mala conexión. La app nunca habla con la base de datos ni con un proveedor externo y no guarda secretos; con mala conexión, muestra la última lectura. Y tres idiomas desde el primer día."],
          ["decisao", "Saldo, totales y estados se calculan solo en el servidor, para que la pantalla de inicio, las finanzas, el informe y el PDF siempre coincidan. El saldo muestra solo lo real: lo que está por cobrar o por pagar nunca entra en él. El mismo esquema Zod valida el formulario en la app y otra vez en la API."],
          ["fora", "Una versión web en la v1, porque solo la app nativa puede recordarte algo con la app cerrada. El inicio de sesión solo con código por correo pasó a ser con contraseña, para entrar todos los días sin abrir el correo. Y el día de la contratación, el servidor de la UE estaba agotado: elegí Canadá, con copia de seguridad en la UE, y acepté unos 100 ms más por llamada."],
          ["resultado", "Primer build en TestFlight el 26/10/2026; la beta pública está abierta en getmorada.app/beta. El 18/10 la API tenía 345 pruebas pasando, y las auditorías de seguridad internas no encontraron nada crítico; los hallazgos medios ya están corregidos. Todavía no se validó en uso real: ese es el próximo paso."],
        ],
        image: { alt: "Pantalla de inicio de Morada: saludo para Ana en Valencia, saldo de € 682,60 con el equivalente en reales y los botones Recibí y Gasté.", caption: "La pantalla de inicio de la app, con los datos ficticios de las capturas de la tienda. La app aparece en portugués." },
        link: { href: "https://getmorada.app", label: "getmorada.app" },
      },
      {
        slug: "quebra-gelo",
        title: "Quebra-Gelo, 1.er lugar en un hackathon de OpenAI",
        intro:
          "Hackathon OpenAI DevDay Exchange Community, en São Paulo, organizado por los OpenAI Codex Ambassadors. Hecho en pareja con Julio Akamine.",
        body:
          "Una mascota virtual multijugador en tiempo real, hecha en un día y en pareja. Mi rol: desarrollo, del producto al deploy.",
        arc: [
          ["decisao", "El momento en que decidimos que el juego podía tratarse del evento mismo, y no de una situación cualquiera. La regla quedó así: la mascota solo evoluciona cuando hablas de verdad con alguien ahí."],
          ["restricao", "Un día, en pareja. Entró lo esencial: multijugador en tiempo real por WebSocket, la mascota creada por IA multimodal con salida estructurada y una pantalla gigante en vivo para que la organización siguiera el evento."],
          ["resultado", "1.er lugar entre 25 equipos. Premio de OpenAI: US$ 1.000 en créditos de Codex para el equipo y 12 meses de ChatGPT Pro para cada integrante."],
        ],
        link: { href: "https://quebra-gelo.julioakamine.com", label: "abrir Quebra-Gelo" },
      },
    ],
  },
  process: {
    eyebrow: "Cómo trabajo",
    title: "Del requisito a producción, sin atajos",
    items: [
      {
        title: "Especificación antes del código",
        desc: "Cada entrega empieza con una especificación, y las decisiones quedan registradas en ADRs. Cuando alguien pregunta por qué algo es así, la respuesta está escrita.",
      },
      {
        title: "Agentes en el desarrollo, revisión en cada PR",
        desc: "Desarrollo con Claude Code y Cursor. En Enviagora, cada PR pasa por pruebas automatizadas (Vitest, Playwright) y revisión antes de salir a producción.",
      },
      {
        title: "Modelos elegidos por evaluación",
        desc: "Comparo modelos a ciegas con el mismo material y mido el costo de cada llamada. En el grabador de reuniones, cambiar de modelo por benchmark bajó la tasa de error de palabras del 13,4 % al 7,6 %.",
      },
      {
        title: "Producción con red de seguridad",
        desc: "Deploy a producción solo con aprobación, secretos fuera del código y detección de secretos en el CI. En la migración del Hub de RR. HH., ensayo general completo en QA y rollback listo antes del cutover.",
      },
    ],
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Lo que he estado construyendo",
    productsHeading: "Productos",
    aiHeading: "IA y automatización",
    openSite: "abrir sitio",
    viewRepo: "ver repositorio",
    tryDemo: "probar aquí abajo",
    noLink: "sin enlace público",
    products: {
      studoo: {
        status: "en especificación",
        description:
          "Aprender cualquier tema rápido, con IA, como Duolingo enseña un idioma. La persona dice lo que quiere aprender y la IA propone un plan; nada generado entra al plan sin un toque de aceptación. Todavía no hay app: existen la especificación y la marca.",
        role: "Hecho con el equipo Ponto e Vírgula, del que formo parte.",
      },
      "media-hub": {
        description:
          "Sistema interno para una empresa de medios: puntos de exhibición, biblioteca de contenidos, programación, producción, contratos y facturación, con asistente de IA.",
        role: "Desarrollo completo para un cliente.",
      },
      vellfinancing: {
        status: "código abierto",
        description:
          "Control de finanzas personales: movimientos, presupuesto, metas, inversiones e importación de extractos bancarios OFX/CSV.",
        role: "Desarrollo completo, desde cero.",
      },
    },
    olderHeading: "Proyectos anteriores (web)",
    showOlder: "ver proyectos anteriores",
    older: {
      cortex: {
        description:
          "Panel administrativo para que un servicio de catering gestione el día a día: pedidos, eventos y control de la operación en un solo lugar.",
        role: "Desarrollo front-end e integración de los flujos operativos.",
      },
      modus: {
        description: "Sistema de gestión de mantenimiento: órdenes de trabajo, activos y equipos operativos reunidos en un solo lugar.",
        role: "Desarrollo front-end y modelado de los flujos de mantenimiento.",
      },
      elos: {
        description:
          "Sistema de gestión con registro de usuarios, direcciones y establecimientos, mapa interactivo con Leaflet y búsqueda de código postal con la API ViaCEP. Datos en LocalStorage.",
        role: "Desarrollo front-end completo, desde cero.",
      },
    },
    ai: {
      "validador-registros-tabulares": {
        description:
          "Una API que recibe hoja de cálculos de pedidos y valida cada registro con reglas de negocio, señalando el campo inconsistente. Un agente relee solo los pedidos rechazados y devuelve campos estructurados en JSON para recuperar lo que se puede deducir.",
        role: "Back-end, agente de IA y servidor MCP.",
        highlights: [
          "5 de 10 pedidos rechazados recuperados por el agente, en el lote de ejemplo",
          "procesamiento en menos de 1 s",
          "13 verificaciones de extremo a extremo, incluido el MCP por JSON-RPC",
        ],
        diagramSteps: [
          "Hoja de cálculo de pedidos",
          "API (FastAPI)",
          "Reglas de negocio",
          "Agente relee los rechazados",
          "Registros recuperados",
        ],
      },
      "pipeline-tendencia-conteudo": {
        description:
          "Un pipeline que recibe datos de APIs externas, los filtra, los clasifica con un agente de LLM y ejecuta el flujo completo sin intervención humana.",
        role: "Pipeline, integración con el agente y deploy.",
        highlights: ["publicado en un contenedor en Fly.io"],
        diagramSteps: ["Señal externa (API)", "Ingesta", "Agente clasifica", "Flujo ejecutado", "Publicación"],
      },
    },
  },
  demo: {
    eyebrow: "Funciona en esta página",
    title: "Validador de pedidos con agente de IA",
    intro:
      "Edita la hoja de cálculo de ejemplo (datos ficticios), valídala con las reglas de negocio y pídele a la IA que recupere lo que pueda. Las reglas corren en tu navegador; solo los pedidos rechazados van al modelo.",
    editLabel: "Hoja de cálculo (CSV)",
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
    aiNote:
      "La IA solo corrige lo que se puede deducir de los demás campos del pedido. Cliente, SKU, ID y plazo nunca se inventan.",
    unavailable: "La recuperación con IA está desactivada en este sitio por ahora. La validación con reglas sigue funcionando.",
    rateLimited: "Se alcanzó el límite de uso. Vuelve a intentarlo en unos minutos.",
    error: "No fue posible comunicarse con la IA ahora.",
    reasons: {
      id_empty: "ID vacío",
      id_dup: "ID duplicado: {value}",
      client_empty: "cliente vacío",
      email: "correo inválido",
      qty: "cantidad inválida",
      unit: "precio unitario inválido",
      total: "el total no coincide",
      deadline: "plazo vencido o inválido",
      product_empty: "producto vacío",
      sku_empty: "SKU vacío",
    },
  },
  notes: {
    eyebrow: "Notas",
    title: "Lo que escribo sobre el trabajo",
    read: "leer el artículo (en portugués)",
    items: [
      {
        title: "Cómo migré la base de datos del Hub de RR. HH. a Google Cloud",
        summary:
          "Ensayo general completo en QA, validación por conteo y checksum y un cutover de unos 45 minutos, con rollback listo.",
        href: "/artigos/migracao-cloud-run/",
      },
      {
        title: "La salida de un modelo solo vale con el fragmento de origen",
        summary:
          "En el grabador de reuniones, el agente solo propone un compromiso si trae consigo el fragmento de la transcripción del que salió, y solo por encima de un umbral de confianza. Aun así, quien lo convierte en tarea es una persona. El ancla en el texto es lo que permite verificar si el modelo inventó algo.",
      },
      {
        title: "El punto de partida de Quebra-Gelo",
        summary:
          "En Quebra-Gelo, el punto de partida fue el momento en que decidimos que el juego podía tratarse del evento mismo, y no de una situación cualquiera. La regla del juego quedó así: la mascota solo crece cuando hablas de verdad con alguien ahí.",
      },
    ],
  },
  credentials: {
    eyebrow: "Formación",
    title: "Formación y premios",
    educationHeading: "Formación",
    awardsHeading: "Premios",
    education: [
      { title: "Análisis y Desarrollo de Sistemas", org: "IFSP · en curso" },
      { title: "Técnico en Desarrollo de Sistemas", org: "SENAI" },
      { title: "Dibujo técnico mecánico y mantenimiento electromecánico", org: "base industrial" },
    ],
    awards: [
      {
        year: "2026",
        title: "1.er lugar en el Hackathon OpenAI DevDay Exchange Community (São Paulo)",
        desc: "Entre 25 equipos, con Quebra-Gelo, hecho en pareja en un día.",
      },
      {
        year: "2026",
        title: "Embajador SAGA SENAI, Proyectos de Innovación",
        desc: "Único alumno seleccionado por desempeño para representar a la institución, presentar proyectos y orientar a otros alumnos.",
      },
      {
        title: "Olimpiada Brasileña de Astronomía y Astronáutica",
        desc: "Una medalla de oro y una de plata.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "¿Tienes un sistema que llevar a producción?",
    body: "¿O un flujo de IA que necesita control antes de convertirse en una acción? Escríbeme por correo o por LinkedIn.",
  },
  footer: {
    source: "código fuente",
  },
}
