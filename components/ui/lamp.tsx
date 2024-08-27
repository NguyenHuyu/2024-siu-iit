'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const LampContainer = ({
   children,
   className
}: {
   children: React.ReactNode
   className?: string
}) => {
   return (
      <div
         className={cn(
            'relative flex md:pt-10 flex-col items-center justify-center overflow-hidden w-full rounded-md z-0',
            className
         )}
      >
         <div className='relative top-4 flex w-full flex-1 scale-y-100 items-center justify-center isolate z-0'>
            <motion.div
               initial={{ width: '8rem' }}
               whileInView={{ width: '16rem' }}
               transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: 'easeInOut'
               }}
               className='absolute inset-auto z-30 h-20 w-64 -translate-y-[4rem] rounded-full bg-cyan-400 blur-2xl'
            ></motion.div>
            <motion.div
               initial={{ width: '15rem' }}
               whileInView={{ width: '30rem' }}
               transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: 'easeInOut'
               }}
               className='absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[5rem] bg-cyan-400 '
            ></motion.div>
         </div>

         <div className='relative z-50 flex md:-translate-y-4 flex-col items-center px-5'>
            {children}
         </div>
      </div>
   )
}
