// Gera public/og-image.png a partir de scripts/og-image.html, num navegador,
// para a imagem usar as mesmas fontes do site (Geist e Geist Mono).
// Requer o Playwright: npx -y playwright@1.65.0 install chromium && npm i --no-save playwright@1.65.0
import path from "node:path"
import { pathToFileURL } from "node:url"
import { chromium } from "playwright"

const TEMPLATE = path.resolve(import.meta.dirname, "og-image.html")
const OUT = path.resolve(import.meta.dirname, "../public/og-image.png")

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.goto(pathToFileURL(TEMPLATE).href, { waitUntil: "load" })
await page.evaluate(() => document.fonts.ready)
await page.screenshot({ path: OUT })
await browser.close()
console.log(`OG gerada em ${OUT}`)
