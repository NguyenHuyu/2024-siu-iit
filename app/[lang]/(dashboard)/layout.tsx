import Header from '@/components/layout/header'
import { Locale } from '@/lib/i18n.config'
import React, { Fragment } from 'react'

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
      </Fragment>
   )
}
