'use server'
import prisma from '@/lib/database'
import { DefaultSearchParams } from '@/types/utils'
import { Image } from '@prisma/client'
import { Status } from '@reflet/http'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function createImage(formData: FormData) {
   const language = cookies().get('language')?.value as string
   const values = {
      imageUrl: formData.get('file') as string
   }
   if (!values.imageUrl) {
      return {
         status: Status.BadRequest,
         message: 'Chưa nhập đủ thông tin'
      }
   }
   const imageForm = new FormData()

   imageForm.append('file', formData.get('file') as Blob)
   imageForm.append('typePath', 'iit')

   try {
      const result = await fetch(process.env.NEXT_APP_API_URL as string, {
         method: 'POST',
         body: imageForm
      })
      if (!result.ok) {
         return {
            status: Status.InternalServerError,
            message: 'Co loi xay ra, khi upload anh!'
         }
      }
      const data = await result.json()

      await prisma.image.create({
         data: {
            imageUrl: data?.fileName,
            name: 'image'
         }
      })

      revalidatePath(`/${language}/admin/image`)

      return {
         status: Status.Created,
         message: 'Tạo thành công'
      }
   } catch (error) {
      return {
         status: Status.InternalServerError,
         message: 'Có lỗi xảy ra, ở hệ thống!'
      }
   }
}

export async function getImages(searchParams: DefaultSearchParams) {
   const { page = '1', size = '10' } = searchParams || {}

   try {
      const skip = (parseInt(page) - 1) * parseInt(size)
      const take = parseInt(size)

      const data = await prisma.image.findMany({
         skip: skip,
         take: take,
         orderBy: {
            createdAt: 'desc' // Sắp xếp theo thời gian tạo mới nhất
         }
      })

      const totalRecords = await prisma.image.count()
      const totalPages = Math.ceil(totalRecords / take)

      return {
         content: data as Image[],
         page: parseInt(page),
         totalPages: totalPages,
         total: totalRecords,
         size: take
      }
   } catch (error) {
      console.error('Error fetching image:', error)
      return {
         content: [],
         total: 0,
         page: 0,
         size: 0,
         totalPages: 0
      }
   }
}

export async function deleteImageById(id: string) {
   const language = cookies().get('language')?.value as string
   try {
      await prisma.image.delete({
         where: {
            id
         }
      })
      revalidatePath(`/${language}/admin/image`)

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
