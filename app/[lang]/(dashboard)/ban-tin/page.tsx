import React, { Suspense } from 'react'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import Image from 'next/image'
import { getBulletins } from '@/actions/bulletin'
import { Category, DefaultSearchParams, PageProps } from '@/types/utils'
import { Link } from 'next-view-transitions'
import { customSlugify } from '@/utils/slugify'
import PaginationSizePattern from '@/components/pattern/paging-size-pattern'
import InputPattern from '@/components/pattern/input-search-pattern'

interface Props extends PageProps {
   searchParams: DefaultSearchParams
}

export default async function Page({ searchParams, params }: Props) {
   const bulletins = await getBulletins({
      ...searchParams,
      category: [Category.NEWS, Category.ANNOUNCEMENTS, Category.EVENTS]
   })

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
         <div className='pb-10 mx-auto container'>
            <Suspense>
               <InputPattern
                  listSelectOptions={[{ name: 'Tìm kiếm', value: 'search' }]}
               />
            </Suspense>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-4 gap-4 container mx-auto'>
            {bulletins.content.map((bulletin) => (
               <div className='w-80 mx-auto' key={bulletin.id}>
                  <div className='relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100'>
                     <div className='w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative'>
                        <Image
                           src={bulletin.imageUrl}
                           alt='thumbnail'
                           width={700}
                           height={700}
                           className={`group-hover:scale-95 h-40 group-hover:rounded-2xl transform transition duration-200 object-cover`}
                        />
                     </div>
                     <div className='p-4'>
                        <h2 className='font-bold my-4 text-lg text-zinc-700 line-clamp-2'>
                           {bulletin.title}
                        </h2>
                        <h2 className='line-clamp-4 text-justify font-normal my-4 text-sm text-zinc-500'>
                           {bulletin.description}
                        </h2>
                        <div className='flex flex-row justify-between items-center mt-10'>
                           <p className='text-sm text-gray-500 '>
                              {bulletin.createdAt.toLocaleDateString()}
                           </p>
                           <Link
                              href={`/${params.lang}/ban-tin/${customSlugify(bulletin.title)}__${bulletin.id}.html`}
                              className='relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs'
                           >
                              Xem thêm
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <div className='mx-auto container py-10'>
            <PaginationSizePattern data={bulletins} />
         </div>
      </div>
   )
}
