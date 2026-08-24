import { mkdir, readFile } from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const WIDTH = 1200
const HEIGHT = 630
const OUT = path.resolve(import.meta.dirname, "../public/og-image.png")
const AVATAR_SRC = path.resolve(import.meta.dirname, "../src/assets/avatar.webp")

const avatarBuffer = await sharp(await readFile(AVATAR_SRC)).resize(200, 200).png().toBuffer()
const avatarDataUri = `data:image/png;base64,${avatarBuffer.toString("base64")}`

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
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#80808018" stroke-width="1"/>
    </pattern>
    <clipPath id="avatarClip">
      <circle cx="120" cy="120" r="44" />
    </clipPath>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)" />

  <circle cx="120" cy="120" r="46" fill="#0a0b0d" />
  <image href="${avatarDataUri}" x="76" y="76" width="88" height="88" clip-path="url(#avatarClip)" preserveAspectRatio="xMidYMid slice" />

  <text x="120" y="270" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="700" fill="#edf0f7">Miguel Vaz</text>
  <text x="120" y="330" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="400" fill="#9aa3b8">Desenvolvedor Fullstack J&#250;nior &#183; Foco em IA</text>

  <text x="120" y="392" font-family="Consolas, 'Courier New', monospace" font-size="22" fill="#3B82F6">// agentes de IA integrados a sistemas reais</text>

  <text x="120" y="560" font-family="Consolas, 'Courier New', monospace" font-size="24" fill="#5a6278">miguelvzs.dev</text>
</svg>
`.trim()

await mkdir(path.dirname(OUT), { recursive: true })
await sharp(Buffer.from(svg)).png().toFile(OUT)
console.log(`OG image written to ${OUT}`)
