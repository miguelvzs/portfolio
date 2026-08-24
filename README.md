# miguelvzs.dev

Portfólio pessoal de Miguel Vaz. React + TypeScript + Tailwind CSS v4 + shadcn/ui + framer-motion, com Vite.

## Rodando localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção (tsc + vite build) em dist/
npm run preview  # servir o build de produção localmente
npm run lint      # oxlint
```

## Stack

- **Vite** — build tool
- **React 19 + TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **shadcn/ui** (base Radix, preset Nova/Geist) — primitivos em `src/components/ui`
- **framer-motion** — animações de entrada e scroll reveal
- **lucide-react** — ícones

## Deploy

Site estático — `npm run build` gera `dist/`, publicável direto no Vercel/Netlify (build command `npm run build`, output `dist`).
