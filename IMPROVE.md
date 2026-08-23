# Portfólio Miguel Vaz — Frontend Redesign Brief

Paste this whole file to Claude Code (or run it from the repo root). It is a work order for a **major frontend redesign**.

## Mandate — full autonomy, run to completion

You have **full autonomy**. You decide the stack, the architecture, the component structure, and the tradeoffs — you are the senior frontend engineer + designer on this. **Do not stop to ask for approval or wait for sign-off.** Make the best call, document why in the commit body, and keep going.

**Work until the portfolio is a certified, professional-grade site — not an amateur one.** This is the personal portfolio of a developer applying for jobs; it has to look like it was built by someone you'd hire. This brief is the starting point and priority guide, not a ceiling: if you spot something below the professional bar that isn't listed here, fix it too. Do not stop at "the tasks are checked off." Stop only when the **Definition of Done (§7)** is genuinely met, or when you hit a true blocker you physically cannot resolve (a missing asset only I can provide, a paid account/secret, a real design decision that has no defensible default). If blocked on one thing, work on everything else meanwhile — never idle.

---

## 0. Project context (so you don't re-derive it)

**What it is:** the personal portfolio of **Miguel Vaz** — a developer focused on C#, .NET, TypeScript, and web. UI language is **pt-BR**; keep all copy in Portuguese unless I say otherwise. Deployed at `miguelvzs.dev`.

**Current state:**
- A single `index.html` (~865 lines, ~38 KB) — static, vanilla, **no build step**, no framework, no JS beyond one `<script>`. Inline `<style>` with CSS design tokens (`:root`), dark theme, `Geist` + `Geist Mono` fonts via Google Fonts.
- Sections (keep all of them): `#hero`, `#about`, `#skills`, `#projects`, `#contact`. Anchor nav between them.
- Projects link to live demos: Cortex (`cortex-demo-eight.vercel.app`), MV Financing (`mvfinancing.vercel.app/?demo`), Modus (`plataformamodus.vercel.app/?demo`), Elos Gestão (`elosgestao.netlify.app`). **These links and the project facts must stay accurate — don't invent projects or break links.**
- Full OG / Twitter / LinkedIn social meta already present (`og:image` → `og-image.png`). Preserve and keep it correct through the redesign.

**Guardrails — the only things you must NOT do freely:**
1. **Content stays truthful.** Don't fabricate projects, jobs, skills, testimonials, or metrics. Keep the real projects and their real demo links. If you restructure copy, keep the facts; improve the writing, don't invent achievements.
2. **Never** add a `Co-Authored-By: Claude` trailer. Commit messages in Portuguese, conventional style (`feat:`, `fix:`, `chore:`, `refactor:`, `style:`, `docs:`), scoped.
3. Keep it **deployable** the whole way (currently static; if you add a build, make sure the production build deploys clean on Vercel/Netlify). Work on a branch; don't leave the tree broken between commits.
4. Preserve SEO/social meta and the `pt-BR` language.

**The stack is fixed by the base prompt (§1): React + TypeScript + Tailwind + shadcn/ui + framer-motion + lucide-react.** Everything else — build tool (Vite recommended), component breakdown, motion tuning, theme details — is your call; pick what produces a genuinely professional result and justify it in the commit.

**Before you start:** create a branch (e.g. `git checkout -b redesign/ui-ux`). Commit continuously. No pausing for review.

---

## 1. Design source — base frontend prompt (READ FIRST, THIS DRIVES EVERYTHING)

**The whole site's style and UI/UX is structured AROUND the base prompt below.** It is a 21st.dev component-integration prompt that fixes the stack (shadcn + Tailwind + TypeScript) and ships a `HeroBlock` component. That HeroBlock is the **design anchor**: extract its visual language — the animated grid background, framer-motion enter/hover motion, the type scale (`text-5xl`/`md:text-7xl` heading, `text-xl`/`md:text-2xl` lead), shadcn tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `bg-secondary`, `primary`), rounded-full pill controls, `Button` variants — and apply that same language to **every** section (about, skills, projects, contact, nav, footer). One coherent system, not a hero bolted onto the old page.

