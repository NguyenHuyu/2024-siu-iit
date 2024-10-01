import React from 'react'
import { LayoutProps } from '@/types/utils'

export default function Layout({ children, modal }: LayoutProps) {
   return (
      <>
         {children}
         {modal}
      </>
   )
}
