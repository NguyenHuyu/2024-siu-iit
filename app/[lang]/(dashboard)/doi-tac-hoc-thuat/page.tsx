import React from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import Image from 'next/image'
import { getBulletins } from '@/actions/bulletin'
import { Category, PageProps } from '@/types/utils'
import PaginationSizePattern from '@/components/pattern/paging-size-pattern'
import { Bulletin } from '@prisma/client'
import { Link } from 'next-view-transitions'
import { customSlugify } from '@/utils/slugify'
import { getDictionary } from '@/lib/dictionary'

export default async function Page({ params, searchParams }: PageProps) {
   const { header, page } = await getDictionary(params.lang)

   const bulletins = await getBulletins({
      ...searchParams,
      size: '9',
      category: [Category.ACADEMIC]
   })

   const Item = ({ item }: { item: Bulletin }) => {
      return (
         <div className='p-4 w-full md:w-1/3'>
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
               <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={400}
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
               />
               <div className='p-4'>
                  <h1 className='line-clamp-1  text-lg title-font font-bold text-green-400 mb-1'>
                     {item.title}
                  </h1>
                  <h2 className='title-font text-sm font-medium text-gray-900 mb-3 line-clamp-1'>
                     {item.description}
                  </h2>
                  <div className='flex items-center justify-between '>
                     <Link
                        href={`/${params.lang}/doi-tac-hoc-thuat/${customSlugify(item.title)}__${item.id}.html`}
                        className='text-green-600  md:mb-2 lg:mb-0'
                     >
                        <p className='inline-flex items-center'>
                           {page.home_page.read_more}
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
                     </Link>
                     <p className='text-muted-foreground'>
                        {item.createdAt.toLocaleDateString()}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      )
   }

   return (
      <div className=''>
         <div className='md:h-96 w-full rounded-md flex md:items-center md:justify-center bg-blue-200/20 antialiased relative overflow-hidden'>
            <Spotlight className='-top-40 left-0 md:left-60 md:-top-20' fill='white' />
            <div className='p-4 max-w-7xl mx-auto relative z-10 w-full md:pt-20'>
               <h1 className='py-4 text-4xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600  uppercase'>
                  {header.academic_partners}
               </h1>
            </div>
         </div>
         <div className='max-w-5xl mx-auto pt-10 flex flex-wrap -m-4'>
            {bulletins.content.map((item, i) => (
               <Item item={item} key={i} />
            ))}
         </div>
         <div className='max-w-5xl mx-auto container py-10'>
            <PaginationSizePattern data={bulletins} />
         </div>
      </div>
   )
}
