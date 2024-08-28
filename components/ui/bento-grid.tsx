import { cn } from '@/lib/utils'
import Image from 'next/image'

export const BentoGrid = ({
   className,
   children
}: {
   className?: string
   children?: React.ReactNode
}) => {
   return (
      <div
         className={cn(
            'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
            className
         )}
      >
         {children}
      </div>
   )
}

export const BentoGridItem = ({
   title,
   description,
   header,
   image
}: {
   title: string
   description?: string | React.ReactNode
   header?: React.ReactNode
   image: string
}) => {
   return (
      <div
         className={cn(
            'row-span-1 rounded-xl border group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border-transparent justify-between flex flex-col space-y-4'
         )}
      >
         <div className='group-hover/bento:translate-x-2 transition duration-200'>
            <Image
               src={image}
               alt={title}
               width={300}
               height={300}
               className='flex-none rounded-md bg-slate-100 w-full'
            />
            <p className='truncate p-1'>{header}</p>
            <div className='font-sans font-normal text-neutral-600 text-base line-clamp-2 text-justify dark:text-neutral-300'>
               {description}
            </div>
         </div>
      </div>
   )
}
