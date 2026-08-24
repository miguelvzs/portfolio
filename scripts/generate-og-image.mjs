import { mkdir } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const WIDTH = 1200
const HEIGHT = 630
const OUT = path.resolve(import.meta.dirname, "../public/og-image.png")

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0b0d" />
      <stop offset="100%" stop-color="#101319" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="0%" r="75%">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.16" />
      <stop offset="100%" stop-color="#3B82F6" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="badge" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#1a1d24" />
    </linearGradient>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#80808018" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)" />

  <circle cx="120" cy="120" r="44" fill="url(#badge)" stroke="#0a0b0d" stroke-width="4" />
  <text x="120" y="132" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" fill="#f5f7fb" text-anchor="middle">MV</text>

  <text x="120" y="270" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="700" fill="#edf0f7">Miguel Vaz</text>
  <text x="120" y="330" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="400" fill="#9aa3b8">Desenvolvedor Fullstack J&#250;nior &#183; Foco em IA</text>

  <text x="120" y="392" font-family="Consolas, 'Courier New', monospace" font-size="22" fill="#3B82F6">// agentes de IA integrados a sistemas reais</text>

  <text x="120" y="560" font-family="Consolas, 'Courier New', monospace" font-size="24" fill="#5a6278">miguelvzs.dev</text>
</svg>
`.trim()

await mkdir(path.dirname(OUT), { recursive: true })
await sharp(Buffer.from(svg)).png().toFile(OUT)
console.log(`OG image written to ${OUT}`)
