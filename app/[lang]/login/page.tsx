import React from 'react'
import { LoginForm } from '@/components/form/login-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Page() {
   return (
      <div className='flex justify-center items-center h-screen'>
         <Card className='w-full max-w-sm mx-auto p-2'>
            <CardHeader>
               <CardTitle className='text-2xl'>Đăng nhập</CardTitle>
            </CardHeader>
            <CardContent className='grid gap-4'>
               <LoginForm />
            </CardContent>
         </Card>
      </div>
   )
}
