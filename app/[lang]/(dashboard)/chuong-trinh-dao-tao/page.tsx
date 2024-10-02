import { getDictionary } from '@/lib/dictionary'
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
               url: '/opengraph-image.jpg',
               width: 800,
               height: 600,
               alt: 'SIU IIT - Viện Công nghệ & Sáng tạo'
            }
         ]
      }
   }
}

export default async function ProgramingPage({ params }: PageProps) {
   const { header, page } = await getDictionary(params.lang)
   return (
      <div className=''>
         <div className='md:h-60 w-full rounded-md flex md:items-center md:justify-center bg-blue-200/20 antialiased relative overflow-hidden'>
            <div className='p-4 max-w-7xl mx-auto relative z-10 w-full md:pt-14'>
               <h1 className='py-4 text-4xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600  uppercase'>
                  {header.education_program}
               </h1>
            </div>
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
