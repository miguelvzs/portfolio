import type { Locale, Messages } from "@/lib/i18n-types"
import { pt } from "@/lib/messages/pt"

// pt ships in the main bundle; en/es are split out and loaded on demand.
export const loadMessages: Record<Locale, () => Promise<Messages>> = {
  pt: () => Promise.resolve(pt),
  en: () => import("@/lib/messages/en").then((m) => m.en),
  es: () => import("@/lib/messages/es").then((m) => m.es),
}
