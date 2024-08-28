import { Locale } from '@/lib/i18n.config'


export enum Category {
   NEWS = "NEWS",
   EVENTS = "EVENTS",
   ANNOUNCEMENTS = "ANNOUNCEMENTS",
   BULLETINS = "BULLETINS"
 }

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
   category: Category;
}

export interface ResponseData {
   status: number
   message: string
}
