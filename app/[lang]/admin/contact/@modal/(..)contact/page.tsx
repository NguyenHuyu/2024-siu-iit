import React from 'react'
import DialogWrapper from '@/components/dialog-wrapper'
import { PageProps } from '@/types/utils'
import { notFound } from 'next/navigation'
import { getContactById } from '@/actions/contact'

export default async function Page({ params }: PageProps) {
   const contact = await getContactById(params.id)

   if (!contact) return notFound()

   return (
      <DialogWrapper label='Thông tin chi tiết'>
         <ul className='grid gap-3'>
            <li className='flex items-center justify-between'>
               <span className='text-muted-foreground'>Họ tên</span>
               <span>{contact.name}</span>
            </li>
            <li className='flex items-center justify-between'>
               <span className='text-muted-foreground'>Email</span>
               <span>{contact.email}</span>
            </li>
            <li className='flex items-center justify-between'>
               <span className='text-muted-foreground'>Số điện thoại</span>
               <span>{contact.phone}</span>
            </li>
            <li className='flex items-center justify-between'>
               <span className='text-muted-foreground'>Nội dung</span>
               <span>{contact.body}</span>
            </li>
         </ul>
      </DialogWrapper>
   )
}
