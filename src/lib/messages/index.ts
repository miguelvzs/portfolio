import type { Locale, Messages } from "@/lib/i18n-types"
import { en } from "@/lib/messages/en"
import { es } from "@/lib/messages/es"
import { pt } from "@/lib/messages/pt"

export const dictionaries: Record<Locale, Messages> = { pt, en, es }
