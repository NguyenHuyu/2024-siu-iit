'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import EN from '@/public/assets/en.png'
import VI from '@/public/assets/vi.png'
import { i18n } from '@/lib/i18n.config'

export default function LocaleSwitcher() {
   const pathName = usePathname()

   const redirectedPathName = (locale: string) => {
      if (!pathName) return '/'
      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
   }

   return (
      <div className='flex gap-x-3'>
         {i18n.locales.map((locale) => {
            return (
               <Link
                  replace={false}
                  prefetch={true}
                  href={redirectedPathName(locale)}
                  key={locale}
               >
                  {locale === 'vi' ? (
                     <Image
                        src={VI}
                        alt={locale}
                        height={30}
                        width={30}
                        className='size-3 md:w-full'
                     />
                  ) : (
                     <Image
                        src={EN}
                        alt={locale}
                        height={30}
                        width={30}
                        className='size-3 md:w-full'
                     />
                  )}
               </Link>
            )
         })}
      </div>
   )
}
