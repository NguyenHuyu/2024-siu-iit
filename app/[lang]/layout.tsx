import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'
import './globals.css'
import ClientProvider from '@/provider/client-provider'
import { i18n, Locale } from '@/lib/i18n.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   metadataBase: new URL('https://iit.siu.edu.vn'),
   keywords: ['IIT', 'SIU', 'siu iit'],

   title: {
      default: 'IIT - Viện Công nghệ & Sáng tạo',
      template: `%s | IIT - Viện Công nghệ & Sáng tạo`
   },
   description: 'IIT - Viện công nghệ & sáng tạo - SIU',
   openGraph: {
      images: [
         {
            url: 'https://iit.siu.edu.vn/opengraph-image.jpg',
            href: 'https://iit.siu.edu.vn/opengraph-image.jpg'
         }
      ]
   },
   alternates: {
      canonical: '/',
      languages: {
         'vi-VN': '/vi',
         'en-US': '/en'
      }
   },
   icons: [
      {
         url: 'https://iit.siu.edu.vn/favicon.ico',
         href: 'https://iit.siu.edu.vn/favicon.ico'
      },
      {
         url: 'https://iit.siu.edu.vn/icon.jpg',
         href: 'https://iit.siu.edu.vn/icon.jpg'
      },
      {
         url: 'https://iit.siu.edu.vn/shortcut-icon.jpg',
         href: 'https://iit.siu.edu.vn/shortcut-icon.jpg'
      },
      {
         url: 'https://iit.siu.edu.vn/apple-icon.jpg',
         href: 'https://iit.siu.edu.vn/apple-icon.jpg'
      }
   ]
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
