/* eslint-disable react-hooks/rules-of-hooks */
// import { getBanner } from '@/actions/Banners/HomeBanner'
// import { getAllAnnouncements } from '@/actions/announcements.action'
// import { getAllEvents } from '@/actions/events.action'
// import { getAllNews } from '@/actions/news.action'
// import Featured from '@/components/Featured'
// import News from '@/components/News/News'
// import Notify from '@/components/Notify/Notify'
// import Typewriters from '@/components/Typewriter'
// import Upcoming from '@/components/Upcoming/Upcoming'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CHE from '@/public/assets/che.png'
import CELSS from '@/public/assets/celss.png'
import CEBC from '@/public/assets/cebc.png'
import Carousel from '@/components/carousel'
// import { getAllBanner } from '@/actions/banner.action'
// import News from '@/components/News/ListNews'
// import { getAllNews } from '@/actions/news.action'
// import Notify from '@/components/Announcement/ListAnnouncement'
// import { getAllAnnounmencent } from '@/actions/announmencement.action'
// import Upcoming from '@/components/Events/ListEvent'
// import { getAllEvent } from '@/actions/event.action'

type Props = {
   searchParams: {
      filter: string
      page_news: string
      page_announcements: string
      page_events: string
   }
   params?: any
}

export default async function page({ params, searchParams }: Props) {
   const { page } = await getDictionary(params.lang)

   // const bannerData = await getAllBanner()

   // const newsData = await getAllNews({
   //    currentPage: searchParams.page_news,
   //    currentfilter: searchParams.filter
   // })
   // const announcementData = await getAllAnnounmencent({
   //    currentPage: searchParams.page_announcements,
   //    currentfilter: searchParams.filter
   // })
   // const eventData = await getAllEvent({
   //    currentPage: searchParams.page_events,
   //    currentfilter: searchParams.filter
   // })

   const dataCenter = [
      {
         urlImage: CHE,
         altImage: 'trung-tam-suc-khoe-moi-truong',
         title: page.home_page.title_center_health,
         ref: 'https://che.siu.edu.vn'
      },
      {
         urlImage: CEBC,
         altImage: 'trung-tam-khoi-nghiep',
         title: page.home_page.title_center_entrepreneurship,
         ref: 'https://siu.edu.vn'
      },
      {
         urlImage: CELSS,
         altImage: 'trung-tam-ki-nang-mem',
         title: page.home_page.title_center_leaning,
         ref: 'https://siu.edu.vn'
      }
   ]
   const images = [
      'https://via.placeholder.com/800x400.png?text=Slide+1',
      'https://via.placeholder.com/800x400.png?text=Slide+2',
      'https://via.placeholder.com/800x400.png?text=Slide+3',
      'https://via.placeholder.com/800x400.png?text=Slide+4',
      'https://via.placeholder.com/800x400.png?text=Slide+5'
   ]

   return (
      <div className='min-h-screen'>
         <div className='max-w-5xl mx-auto py-8'>
            <h1 className='text-3xl font-bold mb-4 text-center hidden md:block'>
               Image Carousel
            </h1>
            <Carousel images={images} />
         </div>
         {/* <section>
            <div className='flex items-center justify-center flex-col bg-[#E5E5E5] '>
               <div className='bg-[#F4F5FA] p-10 rounded-xl w-full'>
                  <div className=' text-center text-4xl font-medium'>
                     <Typewriters text={page.home_page.title_center} />
                  </div>
                  <div className='flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10'>
                     {dataCenter.map((item) => (
                        <div
                           key={item.ref}
                           className='bg-[#f4e4aa] rounded-xl md:max-w-[300px]'
                        >
                           <div className='flex flex-col p-10 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto'>
                              <Image
                                 src={item.urlImage}
                                 alt={item.altImage}
                                 className='w-[30rem] object-cover'
                                 width={108000000}
                                 layout='responsive'
                                 objectFit='cover'
                                 priority={true}
                                 height={8000000}
                              />
                              <div className='mt-10 font-semibold text-lg'>
                                 {item.title}
                              </div>
                              <button className='bg-[#F4F5FA] px-2 py-1.5 rounded-lg  border border-[#F0F0F6] shadow-md mt-4 hover:shadow-2xl duration-300'>
                                 <Link href={item.ref}>{page.home_page.read_more}</Link>
                              </button>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
         <section className='flex flex-col mt-[30px] md:flex-row md:justify-center md:gap-2 md:h-[80vh] lg:pb-[100px] xl:pb-[50px] lg:max-w-[90rem]  mx-auto '>
            <News params={params} data={newsData} />
            <Notify params={params} data={announcementData} />
         </section>
         <Upcoming params={params} data={eventData} /> */}
      </div>
   )
}
