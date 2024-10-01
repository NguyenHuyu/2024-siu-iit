'use client'
import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { demos, type Item } from '@/constants/data'
import Link from 'next/link'
import { useParams, useSelectedLayoutSegment } from 'next/navigation'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import SIU from '@/public/assets/logosiu.png'
import IIT from '@/public/assets/logoiit.png'
import LocaleSwitcher from '../swicher-locale'

export default function MobileNav({ header }: { header: any }) {
   const [isOpen, setIsOpen] = useState(false)
   const close = () => setIsOpen(false)
   const lang = useParams().lang

   const navbar = [
      {
         href: `/${lang}`,
         text: header.home,
         ghv: '',
         items: [],
         pointer: 'cursor-pointer'
      },
      {
         name: header.about_us,
         href: `/${lang}/gioi-thieu-iit`,
         bg: 'bg-transparent',
         pointer: 'cursor-pointer',
         itemss: []
      },
      {
         name: header.vision_mission,
         href: `/${lang}/su-menh-tam-nhin`,
         bg: 'bg-transparent',
         pointer: 'cursor-pointer',
         itemss: []
      },
      {
         name: header.organization,
         href: `/${lang}/co-cau-to-chuc`,
         bg: 'bg-transparent',
         pointer: 'cursor-pointer',
         itemss: []
      },
      {
         name: header.education_program,
         href: `/${lang}/chuong-trinh-dao-tao`,
         bg: 'bg-transparent',
         pointer: 'cursor-pointer',
         itemss: []
      },
      {
         name: header.course,
         href: `/${lang}/khoa-hoc`,
         bg: 'bg-transparent',
         pointer: 'cursor-pointer',
         itemss: []
      },
      {
         name: header.seminar,
         href: '/vi/seminar-workshops',
         bg: 'bg-transparent',
         itemss: []
      },
      {
         name: header.program_product,
         href: '/vi/chuong-trinh-du-an',
         bg: 'bg-transparent',
         itemss: []
      },
      {
         name: header.product,
         href: '/vi/san-pham-nghien-cuu-chuyen-giao-cong-nghe',
         bg: 'bg-transparent',
         itemss: []
      },
      {
         name: header.publication,
         href: '/vi/cong-bo-khoa-hoc',
         bg: 'bg-transparent',
         itemss: []
      },
      {
         name: header.others,
         href: '/vi/sach-giao-trinh-bai-giang',
         bg: 'bg-transparent',
         itemss: []
      },
      {
         href: `/${lang}/lien-he`,
         text: header.contact,
         pointer: 'cursor-pointer',
         ghv: '',
         items: []
      },
      {
         name: header.academic_partners,
         href: `/${lang}/doi-tac-hoc-thuat`,
         ghv: '',
         itemss: []
      },
      {
         name: header.business_partners,
         href: `/${lang}/doi-tac-doanh-nghiep`,
         ghv: '',
         itemss: []
      }
   ]

   return (
      <div className='md:hidden  top-0  flex w-full flex-col border-b border-gray-800 bg-gradient-to-r from-[#8dbffd] via-gray-300 to-[#8dbffd]  fixed z-50 lg:bottom-0 lg:z-auto'>
         <div className='flex h-20 items-center px-4 py-4 lg:h-auto'>
            <Link href={`/${lang}`}>
               <div className='flex items-center gap-1 md:gap-2'>
                  <Image
                     src={SIU}
                     width={10000}
                     height={10000}
                     className='w-[70px]'
                     alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
                  />
                  <Image
                     src={IIT}
                     width={10000}
                     height={10000}
                     className='w-32'
                     alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
                  />
               </div>
            </Link>
         </div>
         <button
            type='button'
            className='group absolute right-0 top-3 flex h-14 items-center gap-x-2 px-4 lg:hidden'
            onClick={() => setIsOpen(!isOpen)}
         >
            {isOpen ? (
               <X className='block w-6 text-black' />
            ) : (
               <Menu className='block w-6 text-black' />
            )}
         </button>

         <ScrollArea
            className={clsx('lg:static lg:block', {
               'fixed inset-x-0 bottom-0 top-0 mt-px bg-black/90 w-full': isOpen,
               hidden: !isOpen
            })}
         >
            <nav className='space-y-6 px-2 pb-24 pt-5'>
               <div className='space-y-1'>
                  {navbar.map((item) => (
                     <GlobalNavItem key={item.href} item={item} close={close} />
                  ))}
               </div>
            </nav>
            <LocaleSwitcher />
         </ScrollArea>
      </div>
   )
}
function GlobalNavItem({ item, close }: { item: any; close: () => false | void }) {
   const segment = useSelectedLayoutSegment()
   const isActive = item.href === segment

   return (
      <Link
         onClick={close}
         href={item.href}
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
