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
import { Category, PageProps } from '@/types/utils'
import { UpcomingEvent } from './_components/upcoming-events'
import { getBulletins } from '@/actions/bulletin'
import { customSlugify } from '@/utils/slugify'
import { Button } from '@/components/ui/button'
import { ExternalLinkIcon } from 'lucide-react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'

export const metadata = {
   title: 'IIT - Trang chủ',
   description: 'IIT - Viện công nghệ & sáng tạo - SIU',
   metadataBase: new URL('https://iit.siu.edu.vn')
}

export default async function page({ params }: PageProps) {
   const { page } = await getDictionary(params.lang)

   const news = await getBulletins({
      category: [Category.NEWS],
      size: '6'
   })

   const announcements = await getBulletins({
      category: [Category.ANNOUNCEMENTS],
      size: '6'
   })

   const events = await getBulletins({
      category: [Category.EVENTS],
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
      <>
         <Banner />

         <Center dataCenter={dataCenter} title={page.home_page.title_center} />

         <div className='grid grid-cols-1 md:grid-cols-3 max-w-[87rem] mx-auto bg-sky-300/10 rounded-md cursor-pointer my-4'>
            <div className='md:col-span-2 p-1'>
               <Card>
                  <CardHeader className='flex justify-between'>
                     <CardTitle className='text-2xl font-semibold'>
                        {page.home_page.news}
                     </CardTitle>
                     <Link href={`/${params.lang}/ban-tin`}>
                        <Button
                           variant='outline'
                           className='inline-flex gap-1 items-center'
                        >
                           {page.home_page.read_more} <ExternalLinkIcon size={20} />
                        </Button>
                     </Link>
                  </CardHeader>
                  <ScrollArea className='h-[80vh] md:h-[70vh] w-full'>
                     <CardContent className='space-y-2'>
                        {news.content.map((movie) => (
                           <Link
                              href={`/${params.lang}/ban-tin/${customSlugify(movie.title)}__${movie.id}.html`}
                              key={movie.title}
                              className='flex items-start space-x-2 border border-blac/40 rounded-2xl transition duration-200 group bg-white hover:shadow-xl hover:bg-sky-300/10'
                           >
                              <Image
                                 src={movie.imageUrl}
                                 alt={movie.title}
                                 width={300}
                                 height={300}
                                 className='flex-none object-cover rounded-md bg-slate-100 h-32 w-36 md:w-40'
                              />
                              <div className='relative p-1'>
                                 <h2 className='font-semibold text-slate-900 truncate text-wrap'>
                                    {movie.title}
                                 </h2>
                                 <dl className='mt-2 flex flex-wrap text-sm leading-6 font-medium'>
                                    <div>
                                       <dt className='sr-only'>Date</dt>
                                       <dd className='px-1.5 ring-1 ring-slate-200 rounded'>
                                          {movie?.createdAt?.toLocaleDateString('vi-VN')}
                                       </dd>
                                    </div>

                                    <div className='w-full mt-2 font-normal'>
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
                  <CardHeader className='flex justify-between'>
                     <CardTitle className='text-2xl font-semibold'>
                        {page.home_page.notify}
                     </CardTitle>
                     <Link href={`/${params.lang}/ban-tin`}>
                        <Button
                           variant='outline'
                           className='inline-flex gap-1 items-center'
                        >
                           {page.home_page.read_more} <ExternalLinkIcon size={20} />
                        </Button>
                     </Link>
                  </CardHeader>
                  <ScrollArea className='h-[80vh] md:h-[70vh] w-full'>
                     <CardContent className='space-y-2'>
                        {announcements?.content?.map((movie) => (
                           <div key={movie.id} className='flex border rounded-lg'>
                              <div className='flex-none w-auto relative'>
                                 <Image
                                    src={movie.imageUrl}
                                    alt={movie.title}
                                    width={300}
                                    height={300}
                                    className='flex-none object-cover rounded-md size-32'
                                 />
                              </div>
                              <div className='flex-auto py-2'>
                                 <div className='flex flex-wrap'>
                                    <Link
                                       className='cursor-pointer'
                                       href={`/${params.lang}/ban-tin/${customSlugify(movie.title)}__${movie.id}.html`}
                                    >
                                       <h2 className='flex-auto  line-clamp-2 font-semibold text-slate-900 truncate text-wrap'>
                                          {movie.title}
                                       </h2>
                                    </Link>

                                    <div className='w-full flex-none text-sm font-medium mt-2 text-slate-400 line-clamp-2'>
                                       {movie.description}
                                    </div>
                                 </div>

                                 <p className='text-sm text-slate-700'>
                                    {movie.createdAt.toLocaleDateString('vi-VN')}
                                 </p>
                              </div>
                           </div>
                        ))}
                     </CardContent>
                  </ScrollArea>
               </Card>
            </div>
         </div>

         <div className='max-w-[87rem] mx-auto bg-sky-300/10 rounded-md cursor-pointer my-2'>
            <Card>
               <CardHeader>
                  <CardTitle className='text-2xl font-semibold'>
                     {page.home_page.upcoming}
                  </CardTitle>
               </CardHeader>
               <UpcomingEvent events={events.content} />

               <BentoGrid className='w-full mx-auto py-3'>
                  {events.content.map((item, i) => (
                     <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        url={`/${params.lang}/ban-tin/${customSlugify(item.title)}__${item.id}.html`}
                        image={item.imageUrl}
                        createdAt={item.createdAt}
                     />
                  ))}
               </BentoGrid>
            </Card>
         </div>
      </>
   )
}
