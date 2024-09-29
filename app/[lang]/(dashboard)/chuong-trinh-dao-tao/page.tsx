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
      <div className=' md:pt-32'>
         <div className='p-4 max-w-7xl  mx-auto relative z-10 w-full md:pt-0'>
            <h1 className='text-4xl md:text-5xl font-bold text-center uppercase'>
               {page.education.title}
            </h1>
         </div>
         <div className='container md:max-w-5xl mx-auto lg:gap-8 xl:gap-0 lg:py-8'>
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
