import { Locale } from '@/lib/i18n.config'

export type LayoutProps = {
   children: React.ReactNode
   modal?: React.ReactNode
}

export type PageProps = {
   params: {
      id: string
      slug: string
      lang: Locale
   }
}

export interface DefaultSearchParams {
   filter?: string
   page?: string
   size?: string
   value?: string
}

export interface ResponseData {
   status: number
   message: string
}
