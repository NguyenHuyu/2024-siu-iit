import React from 'react'
import Image from 'next/image'
import { getDictionary } from '@/lib/dictionary'
import { PageProps } from '@/types/utils'
import { Timeline } from '@/components/ui/timeline'
import SVG1 from '@/public/assets/2.svg'
import SVG2 from '@/public/assets/3.svg'
import SVG3 from '@/public/assets/4.svg'
import SVG4 from '@/public/assets/5.svg'
import SVG5 from '@/public/assets/1.svg'
import { Metadata } from 'next'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const { navigation, header } = await getDictionary(params.lang)

   return {
      title: header.vision_mission,
      description: navigation.description,
      openGraph: {
         title: header.vision_mission,
         description: navigation.description,
         images: [
            {
               url: '/favicon.ico',
               width: 800,
               height: 600
            }
         ]
      }
   }
}

export default async function Page({ params }: PageProps) {
   const {
      page: { mission_vision }
   } = await getDictionary(params.lang)

   const data = [
      {
         title: mission_vision?.mission,
         content: (
            <div className='w-full text-2xl leading-10'>
               {mission_vision?.sub_mission}
            </div>
         )
      },
      {
         title: mission_vision?.vission,
         content: (
            <div className='w-full text-2xl leading-10'>
               {mission_vision?.sub_vission}
            </div>
         )
      },
      {
         title: mission_vision?.scope,
         content: (
            <div>
               <div className='w-full text-2xl leading-10'>
                  {mission_vision?.sub_scope}
               </div>
               <div className='grid md:grid-cols-2 py-5'>
                  <div className='flex items-center justify-start '>
                     <Image
                        src={SVG1}
                        width={100}
                        height={100}
                        alt='SIU - IIT'
                        className='w-40'
                     />
                     <p className='text-[20px] font-semibold '>
                        {mission_vision?.scope1}
                     </p>
                  </div>
                  <div className='flex items-center justify-start '>
                     <Image
                        src={SVG2}
                        width={100}
                        height={100}
                        alt='SIU - IIT'
                        className='w-40'
                     />

                     <p className='text-[20px] font-semibold'>{mission_vision?.scope2}</p>
                  </div>
                  <div className='flex items-center justify-start'>
                     <Image
                        src={SVG3}
                        width={100}
                        height={100}
                        alt='SIU - IIT'
                        className='w-40'
                     />
                     <p className='text-[20px] font-semibold'>{mission_vision?.scope3}</p>
                  </div>
                  <div className='flex items-center justify-start '>
                     <Image
                        src={SVG4}
                        width={100}
                        height={100}
                        alt='SIU - IIT'
                        className='w-40'
                     />
                     <p className='text-[20px] font-semibold'>{mission_vision?.scope4}</p>
                  </div>
                  <div className='flex items-center justify-start '>
                     <Image
                        src={SVG5}
                        width={1000}
                        height={10000}
                        alt='SIU - IIT'
                        className='w-40'
                     />
                     <p className='text-[20px] font-semibold'>{mission_vision?.scope5}</p>
                  </div>
               </div>
            </div>
         )
      }
   ]
   return (
      <div className='py-8 md:py-20'>
         <div className='container mx-auto lg:gap-8 xl:gap-0 lg:py-16 '>
            <h1 className='text-center py-2 text-4xl font-bold leading-none md:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 '>
               {mission_vision.vission} - {mission_vision.mission}
            </h1>
         </div>

         <Timeline data={data} />
      </div>
   )
}
