import { NavbarAdmin } from '@/components/layout/navbar-admin'
import { Metadata } from 'next'

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="bg-gray-1100 bg-[url('/grid.svg')] pb-36">
         <NavbarAdmin />
         <div className='lg:pl-72'>
            <div className='px-2 pt-20 lg:p-6'>
               <div className='rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20'>
                  <div className='rounded-lg p-3.5 lg:p-6'>{children}</div>
               </div>
            </div>
         </div>
      </div>
   )
}
