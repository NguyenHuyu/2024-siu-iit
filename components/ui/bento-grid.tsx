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
            'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 ',
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
   url,
   image
}: {
   title: string
   description?: string | React.ReactNode
   url: string
   image: string
}) => {
   return (
      <div
         className={cn(
            'md:w-72 md:h-72 rounded-xl border transition duration-200 space-y-2'
         )}
      >
         <div className='transition duration-200 text-justify'>
            <Image
               src={image}
               alt={title}
               width={300}
               height={300}
               className='flex-none rounded-md bg-slate-100 w-full object-cover'
            />
            <div className='p-2'>
               <Link href={url}>
                  <p className='line-clamp-1 font-bold'>{title}</p>
               </Link>
               <p className='font-normal text-neutral-600 text-base line-clamp-2 '>
                  {description}
               </p>
            </div>
         </div>
      </div>
   )
}
