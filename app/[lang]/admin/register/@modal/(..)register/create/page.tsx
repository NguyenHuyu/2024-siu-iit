'use client'
import React from 'react'
import DialogWrapper from '@/components/dialog-wrapper'
import { SignupForm } from '@/components/form/register-form'

export default function Page() {
   return (
      <DialogWrapper label='Tạo tài khoản'>
         <SignupForm />
      </DialogWrapper>
   )
}
