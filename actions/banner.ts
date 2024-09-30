'use server'
import prisma from '@/lib/database'
import { Status } from '@reflet/http'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function createBanner(formData: FormData) {
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

      await prisma.banner.create({
         data: {
            imageUrl: data?.fileName,
            name: 'banner'
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
      // Đếm số lượng banner hiện có
      const bannerCount = await prisma.banner.count()

      // Nếu chỉ còn 1 banner, ngăn việc xóa
      if (bannerCount <= 1) {
         return {
            status: Status.BadRequest,
            message: 'Không thể xóa, chỉ còn một banner duy nhất!'
         }
      }

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
