'use client'
import { demos, type Item } from '@/constants/data'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '../ui/button'
import { logout } from '@/actions/auth'

export function NavbarAdmin() {
   const [isOpen, setIsOpen] = useState(false)
   const close = () => setIsOpen(false)

   return (
      <div className='fixed top-0 z-50 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800'>
         <div className='flex h-14 items-center px-4 py-4 lg:h-auto'>
            <Link
               href='/'
               className='group flex w-full items-center gap-x-2.5'
               onClick={close}
            >
               <h3 className='font-semibold tracking-wide text-gray-400 group-hover:text-gray-50'>
                  Trang chủ
               </h3>
            </Link>
         </div>
         <button
            type='button'
            className='group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden'
            onClick={() => setIsOpen(!isOpen)}
         >
            {isOpen ? (
               <X className='block w-6 text-gray-400' />
            ) : (
               <Menu className='block w-6 text-gray-400' />
            )}
         </button>

         <ScrollArea
            className={clsx('lg:static lg:block', {
               'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
               hidden: !isOpen
            })}
         >
            <nav className='space-y-6 px-2 pb-24 pt-5'>
               {demos.map((section) => {
                  return (
                     <div key={section.name}>
                        <div className='mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80'>
                           <div>{section.name}</div>
                        </div>

                        <div className='space-y-1'>
                           {section.items.map((item) => (
                              <GlobalNavItem key={item.slug} item={item} close={close} />
                           ))}
                        </div>
                     </div>
                  )
               })}
            </nav>
            <Button
               variant='outline'
               onClick={() => logout()}
               className='w-full my-3 text-xs font-semibold uppercase tracking-wider text-black'
            >
               Đăng xuất
            </Button>
         </ScrollArea>

         <div className='absolute hidden md:block bottom-0 text-white w-full p-2'>
            <Button variant='ghost' onClick={() => logout()} className='w-full'>
               Đăng xuất
            </Button>
         </div>
      </div>
   )
}

function GlobalNavItem({ item, close }: { item: Item; close: () => false | void }) {
   const segment = useSelectedLayoutSegment()
   const isActive = item.slug === segment

   return (
      <Link
         onClick={close}
         href={`/${item.slug}`}
         className={clsx(
            'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
            {
               'text-gray-100 hover:bg-gray-800': !isActive,
               'text-white': isActive
            }
         )}
      >
         {item.name}
      </Link>
   )
}
