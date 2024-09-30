import React from 'react'
import Carousel from '@/components/carousel'
import { getBanners } from '@/actions/banner'

export default async function Banner() {
   const images = await getBanners()

   return (
      <div className='w-full mx-auto lg:max-w-full md:pt-4 lg:pt-8'>
         <Carousel images={images} />
      </div>
   )
}
