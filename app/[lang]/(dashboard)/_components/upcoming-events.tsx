import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Bulletin } from '@prisma/client'

export function UpcomingEvent({ events }: { events: Bulletin[] }) {
   return (
      <BentoGrid className='w-full mx-auto py-3'>
         {events.map((item, i) => (
            <BentoGridItem
               key={i}
               title={item.title}
               description={item.description}
               header={item.title}
               image={item.imageUrl}
            />
         ))}
      </BentoGrid>
   )
}
