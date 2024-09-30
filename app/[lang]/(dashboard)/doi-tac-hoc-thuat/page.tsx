import React from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import Image from 'next/image'

export default function page() {
   const items = [
      {
         title: 'The Dawn of Innovation',
         description: 'Explore the birth of groundbreaking ideas and inventions.'
      },
      {
         title: 'The Digital Revolution',
         description: 'Dive into the transformative power of technology.'
      },
      {
         title: 'The Dawn of Innovation',
         description: 'Explore the birth of groundbreaking ideas and inventions.'
      },
      {
         title: 'The Digital Revolution',
         description: 'Dive into the transformative power of technology.'
      },
      {
         title: 'The Dawn of Innovation',
         description: 'Explore the birth of groundbreaking ideas and inventions.'
      },
      {
         title: 'The Digital Revolution',
         description: 'Dive into the transformative power of technology.'
      }
   ]

   const Item = ({ item }: any) => {
      return (
         <div className='p-4 w-full md:w-1/3'>
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
               <div className='w-full'>
                  <div className='w-full flex p-2'>
                     <div className='p-2 '>
                        <Image
                           src='https://dnbvietnam.com/Uploads/images/news/lua-chon-doi-tac-trong-kinh-doanh-rat-quan-trong.jpg'
                           alt='author'
                           width={200}
                           height={200}
                           className='w-10 h-10 rounded-full overflow-hidden'
                        />
                     </div>
                     <div className='pl-2 pt-2 '>
                        <p className='font-bold'>Vipin Bansal</p>
                        <p className='text-xs'>2 June 2022</p>
                     </div>
                  </div>
               </div>

               <Image
                  src='https://dnbvietnam.com/Uploads/images/news/lua-chon-doi-tac-trong-kinh-doanh-rat-quan-trong.jpg'
                  alt='author'
                  width={200}
                  height={200}
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
               />

               <div className='p-4'>
                  <h2 className='tracking-widest text-xs title-font font-bold text-green-400 mb-1 uppercase '>
                     Web development
                  </h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                     This is a blog template
                  </h1>
                  <div className='flex items-center flex-wrap '>
                     <a href='/' className='text-green-800  md:mb-2 lg:mb-0'>
                        <p className='inline-flex items-center'>
                           Read Blog
                           <svg
                              className='w-4 h-4 ml-2'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              strokeWidth='2'
                              fill='none'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                           >
                              <path d='M5 12h14'></path>
                              <path d='M12 5l7 7-7 7'></path>
                           </svg>
                        </p>
                     </a>
                     <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                        <svg
                           className='w-4 h-4 mr-1'
                           viewBox='0 0 24 24'
                           fill='none'
                           stroke='currentColor'
                           strokeWidth='2'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
                        </svg>
                        24
                     </span>
                     <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                        <svg
                           className='w-4 h-4 mr-1'
                           stroke='currentColor'
                           strokeWidth='2'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           viewBox='0 0 24 24'
                        >
                           <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                        </svg>
                        89
                     </span>
                  </div>
               </div>
            </div>
         </div>
      )
   }

   return (
      <div className=''>
         <div className='md:h-96 w-full rounded-md flex md:items-center md:justify-center bg-black/[0.7] antialiased bg-grid-white/[0.02] relative overflow-hidden'>
            <Spotlight className='-top-40 left-0 md:left-60 md:-top-20' fill='white' />
            <div className='p-4 max-w-7xl mx-auto relative z-10  w-full md:pt-28'>
               <h1 className='py-4 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 bg-opacity-50'>
                  ĐỐI TÁC HỌC THUẬT
               </h1>
            </div>
         </div>
         <div className='max-w-5xl mx-auto pt-10 flex flex-wrap -m-4'>
            {items.map((item, i) => (
               <Item item={item} key={i} />
            ))}
         </div>
      </div>
   )
}
