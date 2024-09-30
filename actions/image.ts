'use server'
import prisma from '@/lib/database'
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

export async function getImages() {
   try {
      return await prisma.image.findMany()
   } catch (error) {
      return []
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
