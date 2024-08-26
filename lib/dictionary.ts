import 'server-only'
import type { Locale } from '@/lib/i18n.config'

const dictionaries = {
   vi: () => import('@/i18n/vi.json').then((module) => module.default),
   en: () => import('@/i18n/en.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
