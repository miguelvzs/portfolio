# Portfólio Miguel Vaz — Alinhamento de Conteúdo ao Currículo

Segundo prompt (rode **depois** que o redesign do `IMPROVE.md` estiver concluído e em produção). O visual/stack já está pronto (React + TS + Tailwind + shadcn). **Este trabalho é de conteúdo**, não de design: alinhar o que o portfólio diz ao currículo oficial do Miguel.

## Mandato

Você tem autonomia para executar. O eixo é **híbrido: "Desenvolvedor Fullstack Júnior · Foco em Inteligência Artificial"** — fullstack web como base, com destaque para IA/automação. **A fonte de verdade é o currículo Enviagora Fullstack**, cujos dados estão transcritos abaixo (não precisa abrir o PDF). Trabalhe até o conteúdo do site refletir esse currículo com precisão e vender bem o candidato.

Quase todo o conteúdo do site está centralizado em **`src/lib/content.ts`** — comece por ele. Componentes novos (experiência, prêmios) puxam desse mesmo arquivo.

**Regras:**
1. **Conteúdo verídico.** Use só o que está no currículo abaixo. Não invente projeto, skill, métrica, cargo ou data. Onde o site atual afirma algo que o currículo não sustenta, corrija para o currículo (ver §Divergências).
2. Textos em **pt-BR**, tom humano e confiante, sem tells de IA, sem encher linguiça. Reescreva o texto, preserve o fato.
3. Commits pt-BR, conventional (`feat:`/`fix:`/`refactor:`/`content:`), escopados. **Nunca** trailer `Co-Authored-By: Claude`.
4. Não quebrar build/deploy. Branch próprio.

---

## Dados canônicos (currículo Enviagora Fullstack — fonte de verdade)

**Identidade**
- Nome: Miguel Vaz de Souza
- Título/role: **Desenvolvedor Fullstack Júnior — Foco em Inteligência Artificial**
- Local: Extrema/MG · disponibilidade presencial período integral
- Contato: (35) 99968-9959 · miguelsouza7970@gmail.com · linkedin.com/in/miguelvzs · github.com/miguelvzs
  (o `content.ts` já tem email/LinkedIn/GitHub corretos; o **role** está desatualizado — trocar.)

**Resumo (base para o Hero + Sobre — reescrever em 1ª pessoa, não copiar literal)**
Desenvolvo aplicações fullstack: front-end em JavaScript e React, back-end em Python (FastAPI, Flask) e Node.js, com banco relacional e APIs REST em JSON. Construo, testo e evoluo agentes de IA e fluxos de orquestração: escrevo e itero prompts medindo o resultado, integro LLMs a sistemas reais pela API da Anthropic (Claude) e implementei um servidor MCP para expor ferramentas ao agente. Uso Claude e GitHub Copilot no dia a dia, versiono em Git/GitHub, cubro o que escrevo com testes automatizados e publico em nuvem com contêineres. Técnico em Desenvolvimento de Sistemas (SENAI) e cursando ADS no IFSP.

**Skills reais (substituir os `skillGroups` atuais — que listam .NET/SQL Server/TypeScript como core, o que o currículo NÃO sustenta):**
- **Frontend:** JavaScript, React, HTML, CSS, Leaflet.js, consumo de APIs REST, interfaces responsivas.
- **Backend & dados:** Python (FastAPI, Flask, Pandas, NumPy), Node.js, C, C#, APIs REST, JSON, webhooks, JWT, SQL (MySQL, PostgreSQL), Redis.
- **Inteligência artificial:** agentes de IA e orquestração, API da Anthropic (Claude), GitHub Copilot, engenharia e iteração de prompts, extração estruturada em JSON, servidores MCP, automações em n8n.
- **Qualidade & entrega:** testes automatizados (integração e ponta a ponta), TestClient do FastAPI, Jest, Git/GitHub, Docker, deploy em nuvem (Render, Fly.io), documentação técnica.

**Experiência (adicionar seção — o site atual não tem):**
- **Soft Film — Assistente de P&D** (jan/2026 – atual). Revisa/atualiza componentes de receitas, solicita análises ao Controle de Qualidade, apontamento e reclassificação de ordens de produção, Excel diário para coletar/validar/organizar dados — rotina manual que motivou automatizar validações em Python.
- **Hutchinson — Aprendiz** (ago/2024 – dez/2025) e **Panasonic do Brasil — Aprendiz** (ago/2023 – jul/2024). Rotinas administrativas em ambiente industrial/corporativo, adaptação rápida a processos e equipes.

**Formação**
- Análise e Desenvolvimento de Sistemas — IFSP (fev/2026 – dez/2028). **2º semestre em ago/2026.**
- Técnico em Desenvolvimento de Sistemas — SENAI CFP Janez Hlebanja (mar/2024 – ago/2025).
- FAEX Tech — Faculdade de Extrema (abr/2024 – nov/2025).

**Prêmios (adicionar seção — forte, usar):**
- **Embaixador SAGA SENAI — Projetos de Inovação** (2026 – atual): único aluno selecionado por desempenho para representar a instituição, apresentar projetos e mentorar outros alunos.
- **Olimpíada Brasileira de Astronomia e Astronáutica** — Ouro (2021) e Prata (2022).

