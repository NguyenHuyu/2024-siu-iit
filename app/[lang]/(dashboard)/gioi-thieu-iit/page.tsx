import React from 'react'
import { getDictionary } from '@/lib/dictionary'
import { PageProps } from '@/types/utils'
import { Building2Icon, ThumbsUpIcon, Users2Icon } from 'lucide-react'
import { Metadata } from 'next'

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

export default async function Page({ params }: PageProps) {
   const {
      page: { iit }
   } = await getDictionary(params.lang)

   return (
      <div className='md:min-h-screen py-8 md:py-20'>
         <section className='dark:bg-gray-900'>
            <div className='container mx-auto lg:gap-8 xl:gap-0 lg:py-16 '>
               <div className='mr-auto place-self-center'>
                  <h1 className='text-center mb-8 py-2 text-4xl font-bold leading-none md:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 '>
                     {iit.title}
                  </h1>
                  {iit.description.map((item) => (
                     <div
                        key={item}
                        className='mb-1 font-normal text-muted-foreground lg:mb-2 md:text-lg lg:text-xl text-justify'
                     >
                        {item}
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <div className='container text-justify py-4'>
            <div className='grid gap-12'>
               <h2 className='text-3xl font-bold lg:text-4xl pt-6 hidden md:block'>
                  {iit.title}
               </h2>
               <div className='space-y-6 lg:space-y-10'>
                  <div className='flex'>
                     <Building2Icon className='flex-shrink-0 mt-2 h-6 w-6' />
                     <div className='ms-5 sm:ms-8'>
                        <h3 className='text-base sm:text-lg md:text-2xl font-semibold'>
                           {iit.role}
                        </h3>
                        <p className='mt-1 text-muted-foreground'>{iit.sub_role}</p>
                     </div>
                  </div>
                  <div className='flex'>
                     <Users2Icon className='flex-shrink-0 mt-2 h-6 w-6' />
                     <div className='ms-5 sm:ms-8'>
                        <h3 className='text-base sm:text-lg font-semibold md:text-2xl'>
                           {iit.function}
                        </h3>
                        {iit.sub_function?.map((item) => (
                           <p key={item} className='text-justify text-muted-foreground'>
                              {item}
                           </p>
                        ))}
                     </div>
                  </div>
                  <div className='flex'>
                     <ThumbsUpIcon className='flex-shrink-0 mt-2 h-6 w-6' />
                     <div className='ms-5 sm:ms-8'>
                        <h3 className='text-base sm:text-lg font-semibold md:text-2xl'>
                           {iit.duty}
                        </h3>
                        <div className='text-muted-foreground'>
                           {iit.detail_duty}
                           <br />
                           {iit.sub_duty?.map((item: any, index: any) => (
                              <div key={index} className='space-y-2'>
                                 <span className='text-[20px] font-semibold'>
                                    {item.sub_title}
                                 </span>
                                 {item.sub_description.map((item: any, index: any) => (
                                    <p key={item}>{item}</p>
                                 ))}
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  {/* End Icon Block */}
               </div>
            </div>
         </div>
      </div>
   )
}
