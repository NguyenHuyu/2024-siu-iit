import { Locale } from '@/lib/i18n.config'


export enum Category {
   NEWS = "NEWS",
   EVENTS = "EVENTS",
   ANNOUNCEMENTS = "ANNOUNCEMENTS",
   BULLETINS = "BULLETINS",
   COURSES = "COURSES",
   SEMINARS = "SEMINARS",
   PROJECTS = "PROJECTS",
   PRODUCTS = "PRODUCTS",
   PUBLICATIONS = "PUBLICATIONS",
   OTHERS = "OTHERS",
   ACADEMIC = "ACADEMIC",
   BUSSINESS = "BUSSINESS"
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
   searchParams: DefaultSearchParams
}

export interface DefaultSearchParams {
   filter?: string
   page?: string
   size?: string
   value?: string
   category: Category | string[]
}

export interface ResponseData {
   status: number
   message: string
}
