import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import { i18n } from '@/lib/i18n.config'
import { publicRoutes } from '@/routes'
import { cookies } from 'next/headers'
import { decrypt } from '@/lib/session'

function getLocale(request: NextRequest): string | undefined {
   const negotiatorHeaders: Record<string, string> = {}
   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

   const locales = i18n.locales
   const locale = matchLocale(['vi'], locales, i18n.defaultLocale)
   return locale
}

function withI18nMiddleware(middleware: NextMiddleware) {
   return async (request: NextRequest, event: NextFetchEvent) => {
      const pathname = request.nextUrl.pathname
      const pathnameIsMissingLocale = i18n.locales.every(
         (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
      )
      // Redirect if there is no locale
      if (pathnameIsMissingLocale) {
         const locale = getLocale(request)
         return NextResponse.redirect(
            new URL(
               `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
               request.url
            )
         )
      }
      return middleware(request, event)
   }
}

function extractFirstTwoPathSegments(url: string) {
   const parts = url.split('/')
   const firstTwoParts = parts.slice(2, 3)
   return '/' + firstTwoParts.join('/')
}

async function withAuthMiddleware(request: NextRequest) {
   const cookieValue = cookies().get('session')?.value as string
   const session = await decrypt(cookieValue)

   const language = request?.nextUrl?.pathname?.split('/')[1] || 'vi'

   // const isPublicRoute = publicRoutes.includes(
   //    extractFirstTwoPathSegments(request.nextUrl.pathname)
   // )

   // if (!session && !isPublicRoute) {
   //    return NextResponse.rewrite(new URL(`/${language}`, request.url))
   // }

   const response = NextResponse.next()
   response.cookies.set('language', language)
   return response
}

export default withI18nMiddleware(withAuthMiddleware)

export const config = {
   matcher: ['/((?!api|_next/static|_next/image|favicon.ico|manifest.json).*)']
}
