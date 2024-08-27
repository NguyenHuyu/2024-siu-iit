'use client'

import { cn } from '@/lib/utils'
import { ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const InfiniteMovingCards = ({
   items,
   direction = 'left',
   speed = 'fast',
   pauseOnHover = true,
   className
}: {
   items: {
      name: string
      title: string
      urlImage: string
      ref: string
   }[]
   direction?: 'left' | 'right'
   speed?: 'fast' | 'normal' | 'slow'
   pauseOnHover?: boolean
   className?: string
}) => {
   const containerRef = React.useRef<HTMLDivElement>(null)
   const scrollerRef = React.useRef<HTMLUListElement>(null)

   useEffect(() => {
      addAnimation()
   }, [])

   const [start, setStart] = useState(false)
   function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
         const scrollerContent = Array.from(scrollerRef.current.children)

         scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true)
            if (scrollerRef.current) {
               scrollerRef.current.appendChild(duplicatedItem)
            }
         })

         getDirection()
         getSpeed()
         setStart(true)
      }
   }
   const getDirection = () => {
      if (containerRef.current) {
         if (direction === 'left') {
            containerRef.current.style.setProperty('--animation-direction', 'forwards')
         } else {
            containerRef.current.style.setProperty('--animation-direction', 'reverse')
         }
      }
   }
   const getSpeed = () => {
      if (containerRef.current) {
         if (speed === 'fast') {
            containerRef.current.style.setProperty('--animation-duration', '20s')
         } else if (speed === 'normal') {
            containerRef.current.style.setProperty('--animation-duration', '40s')
         } else {
            containerRef.current.style.setProperty('--animation-duration', '80s')
         }
      }
   }
   return (
      <div
         ref={containerRef}
         className={cn('scroller relative z-20 container overflow-hidden', className)}
      >
         <ul
            ref={scrollerRef}
            className={cn(
               ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
               start && 'animate-scroll ',
               pauseOnHover && 'hover:[animation-play-state:paused]'
            )}
         >
            {items.map((item, idx) => (
               <li
                  className='w-full max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]'
                  style={{
                     background:
                        'linear-gradient(180deg, var(--slate-800), var(--slate-900)'
                  }}
                  key={item.name}
               >
                  <blockquote>
                     <Image
                        src={item.urlImage}
                        alt={item.name}
                        className='w-full h-14 rounded-md object-contain'
                     />
                     <div className='relative z-20 mt-6 flex flex-row items-center'>
                        <div className='flex items-center justify-between gap-1 w-full'>
                           <p className=' text-sm leading-[1.6] text-gray-400 font-normal'>
                              {item.name}
                           </p>
                           <Link
                              href={item.ref}
                              target='_blank'
                              className='hover:scale-105 hover:-translate-y-2 duration-300'
                           >
                              <ExternalLinkIcon className='text-white' />
                           </Link>
                        </div>
                     </div>
                  </blockquote>
               </li>
            ))}
         </ul>
      </div>
   )
}
