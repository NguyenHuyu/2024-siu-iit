'use client'
import React from 'react'
import Pagination from '@/components/pattern/pagination-pattern'
import SizePattern from '@/components/pattern/size-pattern'
import { useParams } from 'next/navigation'

interface PaginationSizePatternProps {
   data: { content: any[]; page: number; totalPages: number }
}

export default function PaginationSizePattern({ data }: PaginationSizePatternProps) {
   const params = useParams()

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
               {params.lang === 'vi'
                  ? `Có ${data?.content?.length} kết quả tìm kiếm`
                  : `There are ${data?.content?.length} search results`}
            </p>
         </div>
      </div>
   )
}
