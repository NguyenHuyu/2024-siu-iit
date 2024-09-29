import React from 'react'
import { Facebook, Mail, MapPinHouse, Phone } from 'lucide-react'
import { Link } from 'next-view-transitions'
import ContactReportForm from './_components/form'
import { getDictionary } from '@/lib/dictionary'
import { PageProps } from '@/types/utils'

export default async function Page({ params }: PageProps) {
   const { page } = await getDictionary(params.lang)

   const list = [
      {
         name: '8C-18 Tống Hữu Định, Phường Thảo Điền, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam',
         icon: <MapPinHouse className='size-7' />
      },
      {
         name: 'iit@siu.edu.vn',
         icon: <Mail className='size-7' />
      },
      {
         name: '+84 28.36203932',
         icon: <Phone className='size-7' />
      },
      {
         name: 'Fanpage',
         icon: <Facebook className='size-7' />,
         link: 'https://www.facebook.com/iit.siu.edu.vn'
      }
   ]

   return (
      <section className='bg-white py-6 md:pt-32 overflow-hidden z-10 h-full relative space-y-20'>
         <div className='relative container'>
            <div className='flex flex-col md:flex-row lg:justify-between'>
               <div className='w-full'>
                  <div className='relative max-w-[600px] mb-12 lg:mb-0'>
                     <h2 className='mb-6 uppercase text-4xl font-bold leading-none md:text-4xl xl:text-5xl'>
                        {page.contact.title}
                     </h2>

                     <div className=' grid grid-cols-1 justify-start gap-6'>
                        {list.map((item) => (
                           <div key={item.name} className='flex justify-start mb-6'>
                              <div className='rounded-full flex items-center justify-start mr-4'>
                                 {item.icon}
                              </div>

                              <div>
                                 {item.link ? (
                                    <Link
                                       href={item.link}
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       className='text-body-color hover:text-primary transition'
                                    >
                                       {item.link}
                                    </Link>
                                 ) : (
                                    <p className='text-body-color text-justify'>
                                       {item.name}
                                    </p>
                                 )}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className='w-full lg:w-1/2 xl:w-5/12'>
                  <ContactReportForm
                     body={page.contact.form.body}
                     email={page.contact.form.email}
                     name={page.contact.form.name}
                     phone={page.contact.form.phone}
                     submit={page.contact.form.submit}
                  />
                  <div>
                     <span className='absolute -top-10 -right-9 z-[-1]'>
                        <svg
                           width='100'
                           height='100'
                           viewBox='0 0 100 100'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z'
                              fill='#3056D3'
                           />
                        </svg>
                     </span>
                     <span className='absolute -right-10 top-[90px] z-[-1]'>
                        <svg
                           width='34'
                           height='134'
                           viewBox='0 0 34 134'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <circle
                              cx='31.9993'
                              cy='132'
                              r='1.66667'
                              transform='rotate(180 31.9993 132)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='117.333'
                              r='1.66667'
                              transform='rotate(180 31.9993 117.333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='102.667'
                              r='1.66667'
                              transform='rotate(180 31.9993 102.667)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='88'
                              r='1.66667'
                              transform='rotate(180 31.9993 88)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='73.3333'
                              r='1.66667'
                              transform='rotate(180 31.9993 73.3333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='45'
                              r='1.66667'
                              transform='rotate(180 31.9993 45)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='16'
                              r='1.66667'
                              transform='rotate(180 31.9993 16)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='59'
                              r='1.66667'
                              transform='rotate(180 31.9993 59)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='30.6666'
                              r='1.66667'
                              transform='rotate(180 31.9993 30.6666)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='1.66665'
                              r='1.66667'
                              transform='rotate(180 31.9993 1.66665)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='132'
                              r='1.66667'
                              transform='rotate(180 17.3333 132)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='117.333'
                              r='1.66667'
                              transform='rotate(180 17.3333 117.333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='102.667'
                              r='1.66667'
                              transform='rotate(180 17.3333 102.667)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='88'
                              r='1.66667'
                              transform='rotate(180 17.3333 88)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='73.3333'
                              r='1.66667'
                              transform='rotate(180 17.3333 73.3333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='45'
                              r='1.66667'
                              transform='rotate(180 17.3333 45)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='16'
                              r='1.66667'
                              transform='rotate(180 17.3333 16)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='59'
                              r='1.66667'
                              transform='rotate(180 17.3333 59)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='30.6666'
                              r='1.66667'
                              transform='rotate(180 17.3333 30.6666)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='1.66665'
                              r='1.66667'
                              transform='rotate(180 17.3333 1.66665)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='132'
                              r='1.66667'
                              transform='rotate(180 2.66536 132)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='117.333'
                              r='1.66667'
                              transform='rotate(180 2.66536 117.333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='102.667'
                              r='1.66667'
                              transform='rotate(180 2.66536 102.667)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='88'
                              r='1.66667'
                              transform='rotate(180 2.66536 88)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='73.3333'
                              r='1.66667'
                              transform='rotate(180 2.66536 73.3333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='45'
                              r='1.66667'
                              transform='rotate(180 2.66536 45)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='16'
                              r='1.66667'
                              transform='rotate(180 2.66536 16)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='59'
                              r='1.66667'
                              transform='rotate(180 2.66536 59)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='30.6666'
                              r='1.66667'
                              transform='rotate(180 2.66536 30.6666)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='1.66665'
                              r='1.66667'
                              transform='rotate(180 2.66536 1.66665)'
                              fill='#13C296'
                           />
                        </svg>
                     </span>
                     <span className='absolute -left-7 -bottom-7 z-[-1]'>
                        <svg
                           width='107'
                           height='134'
                           viewBox='0 0 107 134'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <circle
                              cx='104.999'
                              cy='132'
                              r='1.66667'
                              transform='rotate(180 104.999 132)'
                              fill='#13C296'
                           />
                           <circle
                              cx='104.999'
                              cy='117.333'
                              r='1.66667'
                              transform='rotate(180 104.999 117.333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='104.999'
                              cy='102.667'
                              r='1.66667'
                              transform='rotate(180 104.999 102.667)'
                              fill='#13C296'
                           />
                           <circle
                              cx='104.999'
                              cy='88'
                              r='1.66667'
                              transform='rotate(180 104.999 88)'
                              fill='#13C296'
                           />
                           <circle
                              cx='104.999'
                              cy='73.3333'
                              r='1.66667'
                              transform='rotate(180 104.999 73.3333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='104.999'
                              cy='45'
                              r='1.66667'
                              transform='rotate(180 104.999 45)'
                              fill='#13C296'
                           />
                           <circle
                              cx='104.999'
                              cy='16'
                              r='1.66667'
                              transform='rotate(180 104.999 16)'
                              fill='#13C296'
                           />
                           <circle
                              cx='104.999'
                              cy='59'
                              r='1.66667'
                              transform='rotate(180 104.999 59)'
                              fill='#13C296'
                           />
                           <circle
                              cx='104.999'
                              cy='30.6666'
                              r='1.66667'
                              transform='rotate(180 104.999 30.6666)'
                              fill='#13C296'
                           />
                           <circle
                              cx='104.999'
                              cy='1.66665'
                              r='1.66667'
                              transform='rotate(180 104.999 1.66665)'
                              fill='#13C296'
                           />
                           <circle
                              cx='90.3333'
                              cy='132'
                              r='1.66667'
                              transform='rotate(180 90.3333 132)'
                              fill='#13C296'
                           />
                           <circle
                              cx='90.3333'
                              cy='117.333'
                              r='1.66667'
                              transform='rotate(180 90.3333 117.333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='90.3333'
                              cy='102.667'
                              r='1.66667'
                              transform='rotate(180 90.3333 102.667)'
                              fill='#13C296'
                           />
                           <circle
                              cx='90.3333'
                              cy='88'
                              r='1.66667'
                              transform='rotate(180 90.3333 88)'
                              fill='#13C296'
                           />
                           <circle
                              cx='90.3333'
                              cy='73.3333'
                              r='1.66667'
                              transform='rotate(180 90.3333 73.3333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='90.3333'
                              cy='45'
                              r='1.66667'
                              transform='rotate(180 90.3333 45)'
                              fill='#13C296'
                           />
                           <circle
                              cx='90.3333'
                              cy='16'
                              r='1.66667'
                              transform='rotate(180 90.3333 16)'
                              fill='#13C296'
                           />
                           <circle
                              cx='90.3333'
                              cy='59'
                              r='1.66667'
                              transform='rotate(180 90.3333 59)'
                              fill='#13C296'
                           />
                           <circle
                              cx='90.3333'
                              cy='30.6666'
                              r='1.66667'
                              transform='rotate(180 90.3333 30.6666)'
                              fill='#13C296'
                           />
                           <circle
                              cx='90.3333'
                              cy='1.66665'
                              r='1.66667'
                              transform='rotate(180 90.3333 1.66665)'
                              fill='#13C296'
                           />
                           <circle
                              cx='75.6654'
                              cy='132'
                              r='1.66667'
                              transform='rotate(180 75.6654 132)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='132'
                              r='1.66667'
                              transform='rotate(180 31.9993 132)'
                              fill='#13C296'
                           />
                           <circle
                              cx='75.6654'
                              cy='117.333'
                              r='1.66667'
                              transform='rotate(180 75.6654 117.333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='117.333'
                              r='1.66667'
                              transform='rotate(180 31.9993 117.333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='75.6654'
                              cy='102.667'
                              r='1.66667'
                              transform='rotate(180 75.6654 102.667)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='102.667'
                              r='1.66667'
                              transform='rotate(180 31.9993 102.667)'
                              fill='#13C296'
                           />
                           <circle
                              cx='75.6654'
                              cy='88'
                              r='1.66667'
                              transform='rotate(180 75.6654 88)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='88'
                              r='1.66667'
                              transform='rotate(180 31.9993 88)'
                              fill='#13C296'
                           />
                           <circle
                              cx='75.6654'
                              cy='73.3333'
                              r='1.66667'
                              transform='rotate(180 75.6654 73.3333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='73.3333'
                              r='1.66667'
                              transform='rotate(180 31.9993 73.3333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='75.6654'
                              cy='45'
                              r='1.66667'
                              transform='rotate(180 75.6654 45)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='45'
                              r='1.66667'
                              transform='rotate(180 31.9993 45)'
                              fill='#13C296'
                           />
                           <circle
                              cx='75.6654'
                              cy='16'
                              r='1.66667'
                              transform='rotate(180 75.6654 16)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='16'
                              r='1.66667'
                              transform='rotate(180 31.9993 16)'
                              fill='#13C296'
                           />
                           <circle
                              cx='75.6654'
                              cy='59'
                              r='1.66667'
                              transform='rotate(180 75.6654 59)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='59'
                              r='1.66667'
                              transform='rotate(180 31.9993 59)'
                              fill='#13C296'
                           />
                           <circle
                              cx='75.6654'
                              cy='30.6666'
                              r='1.66667'
                              transform='rotate(180 75.6654 30.6666)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='30.6666'
                              r='1.66667'
                              transform='rotate(180 31.9993 30.6666)'
                              fill='#13C296'
                           />
                           <circle
                              cx='75.6654'
                              cy='1.66665'
                              r='1.66667'
                              transform='rotate(180 75.6654 1.66665)'
                              fill='#13C296'
                           />
                           <circle
                              cx='31.9993'
                              cy='1.66665'
                              r='1.66667'
                              transform='rotate(180 31.9993 1.66665)'
                              fill='#13C296'
                           />
                           <circle
                              cx='60.9993'
                              cy='132'
                              r='1.66667'
                              transform='rotate(180 60.9993 132)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='132'
                              r='1.66667'
                              transform='rotate(180 17.3333 132)'
                              fill='#13C296'
                           />
                           <circle
                              cx='60.9993'
                              cy='117.333'
                              r='1.66667'
                              transform='rotate(180 60.9993 117.333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='117.333'
                              r='1.66667'
                              transform='rotate(180 17.3333 117.333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='60.9993'
                              cy='102.667'
                              r='1.66667'
                              transform='rotate(180 60.9993 102.667)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='102.667'
                              r='1.66667'
                              transform='rotate(180 17.3333 102.667)'
                              fill='#13C296'
                           />
                           <circle
                              cx='60.9993'
                              cy='88'
                              r='1.66667'
                              transform='rotate(180 60.9993 88)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='88'
                              r='1.66667'
                              transform='rotate(180 17.3333 88)'
                              fill='#13C296'
                           />
                           <circle
                              cx='60.9993'
                              cy='73.3333'
                              r='1.66667'
                              transform='rotate(180 60.9993 73.3333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='73.3333'
                              r='1.66667'
                              transform='rotate(180 17.3333 73.3333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='60.9993'
                              cy='45'
                              r='1.66667'
                              transform='rotate(180 60.9993 45)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='45'
                              r='1.66667'
                              transform='rotate(180 17.3333 45)'
                              fill='#13C296'
                           />
                           <circle
                              cx='60.9993'
                              cy='16'
                              r='1.66667'
                              transform='rotate(180 60.9993 16)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='16'
                              r='1.66667'
                              transform='rotate(180 17.3333 16)'
                              fill='#13C296'
                           />
                           <circle
                              cx='60.9993'
                              cy='59'
                              r='1.66667'
                              transform='rotate(180 60.9993 59)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='59'
                              r='1.66667'
                              transform='rotate(180 17.3333 59)'
                              fill='#13C296'
                           />
                           <circle
                              cx='60.9993'
                              cy='30.6666'
                              r='1.66667'
                              transform='rotate(180 60.9993 30.6666)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='30.6666'
                              r='1.66667'
                              transform='rotate(180 17.3333 30.6666)'
                              fill='#13C296'
                           />
                           <circle
                              cx='60.9993'
                              cy='1.66665'
                              r='1.66667'
                              transform='rotate(180 60.9993 1.66665)'
                              fill='#13C296'
                           />
                           <circle
                              cx='17.3333'
                              cy='1.66665'
                              r='1.66667'
                              transform='rotate(180 17.3333 1.66665)'
                              fill='#13C296'
                           />
                           <circle
                              cx='46.3333'
                              cy='132'
                              r='1.66667'
                              transform='rotate(180 46.3333 132)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='132'
                              r='1.66667'
                              transform='rotate(180 2.66536 132)'
                              fill='#13C296'
                           />
                           <circle
                              cx='46.3333'
                              cy='117.333'
                              r='1.66667'
                              transform='rotate(180 46.3333 117.333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='117.333'
                              r='1.66667'
                              transform='rotate(180 2.66536 117.333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='46.3333'
                              cy='102.667'
                              r='1.66667'
                              transform='rotate(180 46.3333 102.667)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='102.667'
                              r='1.66667'
                              transform='rotate(180 2.66536 102.667)'
                              fill='#13C296'
                           />
                           <circle
                              cx='46.3333'
                              cy='88'
                              r='1.66667'
                              transform='rotate(180 46.3333 88)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='88'
                              r='1.66667'
                              transform='rotate(180 2.66536 88)'
                              fill='#13C296'
                           />
                           <circle
                              cx='46.3333'
                              cy='73.3333'
                              r='1.66667'
                              transform='rotate(180 46.3333 73.3333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='73.3333'
                              r='1.66667'
                              transform='rotate(180 2.66536 73.3333)'
                              fill='#13C296'
                           />
                           <circle
                              cx='46.3333'
                              cy='45'
                              r='1.66667'
                              transform='rotate(180 46.3333 45)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='45'
                              r='1.66667'
                              transform='rotate(180 2.66536 45)'
                              fill='#13C296'
                           />
                           <circle
                              cx='46.3333'
                              cy='16'
                              r='1.66667'
                              transform='rotate(180 46.3333 16)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='16'
                              r='1.66667'
                              transform='rotate(180 2.66536 16)'
                              fill='#13C296'
                           />
                           <circle
                              cx='46.3333'
                              cy='59'
                              r='1.66667'
                              transform='rotate(180 46.3333 59)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='59'
                              r='1.66667'
                              transform='rotate(180 2.66536 59)'
                              fill='#13C296'
                           />
                           <circle
                              cx='46.3333'
                              cy='30.6666'
                              r='1.66667'
                              transform='rotate(180 46.3333 30.6666)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='30.6666'
                              r='1.66667'
                              transform='rotate(180 2.66536 30.6666)'
                              fill='#13C296'
                           />
                           <circle
                              cx='46.3333'
                              cy='1.66665'
                              r='1.66667'
                              transform='rotate(180 46.3333 1.66665)'
                              fill='#13C296'
                           />
                           <circle
                              cx='2.66536'
                              cy='1.66665'
                              r='1.66667'
                              transform='rotate(180 2.66536 1.66665)'
                              fill='#13C296'
                           />
                        </svg>
                     </span>
                  </div>
               </div>
            </div>
         </div>
         <div className='h-[30rem] bg-gray-300  w-full'>
            <iframe
               width='100%'
               height='100%'
               title='map'
               scrolling='no'
               src='https://maps.google.com/maps?q=10.805799167569958,106.73264199008196&z=14&output=embed'
            ></iframe>
         </div>
      </section>
   )
}
