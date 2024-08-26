'use client'
import { Toaster } from '@/components/ui/sonner'
import { LayoutProps } from '@/types/utils'
import React from 'react'

export default function ClientProvider({ children }: LayoutProps) {
   return (
      <>
         {children}
         <Toaster />
      </>
   )
}