**Idiomas:** Português nativo · Inglês avançado (leitura, escrita, conversação, documentação técnica).

---

## Projetos — dois grupos, dois modos de demonstração

Manter os melhores projetos **na forma como já são demonstrados**: cada web app tem seu deploy de demonstração separado (`?demo` read-only) exibido no card estilo janela de browser (chrome mock + barra de URL + "abrir site"). Preservar esse padrão para os web apps. Os projetos de IA não têm UI web — para eles, usar **diagrama de arquitetura + link do repositório** (decisão do dono), NÃO iframe.

### Grupo A — Web (preview embutido / deploy demo, padrão atual)
Manter os 4 já no `content.ts`, com seus `demoUrl`/`displayUrl`:
- **Cortex** — painel admin de buffet (`cortex-demo-eight.vercel.app`).
- **MV Financing** — finanças pessoais, JWT, sync multi-dispositivo, relatórios Excel/PDF (`mvfinancing.vercel.app/?demo`).
- **Modus** — gestão de manutenção / ordens de serviço (`plataformamodus.vercel.app/?demo`).
- **ELOS** — cadastro com mapa Leaflet + ViaCEP (`elosgestao.netlify.app`).

### Grupo B — IA / Automação (destaque do eixo híbrido; demo = diagrama + repo)
Adicionar como um bloco/faixa própria, visualmente distinto do Grupo A (sem iframe — card com diagrama de arquitetura e botão "ver no GitHub"):
- **Validador de Pedidos** — Python, FastAPI, Pandas, agente de LLM (API da Anthropic), **servidor MCP**, n8n, deploy em nuvem. API REST que ingere planilhas de pedidos e valida cada registro por regra de negócio apontando o campo inconsistente; agente de LLM relê rejeitados e devolve campos estruturados; prompts iterados contra lote real → **5 de 10 pedidos recuperados, processamento < 1s**; **13 testes automatizados** (fluxo e2e, endpoints incl. HTTP 422, servidor MCP via JSON-RPC).
- **Radar de Tendência** — Python, NumPy, APIs HTTP, agente de LLM, Docker, deploy na nuvem (Fly.io). Pipeline autônomo que ingere dados de APIs externas, filtra/classifica com agente de LLM e executa o fluxo completo sem intervenção humana, em contêiner.

> Para o Grupo B você precisa de dois ativos por projeto: (1) um **diagrama de arquitetura** — gere um SVG/diagrama limpo no estilo do site a partir da descrição acima; (2) o **link do repositório GitHub**. Se não achar a URL exata do repo em `github.com/miguelvzs`, deixe o botão apontando para o perfil e **sinalize no resumo final** que falta a URL exata.

Estender o tipo `Project` (ou criar um segundo tipo) em `content.ts` para suportar os dois modos: `kind: "web"` (demoUrl/displayUrl, preview) vs `kind: "ai"` (repoUrl, diagrama, sem live demo).

---

## Divergências a reconciliar (o site atual afirma coisas fora do currículo)

Corrigir para o currículo; onde houver dúvida de fato, use o currículo e sinalize no resumo final:
- **role** `"Desenvolvedor C# · .NET · TypeScript"` → `"Desenvolvedor Fullstack Júnior · Foco em IA"`.
- **`skillGroups`** listam `.NET`, `SQL Server`, `React`/`TypeScript` como core — o currículo tem JS/React/Python/Node como base e C# secundário; **não há .NET nem SQL Server**. Substituir pelos 4 grupos reais acima.
- **`aboutParagraphs`** falam "C#, .NET e TypeScript" → reescrever para o eixo fullstack + IA.
- **ELOS vs "Projeto de Extensão (ONG Extrema, React/Flask)":** o currículo cita um projeto de extensão do IFSP em React/Flask para uma ONG de Extrema; o site tem ELOS como JS/Leaflet/ViaCEP/LocalStorage. Podem ser o mesmo projeto em fases diferentes ou dois projetos. **Não fundir às cegas** — mantenha o ELOS como está (tem demo ao vivo) e, no resumo final, pergunte ao dono se o Projeto de Extensão é o mesmo ELOS ou um quinto projeto a adicionar.
- **`timeline`**: manter só o que for verídico; ajustar datas ao currículo (ADS desde fev/2026; técnico SENAI 2024–2025).

---

## Definition of Done

- Hero + Sobre refletem o resumo do currículo, role = fullstack júnior / foco IA, em pt-BR humano.
- `skillGroups` = os 4 grupos reais; zero skill inventada.
- Seções **Experiência**, **Formação** e **Prêmios** existem e batem com o currículo.
- Projetos: Grupo A (4 web, preview/deploy demo preservado) + Grupo B (Validador, Radar) com diagrama + repo, visualmente separados.
- Nenhuma afirmação fora do currículo; divergências (ELOS/Extensão, URLs de repo faltantes) sinalizadas no resumo final.
- Build passa, deploy limpo, todos os links funcionam.
- Ao terminar: resumo do que mudou + lista de pendências que dependem do dono (URLs de repo, dúvida ELOS/Extensão, foto/avatar real se ainda for o círculo gradiente).
