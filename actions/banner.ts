'use server'
import prisma from '@/lib/database'
import { Status } from '@reflet/http'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function createBanner(formData: FormData) {
   const language = cookies().get('language')?.value as string
   const values = {
      title: formData.get('title') as string,
      imageUrl: formData.get('imageUrl') as string
   }
   if (!values.imageUrl || !values.title) {
      return {
         status: Status.BadRequest,
         message: 'Chưa nhập đủ thông tin'
      }
   }

   try {
      await prisma.banner.create({
         data: {
            imageUrl: values?.imageUrl,
            name: values.title
         }
      })
      revalidatePath(`/${language}/admin/banner`)

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

export async function getBanners() {
   try {
      return await prisma.banner.findMany()
   } catch (error) {
      return []
   }
}

export async function deleteBanner(id: string) {
   const language = cookies().get('language')?.value as string
   try {
      await prisma.banner.delete({
         where: {
            id
         }
      })
      revalidatePath(`/${language}/admin/banner`)

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
