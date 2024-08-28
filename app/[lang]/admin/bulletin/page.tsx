import React from 'react'
import { GripVertical, Share } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'next-view-transitions'
import { DefaultSearchParams, PageProps } from '@/types/utils'
import TablePattern from '@/components/table-pattern'
import DropdownPattern from '@/components/dropdown-pattern'
import { cn } from '@/lib/utils'
import { deleteBulletinById, getBulletins } from '@/actions/bulletin'
import { Bulletin } from '@prisma/client'
import Image from 'next/image'
import { renderStatus } from '@/utils/utils'

interface Props extends PageProps {
   searchaParams: DefaultSearchParams
}

export default async function Page({ params, searchaParams }: Props) {
   const bulletins = await getBulletins(searchaParams)

   return (
      <div className='flex flex-col'>
         <header className='sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4'>
            <h1 className='text-xl font-semibold'>Quản lý bài viết</h1>
            <Link
               href={`/${params.lang}/admin/bulletin/create`}
               className='ml-auto gap-1.5 text-sm'
            >
               <Button variant='outline' size='sm'>
                  <Share className='size-3.5' />
                  Đăng bài
               </Button>
            </Link>
         </header>
         <TablePattern<Bulletin>
            data={bulletins.content}
            columns={[
               {
                  title: 'Tên ảnh',
                  render: (image) => (
                     <div className='max-w-28 truncate'>{image.title}</div>
                  )
               },
               {
                  title: 'Tiêu đề',
                  render: (image) => (
                     <Image
                        className='w-40 rounded-md'
                        src={image?.imageUrl}
                        width={500}
                        height={250}
                        alt={image.title}
                     />
                  )
               },
               {
                  title: 'Mô tả',
                  render: (item) => (
                     <div className='w-80 truncate'>{item.description}</div>
                  )
               },
               {
                  title: 'Loại',
                  render: (item) => (
                     <div className={cn('text-left', renderStatus(item.category).color)}>
                        {renderStatus(item.category).status}
                     </div>
                  )
               },
               {
                  title: 'Actions',
                  render: (item) => (
                     <DropdownPattern
                        deleteId={item.id}
                        handleDelete={deleteBulletinById}
                        showUrl={`/${params.lang}/admin/bulletin/${item.id}/read`}
                        editUrl={`/${params.lang}/admin/bulletin/${item.id}/edit`}
                     >
                        <GripVertical />
                     </DropdownPattern>
                  )
               }
            ]}
         />
      </div>
   )
}
