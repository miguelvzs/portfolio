// Fontes, e nada além delas:
// - linkedin-2026-11.md (Sobre, Experiência na Enviagora, base industrial, stack, hackathon, Morada);
// - o próprio site de outubro (9383801): frase da capa, títulos, MV Financing, Radar, papel no Quebra-Gelo;
// - README público de miguelvzs/validador-registros-tabulares (5 de 10 recuperados, menos de 1 s, 13 verificações);
// - documentos do Morada, da Vell e do Studoo, já levantados em Shared/portfolio (conteúdo aprovado como fonte).
import type { AiProjectCopy, ArcKey, CaseCopy, ExperienceCopy, NoteCopy, ProductCopy } from "@/lib/copy-types"
import type { ReasonCode } from "@/lib/validator"

export const pt = {
  meta: {
    title: "Miguel Vaz · Desenvolvedor Full Stack · AI Engineering",
    description:
      "Miguel Vaz, desenvolvedor full stack: Google Cloud, PostgreSQL e TypeScript, com IA aplicada a sistemas que vão para produção. Casos, projetos e contato.",
    ogDescription:
      "Desenvolvedor full stack. Levo sistemas à produção, com IA integrada onde ela resolve problema de verdade.",
    twitterDescription: "Desenvolvedor full stack · AI Engineering.",
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
    flow: "Fluxo de {name}",
    mine: "decisão minha",
  },
  nav: {
    about: "Sobre",
    experience: "Experiência",
    cases: "Casos",
    projects: "Projetos",
    notes: "Notas",
    credentials: "Formação",
    contact: "Contato",
  },
  profile: {
    role: "Desenvolvedor Full Stack · AI Engineering",
  },
  hero: {
    subtitle:
      "Levo sistemas à produção de ponta a ponta: arquitetura, nuvem, segurança e deploy, com IA integrada onde ela resolve problema de verdade.",
    available: "Estou aberto a novos projetos.",
    contactCta: "Entrar em contato",
    projectsCta: "Ver projetos",
    cvCta: "Baixar CV",
    cvHref: "/cv/miguel-vaz-cv-pt.pdf",
  },
  about: {
    eyebrow: "Sobre",
    title: "Quem está por trás do código",
    paragraphs: [
      "Sou desenvolvedor full stack na Enviagora. Uso o Google Cloud com Terraform em todos os projetos, conduzi a migração do Hub de RH para ele e faço parte do time que constrói o EnviaMind, a plataforma única que reúne RH, operação, portaria, financeiro e diretoria.",
      "Em IA, construo fluxos feitos para produção. O que o modelo extrai passa por validação, limiar de confiança ou aprovação de uma pessoa antes de virar ação. Não fico preso a um provedor (Claude, Gemini e GPT via Vertex AI e OpenRouter), meço o custo de cada chamada e escolho o modelo por avaliação.",
      "Antes do software, passei pela indústria: técnico em Desenvolvimento de Sistemas pelo SENAI, desenho técnico mecânico, manutenção eletromecânica e passagens por Panasonic, Hutchinson e P&D na Soft Film. Fora do trabalho, construo o Morada e faço parte do time Ponto e Vírgula, que está especificando o Studoo.",
    ],
    stackLabel: "Stack",
    stack:
      "TypeScript, Node.js, React, Next.js, Fastify, PostgreSQL, Prisma, Zod, Python, Google Cloud, Terraform, Docker, GitHub Actions, Vertex AI e AI SDK.",
  },
  experience: {
    eyebrow: "Experiência",
    title: "Onde já botei a mão",
    items: [
      {
        period: "atual",
        role: "Desenvolvedor Full Stack",
        org: "Enviagora",
        desc: "Construo e levo à produção os sistemas internos da empresa, da infraestrutura aos fluxos com IA.",
        highlights: [
          "Plataforma no Google Cloud via Terraform: Cloud Run, Cloud SQL com IP privado, Secret Manager, Load Balancer e Cloud DNS. CI/CD no GitHub Actions com Workload Identity Federation, secret scanning e deploy em produção só com aprovação. Monorepo com cerca de 20 sistemas importados com histórico.",
          "Dados em PostgreSQL por camadas (raw, trusted e refined) em cada setor, chave universal de pessoa, RLS, RBAC calculado no servidor e outbox para as integrações com ClickUp e ZapSign.",
          "Migração do Hub de RH: ensaio completo em QA, validação por contagem e checksum e cutover de cerca de 45 minutos, com rollback pronto.",
          "Gravador de reuniões: PWA local-first que envia o áudio em partes, com confirmação de recebimento, sem perder nada. Transcrição em streaming (Gemini Live) e final com diarização; um segundo modelo revisa contra uma base de conhecimento; um agente extrai compromissos a cada 45 s, ancorados no trecho de origem, que só viram tarefa no ClickUp depois de aprovados.",
          "Admissão digital: OCR com o texto do PDF e fallback para modelos de visão via OpenRouter, extração por tipo de documento, normalização determinística e cruzamento de identidade, com avaliação cega entre modelos.",
          "Portaria: leitura de placa por visão (Claude no Vertex AI), com confiança mínima e confirmação humana.",
          "Auditoria 5S: app mobile com câmera e QR Code, nota calculada no servidor e antifraude.",
        ],
      },
      {
        role: "Assistente de P&D",
        org: "Soft Film",
        desc: "Pesquisa e desenvolvimento em ambiente industrial.",
      },
      {
        role: "Aprendiz",
        org: "Hutchinson e Panasonic",
        desc: "Primeiras passagens pela indústria, em rotinas administrativas.",
      },
    ] as ExperienceCopy[],
  },
  cases: {
    eyebrow: "Casos",
    title: "Sistemas que projetei e construí",
    subtitle:
      "Cada caso conta o problema, a restrição, a decisão e onde ele está hoje. Nenhum dado de cliente.",
    arcLabels: {
      problema: "O problema",
      restricao: "A restrição",
      decisao: "A decisão",
      erro: "O que deu errado",
      fora: "O que ficou de fora",
      resultado: "Onde está",
    } as Record<ArcKey, string>,
    items: [
      {
        slug: "vell",
        title: "Vell, minha agência de sites",
        intro:
          "Cada prévia de site passa pelo mesmo fluxo, com um time de agentes de IA e quatro pontos em que eu decido. Nada sai 100% automático.",
        flowLabel: "o fluxo de uma prévia",
        flow: [
          { label: "Pesquisa e dossiê" },
          { label: "Alvo e direção", mine: true },
          { label: "Construção" },
          { label: "Rascunho", mine: true },
          { label: "QA automático" },
          { label: "Revisão independente" },
          { label: "Versão final", mine: true },
          { label: "Publicação" },
          { label: "Envio", mine: true },
        ],
        arc: [
          ["problema", "Fazer uma prévia de site sob medida para cada negócio, rápido o bastante para ir no primeiro contato e sem cara de template."],
          ["restricao", "Nada sai sem mim: nenhuma prévia vai ao ar nem chega a alguém sem a minha aprovação. E nada é inventado: preço, nota, depoimento, telefone e horário só com fonte."],
          ["decisao", "Agentes com papéis separados, porque quem constrói não revisa. O revisor dá nota por critério e só aprova com todos em 8,5 ou mais; o QA reprova sozinho o que não passa em texto de 16 px, alvos de 44 px, contraste AA e LCP abaixo de 2,5 s."],
          ["erro", "A primeira versão autoral de uma prévia saiu com cara de IA genérica: serifa editorial, fundo off-white, cards previsíveis. Reprovei. Virou regra: a versão autoral nasce de referências reais e da identidade do cliente, com a direção aprovada antes do código."],
          ["resultado", "Em uso. As regras ficam num arquivo único que todos os agentes leem antes de começar, e cada reprovação minha vira uma linha nova. As prévias vão ao ar com noindex, só para quem tem o link."],
        ],
        link: { href: "https://velldigital.vercel.app", label: "site da Vell" },
      },
      {
        slug: "morada",
        title: "Morada, app para imigrantes",
        intro:
          "Dinheiro, documentos e prazos para quem mora num país novo. Produto meu: app, API, banco e deploy, em português, espanhol e inglês.",
        flowLabel: "as camadas do app",
        flow: [
          { label: "App · Expo" },
          { label: "Cache · TanStack Query" },
          { label: "Contrato · Zod" },
          { label: "API · Next.js" },
          { label: "Banco · PostgreSQL" },
        ],
        arc: [
          ["problema", "Quem chega a um país novo usa o celular na rua, muitas vezes com uma mão e com dados móveis limitados. Precisa saber quanto ganhou e gastou, quem ainda deve e qual prazo de documento vence."],
          ["restricao", "Privacidade e rede ruim. O app nunca fala com o banco nem com um provedor externo e não carrega segredo; com rede ruim, mostra a última leitura. E três idiomas desde o primeiro dia."],
          ["decisao", "Saldo, totais e status são calculados só no servidor, para a tela inicial, as finanças, o relatório e o PDF sempre baterem. O saldo mostra só o que é real: o que está a receber ou a pagar nunca entra nele. O mesmo schema Zod valida o formulário no app e de novo na API."],
          ["fora", "Uma versão web na v1, porque só o app nativo dá lembrete com o app fechado. O login só por código no e-mail virou senha, para entrar todo dia sem abrir o e-mail. E no dia da contratação o servidor da UE estava esgotado: escolhi o Canadá, com cópia de segurança na UE, e aceitei cerca de 100 ms a mais por chamada."],
          ["resultado", "Primeiro build no TestFlight em 26/10/2026 e beta público aberto. 345 testes na API e uma auditoria de segurança sem achado crítico, alto ou médio. Ainda não foi validado em uso real: esse é o próximo passo."],
        ],
        link: { href: "https://getmorada.app", label: "getmorada.app" },
      },
      {
        slug: "quebra-gelo",
        title: "Quebra-Gelo, 1º lugar num hackathon da OpenAI",
        intro:
          "Hackathon OpenAI DevDay Exchange Community, em São Paulo, organizado pelos OpenAI Codex Ambassadors. Feito em dupla com Julio Akamine.",
        arc: [
          ["problema", "A proposta: um pet virtual que só evolui quando você conversa com alguém de verdade no evento."],
          ["restricao", "Um dia, em dupla."],
          ["decisao", "Multiplayer em tempo real por WebSocket, o pet criado por IA multimodal com saída estruturada e um telão ao vivo para a organização acompanhar o evento. Meu papel: desenvolvimento em dupla, do produto ao deploy."],
          ["resultado", "1º lugar entre 25 equipes. Prêmio da OpenAI: US$ 1.000 em créditos Codex para a equipe e 12 meses de ChatGPT Pro para cada integrante."],
        ],
        link: { href: "https://quebra-gelo.julioakamine.com", label: "abrir o Quebra-Gelo" },
      },
    ] as CaseCopy[],
  },
  process: {
    eyebrow: "Como trabalho",
    title: "Do requisito à produção, sem atalho",
    items: [
      {
        title: "Especificação antes do código",
        desc: "Cada entrega começa por uma especificação, e as decisões ficam registradas em ADRs. Quando alguém pergunta por que algo é assim, a resposta está escrita.",
      },
      {
        title: "Agentes no desenvolvimento, revisão em todo PR",
        desc: "Desenvolvo com Claude Code e Cursor. Nenhuma mudança vai ao ar sem teste automatizado (Vitest, Playwright) e revisão no PR.",
      },
      {
        title: "Modelo escolhido por avaliação",
        desc: "Comparo modelos às cegas no mesmo material e meço o custo de cada chamada. No gravador de reuniões, a troca de modelo por benchmark levou o erro de palavras de 13,4% para 7,6%.",
      },
      {
        title: "Produção com rede de segurança",
        desc: "Deploy em produção só com aprovação, segredos fora do código e varredura no CI. Na migração do Hub de RH, ensaio completo em QA e rollback pronto antes do cutover.",
      },
    ],
  },
  projects: {
    eyebrow: "Projetos",
    title: "O que tenho construído",
    productsHeading: "Produtos",
    aiHeading: "IA & automação",
    openSite: "abrir site",
    viewRepo: "ver repositório",
    tryDemo: "testar aqui embaixo",
    noLink: "sem link público",
    products: {
      studoo: {
        status: "em especificação",
        description:
          "Aprender qualquer assunto rápido, com IA, do jeito que o Duolingo ensina uma língua. A pessoa diz o que quer aprender e a IA propõe um plano; nada gerado entra no plano sem um toque de aceite. Ainda não há app: existe a especificação e a marca.",
        role: "Feito com o time Ponto e Vírgula, do qual faço parte.",
      },
      vellfinancing: {
        status: "código aberto",
        description:
          "Controle financeiro pessoal: lançamentos, orçamento, metas, investimentos e importação de extrato bancário OFX/CSV.",
        role: "Desenvolvimento completo, do zero.",
      },
    } as Record<"studoo" | "vellfinancing", ProductCopy>,
    ai: {
      "validador-registros-tabulares": {
        description:
          "API que ingere planilhas de pedidos e valida cada registro por regra de negócio, apontando o campo inconsistente. Um agente relê só os pedidos rejeitados e devolve campos estruturados em JSON para recuperar o que dá para deduzir.",
        role: "Back-end, agente de IA e servidor MCP.",
        highlights: [
          "5 de 10 pedidos rejeitados recuperados pelo agente, no lote de exemplo",
          "processamento em menos de 1 s",
          "13 verificações de ponta a ponta, incluindo o MCP via JSON-RPC",
        ],
        diagramSteps: [
          "Planilha de pedidos",
          "API (FastAPI)",
          "Regra de negócio",
          "Agente relê os rejeitados",
          "Registros recuperados",
        ],
      },
      "pipeline-tendencia-conteudo": {
        description:
          "Pipeline que ingere dados de APIs externas, filtra, classifica com um agente de LLM e executa o fluxo completo sem intervenção humana, publicado em contêiner.",
        role: "Pipeline, integração com o agente e deploy.",
        highlights: ["execução autônoma, sem intervenção humana", "publicado em contêiner na Fly.io"],
        diagramSteps: ["Sinal externo (API)", "Ingestão", "Agente classifica", "Fluxo executado", "Publicação"],
      },
    } as Record<"validador-registros-tabulares" | "pipeline-tendencia-conteudo", AiProjectCopy>,
  },
  demo: {
    eyebrow: "Roda nesta página",
    title: "Validador de pedidos com agente de IA",
    intro:
      "Edite a planilha de exemplo (dados fictícios), valide pelas regras de negócio e peça para a IA recuperar o que dá. As regras rodam no seu navegador; só os pedidos rejeitados vão para o modelo.",
    editLabel: "Planilha (CSV)",
    validate: "Validar",
    recover: "Recuperar com IA",
    recovering: "Recuperando…",
    reset: "Restaurar exemplo",
    valid: "válidos",
    rejected: "rejeitados",
    recovered: "recuperados pela IA",
    order: "Pedido",
    reasonsCol: "Motivos",
    corrections: "Correções aplicadas",
    noCorrections: "A IA não encontrou correção segura para os pedidos restantes.",
    aiNote:
      "A IA só corrige o que dá para deduzir dos outros campos do pedido. Cliente, SKU, ID e prazo nunca são inventados.",
    unavailable: "A IA está indisponível agora. A validação continua funcionando.",
    rateLimited: "Limite de uso atingido. Tente de novo em alguns minutos.",
    error: "Não foi possível falar com a IA agora.",
    reasons: {
      id_empty: "ID vazio",
      id_dup: "ID duplicado: {value}",
      client_empty: "cliente vazio",
      email: "e-mail inválido",
      qty: "quantidade inválida",
      unit: "valor unitário inválido",
      total: "total não confere",
      deadline: "prazo vencido ou inválido",
      product_empty: "produto vazio",
      sku_empty: "SKU vazio",
    } satisfies Record<ReasonCode, string>,
  },
  notes: {
    eyebrow: "Notas",
    title: "O que eu escrevo sobre o trabalho",
    read: "ler o artigo",
    items: [
      {
        title: "Como migrei o banco do Hub de RH para o Google Cloud",
        summary:
          "Ensaio completo em QA, validação por contagem e checksum e um cutover de cerca de 45 minutos, com rollback pronto.",
        href: "/artigos/migracao-cloud-run/",
      },
    ] as NoteCopy[],
  },
  credentials: {
    eyebrow: "Formação",
    title: "Formação & prêmios",
    educationHeading: "Formação",
    awardsHeading: "Prêmios",
    education: [
      { title: "Técnico em Desenvolvimento de Sistemas", org: "SENAI" },
      { title: "Desenho técnico mecânico e manutenção eletromecânica", org: "base industrial" },
    ],
    awards: [
      {
        year: "2026",
        title: "1º lugar no Hackathon OpenAI DevDay Exchange Community (São Paulo)",
        desc: "Entre 25 equipes, com o Quebra-Gelo, feito em dupla em um dia.",
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Tem um sistema para levar à produção?",
    body: "Ou um fluxo de IA que precisa de controle antes de virar ação? Me escreva pelo e-mail ou pelo LinkedIn.",
  },
  footer: {
    source: "código-fonte",
  },
}
