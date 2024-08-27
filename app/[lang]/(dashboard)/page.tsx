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
import { PageProps } from '@/types/utils'
import { UpcomingEvent } from './_components/upcoming-events'

export default async function page({ params }: PageProps) {
   const { page } = await getDictionary(params.lang)

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

   const movies = [
      {
         image: 'https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         title: 'Inception',
         starRating: 4.8,
         rating: 'PG-13',
         year: 2010,
         genre: 'Sci-Fi, Thriller',
         runtime: '148 min',
         cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy'
      },
      {
         image: 'https://images.unsplash.com/photo-1724277228191-0cf4c80ee56f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
         title: 'Interstellar',
         starRating: 4.6,
         rating: 'PG-13',
         year: 2014,
         genre: 'Sci-Fi, Adventure, Drama',
         runtime: '169 min',
         cast: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine'
      },
      {
         image: 'https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
         title: 'Avatar',
         starRating: 4.3,
         rating: 'PG-13',
         year: 2009,
         genre: 'Action, Adventure, Fantasy',
         runtime: '162 min',
         cast: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang'
      },
      {
         image: 'https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
         title: 'Gladiator',
         starRating: 4.5,
         rating: 'R',
         year: 2000,
         genre: 'Action, Adventure, Drama',
         runtime: '155 min',
         cast: 'Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed'
      },
      {
         image: 'https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         title: 'Inception',
         starRating: 4.8,
         rating: 'PG-13',
         year: 2010,
         genre: 'Sci-Fi, Thriller',
         runtime: '148 min',
         cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy'
      },
      {
         image: 'https://images.unsplash.com/photo-1724277228191-0cf4c80ee56f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
         title: 'Interstellar',
         starRating: 4.6,
         rating: 'PG-13',
         year: 2014,
         genre: 'Sci-Fi, Adventure, Drama',
         runtime: '169 min',
         cast: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine'
      },
      {
         image: 'https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
         title: 'Avatar',
         starRating: 4.3,
         rating: 'PG-13',
         year: 2009,
         genre: 'Action, Adventure, Fantasy',
         runtime: '162 min',
         cast: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang'
      },
      {
         image: 'https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
         title: 'Gladiator',
         starRating: 4.5,
         rating: 'R',
         year: 2000,
         genre: 'Action, Adventure, Drama',
         runtime: '155 min',
         cast: 'Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed'
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
                     <CardTitle className='text-2xl font-semibold'>Tin tức</CardTitle>
                  </CardHeader>
                  <ScrollArea className='h-screen w-full'>
                     <CardContent className='space-y-2'>
                        {movies.map((movie) => (
                           <Link
                              href={`/${params.lang}/news/${movie.title}`}
                              key={movie.cast}
                              className='flex items-start space-x-2 p-1 border rounded-md border-slate-200 hover:bg-sky-300/10 duration-200'
                           >
                              <Image
                                 src={movie.image}
                                 alt={movie.title}
                                 width={300}
                                 height={300}
                                 className='flex-none rounded-md bg-slate-100 h-32 w-36 md:w-40'
                              />
                              <div className='min-w-0 relative flex-auto'>
                                 <h2 className='font-semibold text-slate-900 truncate pr-20'>
                                    {movie.title}
                                 </h2>
                                 <dl className='mt-2 flex flex-wrap text-sm leading-6 font-medium'>
                                    <div>
                                       <dt className='sr-only'>Date</dt>
                                       <dd className='px-1.5 ring-1 ring-slate-200 rounded'>
                                          {movie.rating}
                                       </dd>
                                    </div>

                                    <div className='flex-none w-full mt-2 font-normal'>
                                       <dt className='sr-only'>Cast</dt>
                                       <dd className='text-slate-400 line-clamp-3'>
                                          {movie.cast}
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
                     <CardTitle className='text-2xl font-semibold'>Thông báo</CardTitle>
                  </CardHeader>
                  <ScrollArea className='h-screen w-full'>
                     <CardContent className='space-y-2'>
                        {movies.map((movie) => (
                           <div
                              key={movie.image}
                              className='relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100'
                           >
                              <div className='p-4'>
                                 <h2 className='font-bold my-4 text-lg text-zinc-700'>
                                    {movie.title}
                                 </h2>

                                 <div className='flex flex-row justify-between items-center my-4'>
                                    <span className='text-sm text-gray-500 line-clamp-3'>
                                       {movie.cast}
                                    </span>
                                 </div>
                                 <div className='relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs'>
                                    Read More
                                 </div>
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
               <UpcomingEvent />
            </Card>
         </div>
      </div>
   )
}
