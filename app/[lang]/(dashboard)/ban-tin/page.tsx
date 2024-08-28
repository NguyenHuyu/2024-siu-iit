import React from 'react'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import Image from 'next/image'
import { FollowerPointerCard } from '@/components/ui/following-pointer'
import { getBulletins } from '@/actions/bulletin'

const blogContent = {
   slug: 'amazing-tailwindcss-grid-layouts',
   author: 'Manu Arora',
   date: '28th March, 2023',
   title: 'Amazing Tailwindcss Grid Layout Examples',
   description:
      'Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.',
   image: '/demo/thumbnail.png',
   authorAvatar: '/manu.png'
}

const TitleComponent = ({ title, avatar }: { title: string; avatar: string }) => (
   <div className='flex space-x-2 items-center'>
      <Image
         src={avatar}
         height='20'
         width='20'
         alt='thumbnail'
         className='rounded-full border-2 border-white'
      />
      <p>{title}</p>
   </div>
)

export default async function Page({ searchaParams }: any) {
   const bulletins = await getBulletins(searchaParams)

   return (
      <div className='py-4 md:py-10 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800'>
         <BackgroundBeamsWithCollision>
            <h2 className='text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight'>
               <div className='relative top-[50%] mx-auto inline-block w-max'>
                  <div className='absolute left-0 top-[5px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]'>
                     <span className=''> BẢN TIN</span>
                  </div>
                  <div className='relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4'>
                     <span className=''> BẢN TIN</span>
                  </div>
               </div>
            </h2>
         </BackgroundBeamsWithCollision>
         <div className='grid grid-cols-1 md:grid-cols-4 gap-4 container mx-auto'>
            {bulletins.content.map((bulletin) => (
               <div className='w-80 mx-auto' key={bulletin.id}>
                  <FollowerPointerCard
                     title={
                        <TitleComponent
                           title={blogContent.author}
                           avatar={blogContent.authorAvatar}
                        />
                     }
                  >
                     <div className='relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100'>
                        <div className='w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative'>
                           <Image
                              src={blogContent.image}
                              alt='thumbnail'
                              layout='fill'
                              objectFit='cover'
                              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
                           />
                        </div>
                        <div className=' p-4'>
                           <h2 className='font-bold my-4 text-lg text-zinc-700'>
                              {blogContent.title}
                           </h2>
                           <h2 className='font-normal my-4 text-sm text-zinc-500'>
                              {blogContent.description}
                           </h2>
                           <div className='flex flex-row justify-between items-center mt-10'>
                              <span className='text-sm text-gray-500'>
                                 {blogContent.date}
                              </span>
                              <div className='relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs'>
                                 Read More
                              </div>
                           </div>
                        </div>
                     </div>
                  </FollowerPointerCard>
               </div>
            ))}
         </div>
      </div>
   )
}
