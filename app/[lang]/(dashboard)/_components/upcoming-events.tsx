import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'

export function UpcomingEvent() {
   return (
      <BentoGrid className='w-full mx-auto md:auto-rows-[22rem]'>
         {items.map((item, i) => (
            <BentoGridItem
               key={i}
               title={item.title}
               description={item.cast}
               header={item.title}
               image={item.image}
            />
         ))}
      </BentoGrid>
   )
}

const items = [
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

]
