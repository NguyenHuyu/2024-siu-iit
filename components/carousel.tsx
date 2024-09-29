'use client'
import { useEffect, useState } from 'react'
import NextImage from 'next/image'
import { Banner } from '@prisma/client'

interface CarouselProps {
   images: Banner[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
   const [currentIndex, setCurrentIndex] = useState(0)

   useEffect(() => {
      if (images.length > 1) {
         const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
               prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
         }, 5000)
         return () => clearInterval(interval)
      }
   }, [currentIndex, images.length])

   return (
      <div className='relative w-full mx-auto'>
         <div
            className='flex transition-transform duration-500'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
         >
            {images.map((src, index) => (
               <div
                  key={index}
                  className='flex-none h-full sm:h-72 w-full md:h-[18rem] lg:h-[30rem] xl:h-[40rem] 2xl:h-full  relative'
               >
                  <NextImage
                     src={src.imageUrl}
                     alt={`Slide ${index + 1}`}
                     width={4000}
                     height={4000}
                     className='md:rounded-lg h-full sm:h-72 w-full md:h-[18rem] lg:h-[30rem] xl:h-[40rem] 2xl:h-full  object-fill'
                  />
               </div>
            ))}
         </div>
         <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
            {images.map((_, index) => (
               <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                     currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
                  }`}
               ></button>
            ))}
         </div>
      </div>
   )
}

export default Carousel
