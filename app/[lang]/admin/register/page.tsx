import { deleteUser, getUser } from '@/actions/auth'
import DropdownPattern from '@/components/dropdown-pattern'
import { SignupForm } from '@/components/form/register-form'
import TablePattern from '@/components/table-pattern'
import { Button } from '@/components/ui/button'
import { PageProps } from '@/types/utils'
import { User } from '@prisma/client'
import { GripVertical, Plus } from 'lucide-react'
import { Link } from 'next-view-transitions'
import React from 'react'

export default async function Page({ params }: PageProps) {
   const users = await getUser()

   return (
      <div className='flex flex-col'>
         <header className='sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4'>
            <h1 className='text-xl font-semibold'>Quản lý người dùng</h1>
            <Link
               href={`/${params.lang}/admin/register/create`}
               className='ml-auto gap-1.5 text-sm'
            >
               <Button variant='outline' size='sm'>
                  <Plus className='size-3.5' />
                  Tạo mới
               </Button>
            </Link>
         </header>
         <TablePattern<User>
            data={users}
            columns={[
               {
                  title: 'Email',
                  render: (image) => image.email
               },
               {
                  title: 'Họ tên',
                  render: (image) => <div className='max-w-28 truncate'>{image.name}</div>
               },
               {
                  title: 'Vai trò',
                  render: (image) => <div className='max-w-28 truncate'>{image.role}</div>
               },
               {
                  title: 'Actions',
                  render: (item) => (
                     <DropdownPattern deleteId={item.id} handleDelete={deleteUser}>
                        <GripVertical />
                     </DropdownPattern>
                  )
               }
            ]}
         />
      </div>
   )
}