This **replaces the vanilla stack**. Stack is now decided (see §2) — no longer your call: **React + TypeScript + Tailwind + shadcn/ui + framer-motion + lucide-react**, via the shadcn project structure. Migrate the existing single `index.html` into this app; carry the real content across (don't lose the projects/links/meta).

### Base prompt (source of truth)

> You are given a task to integrate an existing React component in the codebase
>
> The codebase should support:
> - shadcn project structure
> - Tailwind CSS
> - Typescript
>
> If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.
>
> Determine the default path for components and styles.
> If default path for components is not `/components/ui`, provide instructions on why it's important to create this folder
> Copy-paste this component to `/components/ui` folder:
> ```tsx
> // hero-block-shadcnui.tsx
> import { Button } from "@/components/ui/button";
> import { motion } from "framer-motion";
> import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
>
> export function HeroBlock() {
>   return (
>     <section className="relative flex items-center justify-center overflow-hidden bg-background min-h-screen w-full">
>       {/* Animated background grid */}
>       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
>
>       <div className="relative z-10 mx-auto max-w-5xl text-center">
>         <motion.div
>           initial={{ opacity: 0, y: 20 }}
>           animate={{ opacity: 1, y: 0 }}
>           transition={{ duration: 0.6 }}
>         >
>           <motion.div
>             initial={{ scale: 0 }}
>             animate={{ scale: 1 }}
>             transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
>             className="mb-6 inline-block"
>           >
>             <div className="mx-auto h-24 w-24 rounded-full border-4 border-background bg-gradient-to-br from-primary to-muted shadow-lg" />
>           </motion.div>
>
>           <motion.h1
>             initial={{ opacity: 0, y: 20 }}
>             animate={{ opacity: 1, y: 0 }}
>             transition={{ delay: 0.3, duration: 0.6 }}
>             className="mb-6 text-5xl font-bold text-foreground md:text-7xl"
>           >
>             Full Stack Developer
>           </motion.h1>
>
>           <motion.p
>             initial={{ opacity: 0, y: 20 }}
>             animate={{ opacity: 1, y: 0 }}
>             transition={{ delay: 0.4, duration: 0.6 }}
>             className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground md:text-2xl"
>           >
>             Crafting beautiful, performant web applications with modern
>             technologies. Passionate about clean code and exceptional user
>             experiences.
>           </motion.p>
>
>           <motion.div
>             initial={{ opacity: 0, y: 20 }}
>             animate={{ opacity: 1, y: 0 }}
>             transition={{ delay: 0.5, duration: 0.6 }}
>             className="mb-12 flex flex-wrap justify-center gap-4"
>           >
>             <Button size="lg" className="gap-2">
>               <Mail className="h-4 w-4" />
>               Get in Touch
>             </Button>
>             <Button size="lg" variant="outline" className="gap-2">
>               View Projects
>               <ArrowDown className="h-4 w-4" />
>             </Button>
>           </motion.div>
>
>           <motion.div
>             initial={{ opacity: 0 }}
>             animate={{ opacity: 1 }}
>             transition={{ delay: 0.6, duration: 0.6 }}
>             className="flex justify-center gap-4"
>           >
>             {[
>               { icon: Github, href: "#" },
>               { icon: Linkedin, href: "#" },
>               { icon: Mail, href: "#" },
>             ].map((social, index) => (
>               <motion.a
>                 key={index}
>                 href={social.href}
>                 whileHover={{ scale: 1.1, y: -2 }}
>                 whileTap={{ scale: 0.95 }}
>                 className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
>               >
>                 <social.icon className="h-5 w-5" />
>               </motion.a>
>             ))}
>           </motion.div>
>         </motion.div>
>       </div>
>
>       {/* Scroll indicator */}
>       <motion.div
>         initial={{ opacity: 0 }}
>         animate={{ opacity: 1, y: [0, 10, 0] }}
>         transition={{
>           opacity: { delay: 1, duration: 0.6 },
>           y: { delay: 1.5, duration: 1.5, repeat: Infinity },
>         }}
>         className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
>       >
>         <ArrowDown className="h-6 w-6 text-muted-foreground" />
>       </motion.div>
>     </section>
>   );
> }
> ```
> ```tsx
> // demo.tsx
> import { HeroBlock } from "@/components/ui/hero-block-shadcnui"
>
> export default function Demo() {
>   return (
>     <div className="flex min-h-screen items-center justify-center bg-background p-8">
>       <HeroBlock />
>     </div>
>   )
> }
> ```
>
> Install NPM dependencies: `framer-motion`
>
> Implementation Guidelines: analyze component structure + dependencies; review args/state; install required providers/hooks. Copy the code into the correct dirs, install deps, use `lucide-react` for icons/logos.

### Adapt it to THIS portfolio (don't ship the placeholder)

The HeroBlock ships with placeholder content — replace it with Miguel's real data (guardrail §0: content stays truthful):
- Heading + lead → real pt-BR copy (Miguel Vaz, C#/.NET/TypeScript/web). Not "Full Stack Developer" / the English placeholder paragraph.
- The gradient circle → Miguel's real avatar/photo asset (or a tasteful monogram if no photo). **Do not** use random Unsplash stock for the identity of a real person — that misrepresents. Stock is only OK for neutral decorative backgrounds, never as "this is me."
- The three social links (`href="#"`) → real GitHub / LinkedIn / email (`mailto:`) URLs. Wire the two buttons ("Get in Touch" → contact/`mailto`, "View Projects" → `#projects`).
- Then build the rest of the site (about, skills, projects grid, contact, nav, footer) in the **same** visual language, reusing shadcn primitives (`Button`, `Card`, etc.) and the same motion + token vocabulary.

---

## 2. Frontend rewrite — stack + structure (fixed)

- [ ] **Scaffold the shadcn stack.** Vite + React + TypeScript. Install + init Tailwind and shadcn (`npx shadcn@latest init`). Confirm the components path is **`/components/ui`** (per the base prompt; alias `@/components/ui`). Add the shadcn primitives the design needs (`button`, `card`, …) via `npx shadcn@latest add`. Install `framer-motion` and `lucide-react`.
- [ ] **Drop in the anchor.** Put `hero-block-shadcnui.tsx` in `/components/ui`, then adapt it to real content per §1. Everything else copies its visual language.
- [ ] Rebuild every section (`hero`, `about`, `skills`, `projects`, `contact`) in that language. Migrate the real content + the four project links + all SEO/OG meta out of the old `index.html`.
- [ ] Proper project structure (components, assets, styles), committed lockfile, `dev`/`build`/`preview`/`lint` scripts, deploy config for the host (Vercel/Netlify static build).
- [ ] Componentize: reusable project `Card`, skill chip/section, nav, footer, section wrapper. No copy-paste blocks.
- [ ] Tasteful motion via framer-motion (scroll reveals, hover states, the hero enter sequence) — refined, not gimmicky. Respect `prefers-reduced-motion`.
- [ ] Responsive from 320px → ultrawide. Real mobile nav. Test the breakpoints.
- [ ] Retire the old single `index.html` once the app renders every section at parity or better. Keep it in git history, don't ship both.

## 3. Performance

- [ ] Ship a fast site: lazy-load below-the-fold, defer non-critical JS, self-host or `font-display: swap` fonts, no layout shift (CLS ~0).
- [ ] Optimize images (modern formats, correct sizing, `loading="lazy"`, width/height set). Generate/keep a valid `og-image.png` (1200×630).
- [ ] Keep bundle small if you add a framework — code-split, tree-shake, purge unused CSS. Target Lighthouse ≥ 95 across the board.

## 4. Accessibility

- [ ] Semantic landmarks (`header`/`nav`/`main`/`section`/`footer`), one `h1`, logical heading order.
- [ ] Keyboard-navigable, visible focus states, skip-to-content link, `aria` where needed, alt text on all imagery.
- [ ] Color contrast passes WCAG AA in every theme. Test with a checker, don't eyeball it.

## 5. SEO / meta

- [ ] Preserve + verify all OG/Twitter/LinkedIn meta; keep URLs and `og:image` correct after the rebuild.
- [ ] Add `sitemap.xml`, `robots.txt`, canonical URL, and JSON-LD `Person` structured data (name, role, links to GitHub/LinkedIn/projects).
- [ ] Descriptive `<title>` + meta description in pt-BR.

## 6. Content polish

- [ ] Tighten the pt-BR copy — clear, confident, human, no AI tells, no fluff. Keep the facts (§0 guardrail).
- [ ] Make the projects section sell: for each real project — what it is, the stack, your role, and the live/demo link. Keep the four real projects and their links.
- [ ] Clear primary CTA (contact / hire / GitHub / LinkedIn / CV). Make the contact path obvious.

---

## 7. Definition of Done — the professional bar

Do not stop until all of these are true. If any is false and you can act on it, keep working.

- **Design:** the whole site reflects the 21st.dev design language coherently — one intentional system, not a patchwork. Looks hire-worthy on desktop and mobile.
- **Responsive:** flawless 320px → ultrawide, real mobile nav, no horizontal scroll, no broken layouts.
- **Performance:** Lighthouse ≥ 95 (Performance/Best Practices/SEO), CLS ~0, fonts and images optimized.
- **Accessibility:** Lighthouse a11y ≥ 95, keyboard-navigable, WCAG AA contrast, semantic + `aria` correct, `prefers-reduced-motion` respected.
- **SEO:** meta/OG intact and correct, sitemap + robots + canonical + JSON-LD present.
- **Content:** copy tight and truthful in pt-BR, four real projects with accurate links, clear CTA.
- **Code quality:** clean structure, componentized, linter/formatter configured and clean, no dead code, lockfile committed if there's a build.
- **Ship state:** deploys clean on the host (Vercel/Netlify), every anchor + external link works, social preview renders correctly.

When all of the above hold, write a final summary: what you changed, the stack decision and why, what the 21st.dev component drove, and any remaining blocker that needs me (an asset, a copy fact, an account). Then stop.

---

### Working order (guide, not a gate — don't stop between steps)

1. Branch.
2. Read the base prompt (§1). Scaffold the fixed stack — Vite + React + TS + Tailwind + shadcn init, `/components/ui`, install `framer-motion` + `lucide-react`. Write the plan into `ROADMAP.md`.
3. Drop in + adapt the HeroBlock anchor, extract the design system from it, then rebuild section by section (§2) in that language.
4. Performance (§3), accessibility (§4), SEO (§5), content (§6) — bring each to the §7 bar.
5. Continuous: after each meaningful change, run lint/build, verify it renders and every link works, commit (scoped, pt-BR, no co-author trailer). Loop until §7 is satisfied.
