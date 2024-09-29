import React from 'react'
import { getDictionary } from '@/lib/dictionary'
import { PageProps } from '@/types/utils'
import { Metadata } from 'next'
import Image from 'next/image'
import CCTC from '@/public/assets/cocauiit2.png'

type Props = {
   params: {
      langes: string
   }
}

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
   const { page } = await getDictionary(params.lang)

   return (
      <section className='relative pt-6 md:pt-20 mx-auto md:px-4 md:pb-24 h-dvh'>
         <h1 className='text-center md:pt-20 mb-8 py-2 text-4xl font-bold leading-none md:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 '>
            {page.organizational_structure}
         </h1>
         <Image
            className='w-full rounded-xl object-cover md:h-[70vh] '
            src={CCTC}
            alt='anh-co-cau-to-chuc'
            width={100000}
            height={100000}
         />
      </section>
   )
}
