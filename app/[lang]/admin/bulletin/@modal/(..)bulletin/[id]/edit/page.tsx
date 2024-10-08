import React from 'react'
import DialogWrapper from '@/components/dialog-wrapper'
import BulletinForm from '../../../../_components/bulletin-form'
import { getBulletinById } from '@/actions/bulletin'
import { PageProps } from '@/types/utils'

export default async function CreatePage({ params }: PageProps) {
   const bulletin = await getBulletinById(params.id)

   if (!bulletin) return null

   return (
      <DialogWrapper label='Chỉnh sửa bài' className='lg:max-w-7xl'>
         <BulletinForm bulletin={bulletin} editable />
      </DialogWrapper>
   )
}
