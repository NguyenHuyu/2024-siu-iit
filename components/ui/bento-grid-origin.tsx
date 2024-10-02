import { cn } from '@/lib/utils'
import { Link } from 'next-view-transitions'
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
   className,
   title,
   description,
   header,
   url
}: {
   className?: string
   title: string
   description?: string | React.ReactNode
   header: string
   url: string
}) => {
   return (
      <Link
         href={url}
         className={cn(
            'rounded-xl transition duration-200 shadow-input dark:shadow-none p-2 dark:bg-black  bg-white border justify-between flex flex-col space-y-4',
            className
         )}
      >
         <Image
            src={header}
            width={300}
            height={300}
            alt={title}
            className='h-full w-full object-cover rounded-md'
         />
         <div className='group-hover/bento:translate-x-2 transition duration-200'>
            <div className='font-sans font-bold text-neutral-600 dark:text-neutral-200'>
               {title}
            </div>
            <div className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 line-clamp-2'>
               {description}
            </div>
         </div>
      </Link>
   )
}
