import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CHE from '@/public/assets/che.png'
import CELSS from '@/public/assets/celss.png'
import CEBC from '@/public/assets/cebc.png'
import Banner from './_components/banner'
import Center from './_components/center'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Category, DefaultSearchParams, PageProps } from '@/types/utils'
import { UpcomingEvent } from './_components/upcoming-events'
import { getBulletins } from '@/actions/bulletin'
import { customSlugify } from '@/utils/slugify'

interface Props extends PageProps {
   searchParams: DefaultSearchParams
}

export default async function page({ params, searchParams }: Props) {
   const { page } = await getDictionary(params.lang)

   const news = await getBulletins({
      category: Category.NEWS,
      size: '6'
   })

   const announcements = await getBulletins({
      category: Category.ANNOUNCEMENTS,
      size: '6'
   })

   const events = await getBulletins({
      category: Category.EVENTS,
      size: '6'
   })

   const dataCenter = [
      {
         urlImage: CHE,
         altImage: 'trung-tam-suc-khoe-moi-truong',
         name: page.home_page.title_center_health,
         ref: 'https://che.siu.edu.vn'
      },
      {
         urlImage: CEBC,
         altImage: 'trung-tam-khoi-nghiep',
         name: page.home_page.title_center_entrepreneurship,
         ref: 'https://siu.edu.vn'
      },
      {
         urlImage: CELSS,
         altImage: 'trung-tam-ki-nang-mem',
         name: page.home_page.title_center_leaning,
         ref: 'https://siu.edu.vn'
      }
   ]

   return (
      <div className='min-h-[200vh]'>
         <Banner />

         <Center dataCenter={dataCenter} />

         <div className='grid grid-cols-1 md:grid-cols-3 max-w-[87rem] mx-auto bg-sky-300/10 rounded-md cursor-pointer my-4'>
            <div className='md:col-span-2 p-1'>
               <Card>
                  <CardHeader>
                     <Link href={`/${params.lang}/ban-tin`}>
                        <CardTitle className='text-2xl font-semibold'>Tin tức</CardTitle>
                     </Link>
                  </CardHeader>
                  <ScrollArea className='h-screen w-full'>
                     <CardContent className='space-y-2'>
                        {news.content.map((movie) => (
                           <Link
                              href={`/${params.lang}/ban-tin/${customSlugify(movie.title)}__${movie.id}.html`}
                              key={movie.title}
                              className='flex items-start space-x-2 border border-blac/40 rounded-2xl transition duration-200 group bg-white hover:shadow-xl hover:bg-sky-300/10'
                           >
                              {movie.imageUrl && (
                                 <Image
                                    src={movie.imageUrl}
                                    alt={movie.title}
                                    width={300}
                                    height={300}
                                    className='flex-none object-cover rounded-md bg-slate-100 h-32 w-36 md:w-40'
                                 />
                              )}
                              <div className='min-w-0 relative flex-auto p-1'>
                                 <h2 className='font-semibold text-slate-900 truncate pr-20'>
                                    {movie.title}
                                 </h2>
                                 <dl className='mt-2 flex flex-wrap text-sm leading-6 font-medium'>
                                    <div>
                                       <dt className='sr-only'>Date</dt>
                                       <dd className='px-1.5 ring-1 ring-slate-200 rounded'>
                                          {movie?.createdAt?.toLocaleDateString()}
                                       </dd>
                                    </div>

                                    <div className='flex-none w-full mt-2 font-normal'>
                                       <dt className='sr-only'>Mô tả</dt>
                                       <dd className='text-slate-400 line-clamp-2'>
                                          {movie.description}
                                       </dd>
                                    </div>
                                 </dl>
                              </div>
                           </Link>
                        ))}
                     </CardContent>
                  </ScrollArea>
               </Card>
            </div>

            <div className='md:col-span-1 p-1'>
               <Card>
                  <CardHeader>
                     <Link href={`/${params.lang}/ban-tin`}>
                        <CardTitle className='text-2xl font-semibold'>
                           Thông báo
                        </CardTitle>
                     </Link>
                  </CardHeader>
                  <ScrollArea className='h-screen w-full'>
                     <CardContent className='space-y-2'>
                        {announcements?.content?.map((movie) => (
                           <div
                              key={movie.title}
                              className='relative cursor-default overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100'
                           >
                              <div className='p-4'>
                                 <h2 className='font-bold my-4 text-lg text-zinc-700 line-clamp-3'>
                                    {movie.title}
                                 </h2>

                                 <div className='flex flex-row justify-between items-center my-4'>
                                    <span className='text-sm text-gray-500 line-clamp-3'>
                                       {movie.description}
                                    </span>
                                 </div>
                                 <Link
                                    href={`/${params.lang}/ban-tin/${customSlugify(movie.title)}__${movie.id}.html`}
                                    className='relative z-10 px-6 py-2 bg-black/90 hover:bg-black text-white font-bold rounded-xl block text-xs'
                                 >
                                    Xem thêm
                                 </Link>
                              </div>
                           </div>
                        ))}
                     </CardContent>
                  </ScrollArea>
               </Card>
            </div>
         </div>
         <div className='max-w-[87rem] mx-auto bg-sky-300/10 rounded-md cursor-pointer my-4'>
            <Card>
               <CardHeader>
                  <CardTitle className='text-2xl font-semibold'>
                     Sự kiện sắp tới
                  </CardTitle>
               </CardHeader>
               <UpcomingEvent events={events.content} />
            </Card>
         </div>
      </div>
   )
}
