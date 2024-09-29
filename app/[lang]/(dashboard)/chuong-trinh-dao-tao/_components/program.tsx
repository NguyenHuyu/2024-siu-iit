'use client'
import React from 'react'
import { Element } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Locale } from '@/lib/i18n.config'

type Props = {
   languageText: Locale | undefined
}

const Programing = ({ languageText }: Props) => {
   const [introRef, introInView] = useInView({
      triggerOnce: true,
      threshold: 0.2
   })

   const [program1Ref, program1InView] = useInView({
      triggerOnce: true,
      threshold: 0.2
   })

   const [program2Ref, program2InView] = useInView({
      triggerOnce: true,
      threshold: 0.2
   })
   const [program3Ref, program3InView] = useInView({
      triggerOnce: true,
      threshold: 0.2
   })

   return (
      <div>
         <Element name='intro' className='container mx-auto px-4'>
            <div
               style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 1s, transform 1s',
                  ...(introInView && {
                     opacity: 1,
                     transform: 'translateY(0)'
                  })
               }}
               className=' rounded-lg p-2 md:p-6 w-full flex gap-4 md:gap-10 items-center flex-col'
               ref={introRef}
            >
               <div className='flex flex-col items-center justify-center space-y-4'>
                  <h1 className='text-[26px] md:text-[58px] font-bold mb-4 text-center max-w-3xl md:w-full'>
                     {languageText?.education.title}
                  </h1>
               </div>
               <div>
                  {languageText?.education.sub_title.map((item) => (
                     <p key={item} className='text-gray-700 mb-2 text-justify'>
                        {item}
                     </p>
                  ))}
               </div>
               <Link
                  href='/vi/lien-he'
                  className='text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-14 rounded'
               >
                  {languageText?.education.contact}
               </Link>
               <Link
                  href='/vi/khoa-hoc'
                  className='text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-8 rounded'
               >
                  {languageText?.education.course}
               </Link>
            </div>
         </Element>

         <Element name='programs' className='container mx-auto px-4 pt-8'>
            <h2 className='text-[24px] md:text-[58px] font-bold mb-8 text-center fade-in-5'>
               {' '}
               {languageText?.education.description}
            </h2>
            <div className='flex flex-wrap -mx-4 text-justify'>
               <div className='w-full md:w-1/3 lg:w-1/3 mb-8 px-4'>
                  <div
                     style={{
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'opacity 0.5s, transform 0.5s',
                        ...(program1InView && {
                           opacity: 1,
                           transform: 'translateY(0)'
                        })
                     }}
                     className='bg-white shadow-lg rounded-lg p-6 h-full'
                     ref={program1Ref}
                  >
                     <h3 className='text-base md:text-xl font-bold mb-4 text-justify'>
                        {languageText?.education.description_1}
                     </h3>
                     {languageText?.education.sub_description_1.map((item) => (
                        <p key={item} className='text-gray-700 mb-6'>
                           {item}
                        </p>
                     ))}
                  </div>
               </div>
               <div className='w-full md:w-1/3 lg:w-1/3 mb-8 px-4'>
                  <div
                     style={{
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'opacity 0.5s, transform 0.5s',
                        ...(program2InView && {
                           opacity: 1,
                           transform: 'translateY(0)'
                        })
                     }}
                     className='bg-white shadow-lg rounded-lg p-6 h-full'
                     ref={program2Ref}
                  >
                     <h3 className='text-base md:text-xl font-bold mb-4 text-justify'>
                        {languageText?.education.description_2}
                     </h3>
                     {languageText?.education.sub_description_2.map((item) => (
                        <p key={item} className='text-gray-700 mb-6'>
                           {item}
                        </p>
                     ))}
                  </div>
               </div>
               <div className='w-full md:w-1/3 lg:w-1/3 mb-8 px-4'>
                  <div
                     style={{
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'opacity 0.5s, transform 0.5s',
                        ...(program3InView && {
                           opacity: 1,
                           transform: 'translateY(0)'
                        })
                     }}
                     className='bg-white shadow-lg rounded-lg p-6 h-full'
                     ref={program3Ref}
                  >
                     <h3 className='text-base md:text-xl font-bold mb-4 text-justify'>
                        {languageText?.education.description_3}
                     </h3>
                     {languageText?.education.sub_description_3.map((item) => (
                        <p key={item} className='text-gray-700 mb-6'>
                           {item}
                        </p>
                     ))}
                  </div>
               </div>
            </div>
         </Element>
      </div>
   )
}

export default Programing
