import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import { i18n, Locale } from '@/lib/i18n.config'
import React, { Fragment } from 'react'

export async function generateStaticParams() {
   return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function Layout({
   children,
   params
}: {
   children: React.ReactNode
   params: { lang: Locale }
}) {
   return (
      <Fragment>
         <Header lang={params.lang} />
         {children}
         <Footer lang={params.lang} />
      </Fragment>
   )
}
