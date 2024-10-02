import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'
import './globals.css'
import ClientProvider from '@/provider/client-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'IIT - Viện Công nghệ & Sáng tạo - SIU',
   description: 'IIT - Viện công nghệ & sáng tạo - SIU',
   metadataBase: new URL('https://iit.siu.edu.vn'),
   alternates: {
      canonical: '/',
      languages: {
         'vi-VN': '/vi',
         'en-US': '/en'
      }
   },
   openGraph: {
      images: '/opengraph-image.jpg'
   }
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <ViewTransitions>
         <html lang='en'>
            <body className={inter.className}>
               <ClientProvider>{children}</ClientProvider>
            </body>
         </html>
      </ViewTransitions>
   )
}
