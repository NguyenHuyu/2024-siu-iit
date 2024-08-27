'use client'
import React, { startTransition } from 'react'
import { AlertDialogAction } from '@/components/ui/alert-dialog'
import { Status } from '@reflet/http'
import { ResponseData } from '@/types/utils'
import { toast } from 'sonner'

interface ISubmitButtonProps {
   handleDelete: (id: number | string) => Promise<ResponseData>
   id: number | string
   setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SubmitButton({ handleDelete, id, setOpen }: ISubmitButtonProps) {
   function submitAction(id: number | string) {
      startTransition(async () => {
         const result = await handleDelete(id)
         setOpen(false)
         if (result.status === Status.Ok) {
            toast.success(result.message)
         } else {
            toast.error(result.message)
         }
      })
   }

   return (
      <AlertDialogAction
         onClick={() => submitAction(id)}
         className='bg-red-500 text-white'
      >
         Xóa
      </AlertDialogAction>
   )
}
