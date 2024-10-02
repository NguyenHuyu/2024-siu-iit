'use server'
import { formSchema } from '@/app/[lang]/admin/bulletin/_components/bulletin-form'
import prisma from '@/lib/database'
import { Category, DefaultSearchParams } from '@/types/utils'
import { Bulletin } from '@prisma/client'
import { Status } from '@reflet/http'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { z } from 'zod'

export async function createBulletin(values: z.infer<typeof formSchema>) {
   const language = cookies().get('language')?.value as string

   try {
      await prisma.bulletin.create({
         data: {
            ...values,
            body: values.body || '',
            imageUrl: values?.imageUrl || '',
            category: values.category
         }
      })

      revalidatePath(`/${language}/admin/bulletin`)

      return {
         status: Status.Created,
         message: 'Tạo thành công'
      }
   } catch (error) {
      console.log('error', error)
      return {
         status: Status.InternalServerError,
         message: 'Có lỗi xảy ra, ở hệ thống!'
      }
   }
}

export async function getBulletins(searchParams: DefaultSearchParams) {
   const { page = '1', size, value, category } = searchParams || {}

   const skip = (parseInt(page) - 1) * parseInt(size || '12')
   const take = parseInt(size || '12')

   try {
      const whereClause: Record<string, any> = {}

      // Tìm kiếm theo giá trị value trên nhiều trường
      if (value) {
         const lowerValue = value.toLowerCase()
         whereClause.OR = [
            { title: { contains: lowerValue, mode: 'insensitive' } },
            { description: { contains: lowerValue, mode: 'insensitive' } },
            { imageUrl: { contains: lowerValue, mode: 'insensitive' } },
            { body: { contains: lowerValue, mode: 'insensitive' } }
         ]
      }

      // Lọc theo category nếu là mảng
      if (Array.isArray(category) && category.length > 0) {
         whereClause.category = {
            in: category // Prisma 'in' để lọc theo mảng category
         }
      }

      // Thực hiện truy vấn
      const data = await prisma.bulletin.findMany({
         where: Object.keys(whereClause).length ? whereClause : undefined,
         skip: skip,
         take: take,
         orderBy: {
            createdAt: 'desc'
         }
      })

      // Tính tổng số bản ghi
      const totalRecords = await prisma.bulletin.count({
         where: Object.keys(whereClause).length ? whereClause : undefined
      })

      const totalPages = Math.ceil(totalRecords / take)

      return {
         content: data as Bulletin[],
         page: parseInt(page),
         totalPages: totalPages,
         total: totalRecords,
         size: take
      }
   } catch (error) {
      console.error('Error fetching bulletins:', error)
      return {
         content: [],
         total: 0,
         page: 0,
         size: 0,
         totalPages: 0
      }
   }
}

export async function getBulletinById(id: string): Promise<Bulletin | null> {
   try {
      const bulletin = await prisma.bulletin.findUnique({
         where: {
            id
         }
      })
      return bulletin
   } catch (error) {
      return null
   }
}

export async function updateBulletinById(id: string, values: z.infer<typeof formSchema>) {
   const language = cookies().get('language')?.value as string

   try {
      await prisma.bulletin.update({
         where: {
            id
         },
         data: {
            ...values,
            body: values.body || '',
            imageUrl: values?.imageUrl || '',
            category: values.category
         }
      })

      revalidatePath(`/${language}/admin/bulletin`)

      return {
         status: Status.Ok,
         message: 'Cập nhật thành công'
      }
   } catch (error) {
      return {
         status: Status.InternalServerError,
         message: 'Có lỗi xảy ra, ở hệ thống!'
      }
   }
}

export async function deleteBulletinById(id: string) {
   const language = cookies().get('language')?.value as string
   try {
      await prisma.bulletin.delete({
         where: {
            id
         }
      })
      revalidatePath(`/${language}/admin/bulletin`)

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

export async function getLatestBulletins(excludeId: string, category: Category[]) {
   try {
      const data = await prisma.bulletin.findMany({
         where: {
            id: {
               not: excludeId
            },
            category: {
               in: category
            }
         },
         orderBy: {
            createdAt: 'desc'
         },
         take: 12
      })

      return data as Bulletin[]
   } catch (error) {
      console.error('Error fetching latest bulletins:', error)
      return []
   }
}
