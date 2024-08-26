'use client'
import React, { useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { usePopup } from '@/hooks/usePopup'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function DialogWrapper({
   children,
   label,
   className
}: {
   children: React.ReactNode
   label: string
   className?: string
}) {
   const router = useRouter()

   const { isOpen, inToggle } = usePopup()

   const handleClose = () => {
      router.back()
   }

   useEffect(() => {
      inToggle()
      if (!isOpen) {
         return router.back()
      }
   }, [inToggle, isOpen, router])

   return (
      <Dialog open onOpenChange={handleClose}>
         <DialogContent
            className={cn(className, 'max-w-[23rem] sm:max-w-sm md:max-w-xl')}
         >
            {label && (
               <DialogHeader>
                  <DialogTitle>{label}</DialogTitle>
               </DialogHeader>
            )}
            <Separator />
            <ScrollArea className='h-auto max-h-96 w-full'>{children}</ScrollArea>
         </DialogContent>
      </Dialog>
   )
}
