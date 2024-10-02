'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { LampContainer } from '@/components/ui/lamp'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Image, { StaticImageData } from 'next/image'
import { Link } from 'next-view-transitions'
import { ExternalLinkIcon } from 'lucide-react'

interface CenterProps {
   dataCenter: {
      urlImage: StaticImageData
      name: string
      altImage: string
      ref: string
   }[]
}

export default function Center({ dataCenter }: CenterProps) {
   return (
      <div className='w-full'>
         <LampContainer>
            <motion.h2
               initial={{ opacity: 0.7, y: 30 }}
               whileInView={{ opacity: 1, y: 10 }}
               transition={{
                  delay: 0,
                  duration: 1,
                  ease: 'easeInOut'
               }}
               className='bg-gradient-to-br from-black to-slate-500 py-4 bg-clip-text text-center text-2xl md:text-4xl font-medium tracking-tight text-transparent lg:text-6xl'
            >
               CÁC ĐƠN VỊ TRỰC THUỘC
            </motion.h2>
         </LampContainer>
         <ScrollArea className='w-full md:w-full whitespace-nowrap p-2 md:p-4'>
            <div className='flex justify-center items-start md:items-center w-full md:w-80 lg:w-[30rem] space-x-4 md:p-4 mx-auto'>
               {dataCenter.map((artwork) => (
                  <figure
                     key={artwork.name}
                     className='shrink-0 rounded-lg p-2 w-72 md:w-80 lg:w-full border shadow-md shadow-blue-200 hover:shadow-blue-300'
                  >
                     <blockquote>
                        <Image
                           src={artwork.urlImage}
                           alt={artwork.name}
                           className='w-full h-16 md:h-20 rounded-md object-contain'
                           width={400}
                           height={400}
                        />
                        <div className='relative z-20 mt-4 flex flex-row items-center'>
                           <div className='flex items-center justify-between gap-1 w-full'>
                              <p className='truncate text-sm md:text-base leading-[1.6] text-gray-400 font-normal'>
                                 {artwork.name}
                              </p>
                              <Link
                                 href={artwork.ref}
                                 target='_blank'
                                 className='hover:scale-105 hover:-translate-y-2 duration-300'
                              >
                                 <ExternalLinkIcon className='text-black/30' />
                              </Link>
                           </div>
                        </div>
                     </blockquote>
                  </figure>
               ))}
            </div>
            <ScrollBar className='bg-blue-500/20' orientation='horizontal' />
         </ScrollArea>
      </div>
   )
}
