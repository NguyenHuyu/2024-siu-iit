'use client'

import { ClipboardCheck, Copy } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

export default function CopyText({ text }: { text: string }) {
   const copyToClipboard = () => {
      navigator.clipboard.writeText(text).then(() => {
         toast.info('Đã sao chép', {
            position: 'top-center'
         })
      })
   }
   return (
      <button
         onClick={copyToClipboard}
         className='inline-flex focus:outline-0 hover:underline'
      >
         {text}
         <Copy />
      </button>
   )
}
