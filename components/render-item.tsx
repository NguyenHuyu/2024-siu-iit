'use client'
import { Bulletin } from '@prisma/client'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Editor from './tiptap/editor'

export default function RenderItem({ bulletin }: { bulletin: Bulletin }) {
   return (
      <div className='py-6 px-4 sm:p-6 md:pt-20 md:px-8 container'>
         <div className='max-w-4xl items-center mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-10 lg:grid-cols-2'>
            <div className='relative p-3 rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none'>
               <h1 className='mt-1 text-lg font-semibold text-black md:text-3xl '>
                  {bulletin.title}
               </h1>
               <dl className='mt-4 gap-3 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2'>
                  <Calendar />
                  {bulletin.createdAt.toLocaleDateString('vi-VN')}
               </dl>
               <p className='mt-4 text-base text-justify leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400'>
                  {bulletin.description}
               </p>
            </div>
            <div className='p-3 lg:gap-6 lg:mb-0 rounded-md'>
               <Image
                  src={bulletin.imageUrl}
                  alt={bulletin.title}
                  width={900}
                  height={1000}
                  className=' w-full md:h-80 object-contain rounded-lg sm:h-72'
               />
            </div>
         </div>

         <div className='max-w-4xl mx-auto lg:max-w-5xl lg:gap-x-20 p-3'>
            <Editor body={bulletin.body} editable={false} />
         </div>
      </div>
   )
}
