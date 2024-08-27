'use client'
import React, { useState } from 'react'
import DialogWrapper from '@/components/dialog-wrapper'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UploadDropzone } from '@/utils/uploadthing'
import { createImage } from '@/actions/image'
import { Status } from '@reflet/http'
import { toast } from 'sonner'
import { usePopup } from '@/hooks/usePopup'

export default function Page() {
   const [image, setImage] = React.useState<{
      imageUrl: string
      title: string
   }>()

   const [copied, setCopied] = useState(false)
   const { onToggle } = usePopup()
   const handleCopy = () => {
      if (image) {
         navigator.clipboard.writeText(image.imageUrl).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
         })
      }
   }

   async function handleAction(formData: FormData) {
      const result = await createImage(formData)
      if (result.status === Status.Created) {
         onToggle()
         toast.success(result.message)
      } else {
         toast.error(result.message)
      }
   }

   return (
      <DialogWrapper label='Update ảnh'>
         <form action={handleAction} className='flex flex-col items-center gap-5'>
            <UploadDropzone
               endpoint='imageUploader'
               className='w-full'
               appearance={{
                  container: {
                     backgroundColor: 'white'
                  }
               }}
               onClientUploadComplete={(result) => {
                  setImage({
                     imageUrl: result[0].url,
                     title: result[0].name
                  })
               }}
               onUploadError={(error) => {
                  console.error(error)
               }}
            />
            {image && (
               <div className='flex flex-col items-center justify-between'>
                  <Image
                     width={500}
                     height={500}
                     src={image.imageUrl}
                     alt='uploaded'
                     className='w-60'
                  />
                  <div className='flex items-center gap-2 w-full mx-auto py-4'>
                     <Label htmlFor='npm-install' className='sr-only'>
                        Label
                     </Label>
                     <Input
                        id='imageUrl'
                        name='imageUrl'
                        type='text'
                        className='col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        value={image.imageUrl}
                     />
                     <Input
                        id='title'
                        name='title'
                        type='text'
                        className='sr-only hidden'
                        value={image.title}
                     />
                     <Button
                        onClick={handleCopy}
                        className='col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center'
                     >
                        {copied ? (
                           <span
                              id='success-message'
                              className='inline-flex items-center'
                           >
                              <svg
                                 className='w-3 h-3 text-white me-1.5'
                                 aria-hidden='true'
                                 xmlns='http://www.w3.org/2000/svg'
                                 fill='none'
                                 viewBox='0 0 16 12'
                              >
                                 <path
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M1 5.917 5.724 10.5 15 1.5'
                                 />
                              </svg>
                              Copied!
                           </span>
                        ) : (
                           <span id='default-message'>Copy</span>
                        )}
                     </Button>
                  </div>
                  <Button size='sm'>Tải lên</Button>
               </div>
            )}
         </form>
      </DialogWrapper>
   )
}
