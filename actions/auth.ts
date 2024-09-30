'use server'
import prisma from '@/lib/database'
import { createSession, deleteSession } from '@/lib/session'
import {
   SignupFormSchema,
   FormState,
   LoginFormState,
   LoginFormSchema
} from '@/schema/definitions'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'

export async function signup(state: FormState, formData: FormData) {
   // Validate form fields
   const validatedFields = SignupFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      role: formData.get('role')
   })

   // If any form fields are invalid, return early
   if (!validatedFields.success) {
      return {
         errors: validatedFields.error.flatten().fieldErrors
      }
   }

   try {
      const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10)

      await prisma.user.create({
         data: {
            name: validatedFields.data.name,
            email: validatedFields.data.email,
            password: hashedPassword,
            role: validatedFields.data.role
         }
      })
      return {
         message: 'User created successfully'
      }
   } catch (error) {
      return {
         message: 'An error occurred while creating the user'
      }
   }
}

export async function login(state: LoginFormState, formData: FormData) {
   const email = formData.get('email') as string
   const password = formData.get('password') as string

   const validatedFields = LoginFormSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password')
   })
   // If any form fields are invalid, return early
   if (!validatedFields.success) {
      return {
         errors: validatedFields.error.flatten().fieldErrors
      }
   }

   const user = await prisma.user.findUnique({
      where: {
         email: email
      }
   })

   if (!user) {
      return {
         message: 'User not found'
      }
   }

   const passwordMatch = await bcrypt.compare(password, user.password)

   if (!passwordMatch) {
      return {
         message: 'Invalid password'
      }
   }

   await createSession(user)

   redirect('/vi/admin')

   return {
      message: 'Login successful'
   }
}

export async function logout() {
   deleteSession()

   return {
      message: 'Logout successful'
   }
}
