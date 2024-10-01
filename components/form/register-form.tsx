'use client'
import { signup } from '@/actions/auth'
import { useFormState, useFormStatus } from 'react-dom'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export function SignupForm() {
   const [state, action] = useFormState(signup, undefined)

   return (
      <form action={action} className='space-y-4 p-2'>
         <div className='space-y-2'>
            <Label htmlFor='name'>Tên tài khoản</Label>
            <Input id='name' name='name' placeholder='' />
         </div>
         {state?.errors?.name && <p className='text-red-500'>{state.errors.name}</p>}

         <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' name='email' placeholder='Email' />
         </div>
         {state?.errors?.email && <p className='text-red-500'>{state.errors.email}</p>}

         <div className='space-y-2'>
            <Label htmlFor='role'>Loại người dùng</Label>
            <Select name='role'>
               <SelectTrigger>
                  <SelectValue placeholder='Chọn loại người dùng' />
               </SelectTrigger>
               <SelectContent>
                  <SelectItem value='ADMIN'>ADMIN</SelectItem>
                  <SelectItem value='USER1'>USER1</SelectItem>
                  <SelectItem value='USER2'>USER2</SelectItem>
                  <SelectItem value='USER3'>USER3</SelectItem>
               </SelectContent>
            </Select>{' '}
         </div>
         {state?.errors?.role && <p className='text-red-500'>{state.errors.role}</p>}

         <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' name='password' type='password' />
         </div>
         {state?.errors?.password && (
            <div>
               <p className='text-red-500'>Password must:</p>
               <ul>
                  {state.errors.password.map((error) => (
                     <li key={error}>- {error}</li>
                  ))}
               </ul>
            </div>
         )}
         <SubmitButton />
      </form>
   )
}

function SubmitButton() {
   const { pending } = useFormStatus()

   return (
      <Button disabled={pending} type='submit'>
         Tạo người dùng
      </Button>
   )
}
