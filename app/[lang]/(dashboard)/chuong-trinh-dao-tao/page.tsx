import { getDictionary } from '@/lib/dictionary'
import { cn } from '@/lib/utils'
import { PageProps } from '@/types/utils'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { header, navigation } = await getDictionary(params.lang)

   return {
      title: header.about_us,
      description: navigation.description,
      openGraph: {
         title: header.about_us,
         description: navigation.description,
         images: [
            {
               url: '/favicon.ico',
               width: 800,
               height: 600,
               alt: 'SIU IIT - Viện Công nghệ & Sáng tạo'
            }
         ]
      }
   }
}

export default async function ProgramingPage({ params }: PageProps) {
   const { page } = await getDictionary(params.lang)
   return (
      <div className='md:pt-10'>
         <div className='md:h-72 relative w-full overflow-hidden bg-blue-200/20 flex flex-col items-center justify-center rounded-lg'>
            <div className='absolute  pointer-events-none' />
            <h1
               className={cn(
                  'max-w-xs md:max-w-full text-center py-8 text-4xl font-bold leading-none md:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 '
               )}
            >
               CHƯƠNG TRÌNH ĐÀO TẠO
            </h1>
         </div>
         <div className='py-4 text-justify container md:max-w-5xl mx-auto lg:gap-8 xl:gap-0 lg:py-8'>
            <div className='space-y-6'>
               <h2 className='text-2xl font-bold text-center'>
                  {page.education.desc.title}
               </h2>
               <ul className='list-disc space-y-4 px-6'>
                  {page.education.desc.detail.map((item, index) => (
                     <li key={index}>{item}</li>
                  ))}
               </ul>
               {page.education.lists.map((list, index) => (
                  <div
                     key={index}
                     className='px-6  border border-black/40 shadow-md shadow-blue-200 rounded-lg p-2'
                  >
                     <p className='p-2 font-extrabold'>** {list.title}</p>
                     <ul className='list-decimal space-y-2'>
                        {list.detail.map((item, index) => (
                           <li key={index}>{item}</li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}
