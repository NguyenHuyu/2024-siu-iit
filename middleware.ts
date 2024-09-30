import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import { i18n } from '@/lib/i18n.config'
import { publicRoutes, protectedRoutes, authRoutes } from '@/routes'
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

async function withAuthMiddleware(request: NextRequest) {
   const cookieValue = cookies().get('session')?.value as string
   const session = await decrypt(cookieValue)
   const language = request?.nextUrl?.pathname?.split('/')[1] || 'vi'
   const pathNameSliceLanguage = request.nextUrl.pathname.slice(3)
   const isPublicRoute = publicRoutes.includes(pathNameSliceLanguage)
   const isProtectedRoute = protectedRoutes.includes(pathNameSliceLanguage)
   const isAuthRoutes = authRoutes.includes(pathNameSliceLanguage)

   if (isProtectedRoute && !session) {
      return NextResponse.redirect(new URL('/login', request.nextUrl))
   }
   if (isAuthRoutes && session) {
      return NextResponse.redirect(new URL('/admin', request.nextUrl))
   }

   const response = NextResponse.next()
   response.cookies.set('language', language)
   return response
}

export default withI18nMiddleware(withAuthMiddleware)

export const config = {
   matcher: ['/((?!api|_next/static|_next/image|favicon.ico|manifest.json).*)']
}
