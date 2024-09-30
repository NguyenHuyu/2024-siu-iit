'use client'
import { login } from '@/actions/auth'
import { useFormState, useFormStatus } from 'react-dom'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function LoginForm() {
   const [state, action] = useFormState(login, undefined)

   return (
      <form action={action} className='space-y-4'>
         <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' name='email' placeholder='Email' />
         </div>
         {state?.errors?.email && <p className='text-red-500'>{state.errors.email}</p>}

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
         Đăng nhập
      </Button>
   )
}
