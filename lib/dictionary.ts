import 'server-only'
import { i18n, Locale } from '@/lib/i18n.config'

const dictionaries = {
   vi: () => import('@/i18n/vi.json').then((module) => module.default),
   en: () => import('@/i18n/en.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) =>
   dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()
