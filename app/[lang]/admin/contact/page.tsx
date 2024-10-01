import React from 'react'
import { GripVertical } from 'lucide-react'
import { DefaultSearchParams, PageProps } from '@/types/utils'
import TablePattern from '@/components/table-pattern'
import DropdownPattern from '@/components/dropdown-pattern'
import { ReportContact } from '@prisma/client'
import PaginationSizePattern from '@/components/pattern/paging-size-pattern'
import { deleteContactById, getContacts } from '@/actions/contact'

interface Props extends PageProps {
   searchaParams: DefaultSearchParams
}

export default async function Page({ params, searchParams }: Props) {
   const contacts = await getContacts(searchParams)

   return (
      <div className='flex flex-col'>
         <header className='sticky top-0 z-10 flex h-[57px] items-center gap-1 bg-background px-4'>
            <h1 className='text-xl font-semibold'>Quản lý thông tin liên hệ</h1>
         </header>

         <TablePattern<ReportContact>
            data={contacts.content}
            columns={[
               {
                  title: 'Email',
                  render: (image) => <div className='truncate'>{image.email}</div>
               },
               {
                  title: 'Họ tên',
                  render: (image) => <div className='max-w-40 truncate'>{image.name}</div>
               },
               {
                  title: 'Số điện thoại',
                  render: (image) => (
                     <div className='max-w-40 truncate'>{image.phone}</div>
                  )
               },
               {
                  title: 'Nội dung',
                  render: (image) => <div className='max-w-28 truncate'>{image.body}</div>
               },
               {
                  title: 'Actions',
                  render: (item) => (
                     <DropdownPattern
                        deleteId={item.id}
                        handleDelete={deleteContactById}
                        showUrl={`/${params.lang}/admin/contact/${item.id}`}
                     >
                        <GripVertical />
                     </DropdownPattern>
                  )
               }
            ]}
         />
         <div className='mx-auto container py-10'>
            <PaginationSizePattern data={contacts} />
         </div>
      </div>
   )
}
