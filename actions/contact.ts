'use server'
import { Status } from '@reflet/http'
import prisma from '@/lib/database'
import { DefaultSearchParams } from '@/types/utils'
import { ReportContact } from '@prisma/client'
import { cookies } from 'next/headers'
import { verifySession } from '@/lib/session'

export async function getContacts(searchParams: DefaultSearchParams) {
   const { page = '1', size = '10' } = searchParams || {}

   try {
      const skip = (parseInt(page) - 1) * parseInt(size)
      const take = parseInt(size)

      const data = await prisma.reportContact.findMany({
         skip: skip,
         take: take,
         orderBy: {
            createdAt: 'desc' // Sắp xếp theo thời gian tạo mới nhất
         }
      })

      const totalRecords = await prisma.reportContact.count()
      const totalPages = Math.ceil(totalRecords / take)

      return {
         content: data as ReportContact[],
         page: parseInt(page),
         totalPages: totalPages,
         total: totalRecords,
         size: take
      }
   } catch (error) {
      console.error('Error fetching contact:', error)
      return {
         content: [],
         total: 0,
         page: 0,
         size: 0,
         totalPages: 0
      }
   }
}

export async function getContactById(id: string) {
   try {
      const data = await prisma.reportContact.findFirst({
         where: {
            id
         }
      })
      return data
   } catch (error) {
      console.error('Error fetching contact:', error)
      return null
   }
}


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

export async function deleteContactById(id: string) {
   const language = cookies().get('language')?.value as string

   try {

      const session = await verifySession()
console.log("session", session)
      // await prisma.reportContact.delete({
      //    where: {
      //       id
      //    }
      // })


      // await prisma.reportContact.delete({
      //    where: {
      //       id
      //    }
      // })
      // revalidatePath(`/${language}/admin/contact`)

      return {
         status: Status.Ok,
         message: 'Xóa thành công'
      }
   } catch (error) {
      return {
         status: Status.InternalServerError,
         message: 'Có lỗi xảy ra, ở hệ thống!'
      }
   }
}
