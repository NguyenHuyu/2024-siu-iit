'use client'
import React, { useState } from 'react'
import DialogWrapper from '@/components/dialog-wrapper'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UploadButton, UploadDropzone } from '@/utils/uploadthing'
import { Status } from '@reflet/http'
import { toast } from 'sonner'
import { usePopup } from '@/hooks/usePopup'
import { createBanner } from '@/actions/banner'

export default function Page() {
   const [selectedImage, setSelectedImage] = useState<File | null>(null)
   const [previewUrl, setPreviewUrl] = useState<string | null>(null)
   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0]
      if (file) {
         setSelectedImage(file)
         const imageUrl = URL.createObjectURL(file)
         setPreviewUrl(imageUrl)
      }
   }

   const { onToggle } = usePopup()

   async function handleAction(formData: FormData) {
      const result = await createBanner(formData)
      if (result.status === Status.Created) {
         onToggle()
         toast.success(result.message)
      } else {
         toast.error(result.message)
      }
   }

   return (
      <DialogWrapper label='Tải ảnh banner'>
         <form action={handleAction} className='flex flex-col items-center gap-5'>
            <Input
               type='file'
               accept='image/*'
               onChange={handleImageChange}
               name='file'
            />

            {previewUrl && (
               <div className='flex flex-col items-center justify-between'>
                  <Image
                     width={500}
                     height={500}
                     src={previewUrl}
                     alt='uploaded'
                     className='w-60'
                  />

                  <Button size='sm'>Tải lên</Button>
               </div>
            )}
         </form>
      </DialogWrapper>
   )
}
