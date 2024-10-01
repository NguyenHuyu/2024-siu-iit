'use client'
import React from 'react'
import Pagination from '@/components/pattern/pagination-pattern'
import SizePattern from '@/components/pattern/size-pattern'

interface PaginationSizePatternProps {
   data: { content: any[]; page: number; totalPages: number }
}

export default function PaginationSizePattern({ data }: PaginationSizePatternProps) {
   return (
      <div className='flex justify-between px-3 items-center w-full'>
         {data?.content?.length > 0 && (
            <div className='flex justify-center items-center'>
               <Pagination pages={data.page} pageSize={data.totalPages} />
            </div>
         )}
         <div className='flex flex-col items-center justify-around'>
            {data?.content?.length > 0 && <SizePattern />}
            <p className='text-muted-foreground text-sm inline-flex'>
               Có <span className='font-bold px-1'>{data?.content?.length}</span> kết quả
               tìm kiếm
            </p>
         </div>
      </div>
   )
}
