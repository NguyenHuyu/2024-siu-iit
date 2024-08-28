import React from 'react'
import DialogWrapper from '@/components/dialog-wrapper'
import { getBulletinById } from '@/actions/bulletin'
import { PageProps } from '@/types/utils'
import { notFound } from 'next/navigation'
import RenderItem from '@/components/render-item'

export default async function CreatePage({ params }: PageProps) {
   const bulletin = await getBulletinById(params.id)

   if (!bulletin) return notFound()

   return (
      <DialogWrapper label='Xem chi tiết' className='lg:max-w-7xl'>
         <RenderItem bulletin={bulletin} />
      </DialogWrapper>
   )
}
