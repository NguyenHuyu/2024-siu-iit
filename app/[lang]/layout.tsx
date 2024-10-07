import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'
import './globals.css'
import ClientProvider from '@/provider/client-provider'
import { i18n, Locale } from '@/lib/i18n.config'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
   return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
   metadataBase: new URL('https://iit.siu.edu.vn'),
   title: {
      default: 'IIT - Viện Công nghệ & Sáng tạo',
      template: `%s | IIT`
   },
   description: 'IIT - Viện công nghệ & sáng tạo - SIU',
   alternates: {
      canonical: '/',
      languages: {
         'vi-VN': '/vi',
         'en-US': '/en'
      }
   },
   icons: [
      {
         url: '/favicon.ico',
         href: '/favicon.ico'
      },
      {
         url: '/icon.jpg',
         href: '/icon.jpg'
      },
      {
         url: '/shortcut-icon.jpg',
         href: '/shortcut-icon.jpg'
      },
      {
         url: '/apple-icon.jpg',
         href: '/apple-icon.jpg'
      }
   ],
   openGraph: {
      images: [
         {
            url: '/opengraph-image.jpg',
            href: '/opengraph-image.jpg'
         }
      ]
   }
}

export default function RootLayout({
   children,
   params
}: Readonly<{
   children: React.ReactNode
   params: { lang: Locale }
}>) {
   return (
      <ViewTransitions>
         <html lang={params.lang}>
            <body className={inter.className}>
               <ClientProvider>{children}</ClientProvider>
            </body>
         </html>
      </ViewTransitions>
   )
}
