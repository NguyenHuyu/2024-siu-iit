import React from 'react'
import { GripVertical, Share } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'next-view-transitions'
import { PageProps } from '@/types/utils'
import TablePattern from '@/components/table-pattern'
import { Banner } from '@prisma/client'
import NextImage from 'next/image'
import DropdownPattern from '@/components/dropdown-pattern'
import { deleteBanner, getBanners } from '@/actions/banner'

export default async function Page({ params }: PageProps) {
   const banners = await getBanners()

   return (
      <div className='flex flex-col'>
         <header className='sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4'>
            <h1 className='text-xl font-semibold'>Quản lý banner</h1>
            <Link
               href={`/${params.lang}/admin/banner/create`}
               className='ml-auto gap-1.5 text-sm'
            >
               <Button variant='outline' size='sm'>
                  <Share className='size-3.5' />
                  Tải ảnh
               </Button>
            </Link>
         </header>
         <TablePattern<Banner>
            data={banners}
            columns={[
               {
                  title: 'Tên ảnh',
                  render: (image) => <div className='max-w-28 truncate'>{image.name}</div>
               },
               {
                  title: 'Tên ảnh',
                  render: (image) => (
                     <NextImage
                        className='w-40 rounded-md'
                        src={image?.imageUrl}
                        width={500}
                        height={250}
                        alt={image?.name}
                     />
                  )
               },
               {
                  title: 'Đường dẫn',
                  render: (image) => <div className='w-80 truncate'>{image.imageUrl}</div>
               },
               {
                  title: 'Actions',
                  render: (image) => (
                     <DropdownPattern deleteId={image.id} handleDelete={deleteBanner}>
                        <GripVertical />
                     </DropdownPattern>
                  )
               }
            ]}
         />
      </div>
   )
}
