import React from 'react'
import { Share } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'next-view-transitions'
import { PageProps } from '@/types/utils'

export default function Page({ params }: PageProps) {
   return (
      <div className='flex flex-col'>
         <header className='sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4'>
            <h1 className='text-xl font-semibold'>Quản lý ảnh</h1>
            <Link
               href={`/${params.lang}/admin/image/create`}
               className='ml-auto gap-1.5 text-sm'
            >
               <Button variant='outline' size='sm'>
                  <Share className='size-3.5' />
                  Tải ảnh
               </Button>
            </Link>
         </header>
         <main className='grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3'>
            OK
         </main>
      </div>
   )
}
