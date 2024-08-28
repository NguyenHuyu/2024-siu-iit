import React from 'react'
import DialogWrapper from '@/components/dialog-wrapper'
import BulletinForm from '../../../_components/bulletin-form'

export default function CreatePage() {
   return (
      <DialogWrapper label='Đăng bài' className='lg:max-w-7xl'>
         <BulletinForm editable={true} />
      </DialogWrapper>
   )
}
