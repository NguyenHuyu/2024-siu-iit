'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface CarouselProps {
   images: string[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
   const [currentIndex, setCurrentIndex] = useState(0)

   useEffect(() => {
      if (images.length > 2) {
         const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
               prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
         }, 5000)
         return () => clearInterval(interval)
      }
   }, [currentIndex, images.length])

   return (
      <div className='relative w-full max-w-5xl mx-auto'>
         <div className='overflow-hidden rounded-lg'>
            <div
               className='flex transition-transform duration-500'
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
               {images.map((src, index) => (
                  <div key={index} className='flex-none w-full h-64 relative'>
                     <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        layout='fill'
                        objectFit='cover'
                        className='rounded-lg'
                     />
                  </div>
               ))}
            </div>
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
