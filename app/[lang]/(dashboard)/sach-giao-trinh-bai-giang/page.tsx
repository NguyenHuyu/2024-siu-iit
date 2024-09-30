import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid-origin'
import {
   IconArrowWaveRightUp,
   IconBoxAlignRightFilled,
   IconBoxAlignTopLeft,
   IconClipboardCopy,
   IconFileBroken,
   IconSignature,
   IconTableColumn
} from '@tabler/icons-react'
import { Boxes } from 'lucide-react'
import { cn } from '@/lib/utils'

const Skeleton = () => (
   <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
)
const items = [
   {
      title: 'The Dawn of Innovation',
      description: 'Explore the birth of groundbreaking ideas and inventions.',
      header: <Skeleton />,
      icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />
   },
   {
      title: 'The Digital Revolution',
      description: 'Dive into the transformative power of technology.',
      header: <Skeleton />,
      icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />
   },
   {
      title: 'The Art of Design',
      description: 'Discover the beauty of thoughtful and functional design.',
      header: <Skeleton />,
      icon: <IconSignature className='h-4 w-4 text-neutral-500' />
   },
   {
      title: 'The Power of Communication',
      description: 'Understand the impact of effective communication in our lives.',
      header: <Skeleton />,
      icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />
   },
   {
      title: 'The Pursuit of Knowledge',
      description: 'Join the quest for understanding and enlightenment.',
      header: <Skeleton />,
      icon: <IconArrowWaveRightUp className='h-4 w-4 text-neutral-500' />
   },
   {
      title: 'The Joy of Creation',
      description: 'Experience the thrill of bringing ideas to life.',
      header: <Skeleton />,
      icon: <IconBoxAlignTopLeft className='h-4 w-4 text-neutral-500' />
   },
   {
      title: 'The Spirit of Adventure',
      description: 'Embark on exciting journeys and thrilling discoveries.',
      header: <Skeleton />,
      icon: <IconBoxAlignRightFilled className='h-4 w-4 text-neutral-500' />
   }
]

export default function Page() {
   return (
      <div className='md:pt-20'>
         <div className='h-72 relative w-full overflow-hidden bg-blue-200/20 flex flex-col items-center justify-center rounded-lg'>
            <div className='absolute  pointer-events-none' />

            <h1
               className={cn(
                  'text-center mb-8 py-4 text-4xl font-bold leading-none md:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 '
               )}
            >
               SÁCH GIÁO TRÌNH & BÀI GIẢNG
            </h1>
         </div>
         <BentoGrid className='max-w-5xl mx-auto pt-10'>
            {items.map((item, i) => (
               <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
               />
            ))}
         </BentoGrid>
      </div>
   )
}
