'use client'
import * as z from 'zod'
import React, { useTransition } from 'react'
import { Bulletin } from '@prisma/client'
import { useForm } from 'react-hook-form'
import { requiredStringOrBoolean } from '@/schema/utils.schema'
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Editor from '@/components/tiptap/editor'
import { Checkbox } from '@/components/ui/checkbox'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue
} from '@/components/ui/select'
import { createBulletin, updateBulletinById } from '@/actions/bulletin'
import { toast } from 'sonner'
import { Status } from '@reflet/http'
import { usePopup } from '@/hooks/usePopup'

interface Props {
   bulletin?: Bulletin
   editable?: boolean
}

export const formSchema = z.object({
   title: z.string(),
   description: z.string(),
   imageUrl: z.string(),
   body: z.union([z.string(), z.null()]),
   category: z.enum([
      'NEWS',
      'EVENTS',
      'ANNOUNCEMENTS',
      'BULLETINS',
      'COURSES',
      'SEMINARS',
      'PROJECTS',
      'PRODUCTS',
      'PUBLICATIONS',
      'OTHERS',
      'ACADEMIC',
      'BUSSINESS'
   ]),
   isNew: requiredStringOrBoolean(),
   isImportant: requiredStringOrBoolean()
})

export default function BulletinForm({ bulletin, editable }: Props) {
   const [isPending, startTransition] = useTransition()
   const { onToggle } = usePopup()
   const form = useForm<z.infer<typeof formSchema>>({
      mode: 'onChange',
      resolver: zodResolver(formSchema),
      defaultValues: bulletin || {
         isNew: true,
         isImportant: true,
         body: '',
         description: ''
      }
   })

   function onSubmit(data: z.infer<typeof formSchema>) {
      startTransition(async () => {
         if (!bulletin) {
            const result = await createBulletin(data)
            if (result.status === Status.Created) {
               onToggle()
               toast.success(result.message)
            } else {
               toast.error(result.message)
            }
         } else {
            const result = await updateBulletinById(bulletin.id, data)
            if (result.status === Status.Ok) {
               toast.success(result.message)
            } else {
               toast.error(result.message)
            }
         }
      })
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className='p-4 w-full'>
            <div className='grid grid-cols-1 gap-2 w-full'>
               <FormField
                  control={form.control}
                  name='title'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Tiêu đề</FormLabel>
                        <FormControl>
                           <Input placeholder='Nhập tiêu đề' {...field} />
                        </FormControl>
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name='description'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Mô tả</FormLabel>
                        <FormControl>
                           <Textarea placeholder='Nhập mô tả' {...field} />
                        </FormControl>
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name='category'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Loại tin</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                              <SelectTrigger>
                                 <SelectValue placeholder='Chọn loại tin' />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              <SelectItem value='NEWS'>Tin tức</SelectItem>
                              <SelectItem value='ANNOUNCEMENTS'>Thông báo</SelectItem>
                              <SelectItem value='EVENTS'>Sự kiện sắp tới</SelectItem>
                              <SelectItem value='COURSES'>Khóa học</SelectItem>
                              <SelectItem value='SEMINARS'>Seminar</SelectItem>
                              <SelectItem value='PROJECTS'>
                                 Chương trình - Dự án
                              </SelectItem>
                              <SelectItem value='PRODUCTS'>
                                 Sản phẩm NCKH - CGCN
                              </SelectItem>
                              <SelectItem value='PUBLICATIONS'>
                                 Công bố khoa học
                              </SelectItem>
                              <SelectItem value='OTHERS'>
                                 Sách - Tài liệu - Giáo trình
                              </SelectItem>
                              <SelectItem value='ACADEMIC'>Đối tác học thuật</SelectItem>
                              <SelectItem value='BUSSINESS'>
                                 Đối tác doanh nghiệp
                              </SelectItem>
                           </SelectContent>
                        </Select>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name='imageUrl'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Ảnh</FormLabel>
                        <FormControl>
                           <Input
                              placeholder='Vui lòng nhập đường dẫn của ảnh'
                              {...field}
                           />
                        </FormControl>
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name='body'
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Nội dung</FormLabel>
                        <FormControl>
                           <Editor
                              editable={editable}
                              body={field?.value}
                              onChange={field.onChange}
                           />
                        </FormControl>
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name='isNew'
                  render={({ field }) => (
                     <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                        <FormControl>
                           <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                           />
                        </FormControl>
                        <div className='space-y-1 leading-none'>
                           <FormLabel>Bài viết mới</FormLabel>
                           <FormDescription>
                              Bài viết mới sẽ được hiển thị ở trang chủ
                           </FormDescription>
                        </div>
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name='isImportant'
                  render={({ field }) => (
                     <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                        <FormControl>
                           <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                           />
                        </FormControl>
                        <div className='space-y-1 leading-none'>
                           <FormLabel>Bài viết quan trọng</FormLabel>
                           <FormDescription>
                              Bài viết quan trọng sẽ được đánh dấu
                           </FormDescription>
                        </div>
                     </FormItem>
                  )}
               />
            </div>
            <div className='flex justify-center w-full py-4'>
               <Button size='sm' disabled={isPending} className=' w-max'>
                  {isPending ? 'Đang xử lý...' : bulletin ? 'Cập nhật' : 'Tạo bài viết'}
               </Button>
            </div>
         </form>
      </Form>
   )
}
