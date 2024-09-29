'use server'

import { Status } from '@reflet/http'
import prisma from '@/lib/database'

export async function getContact() {}

export async function createContact(formData: FormData) {
   try {
      const rawFormData = {
         name: formData.get('name'),
         email: formData.get('email'),
         phone: formData.get('phone'),
         body: formData.get('body')
      }

      const existingContact = await prisma.reportContact.findFirst({
         where: {
            email: rawFormData.email as string
         }
      })

      if (existingContact) {
         return {
            status: Status.Conflict,
            message: 'Email đã được sử dụng'
         }
      }

      await prisma.reportContact.create({
         data: {
            name: rawFormData.name as string,
            email: rawFormData.email as string,
            phone: rawFormData.phone as string,
            body: rawFormData.body as string
         }
      })

      return {
         status: Status.Created,
         message: 'Gửi thành công'
      }
   } catch (error) {
      return {
         status: Status.InternalServerError,
         message: 'Có lỗi xảy ra, ở hệ thống!'
      }
   }
}
