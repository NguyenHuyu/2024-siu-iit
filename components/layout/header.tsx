import Link from 'next/link'
import { Locale } from '@/lib/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from '@/components/swicher-locale'
import Image from 'next/image'
import SIU from '@/public/assets/logosiu.png'
import IIT from '@/public/assets/logoiit.png'
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger
} from '@/components/ui/sheet'
import Navbar from './navbar'

export default async function Header({ lang }: { lang: Locale }) {
   const { header } = await getDictionary(lang)

   const listVI = [
      {
         label: 'Trang chủ',
         url: `/${lang}`
      },

      {
         label: 'Giới thiệu IIT',
         url: `/${lang}/gioi-thieu-iit`
      },
      {
         label: 'Sứ mệnh tầm nhìn',
         url: `/${lang}/su-menh-tam-nhin`
      },
      {
         label: 'Cơ cấu tổ chức',
         url: `/${lang}/co-cau-to-chuc`
      },
      {
         label: 'Chương trình đào tạo',
         url: `/${lang}/chuong-trinh-dao-tao`
      },
      {
         label: 'Khóa học',
         url: `/${lang}/khoa-hoc`
      },
      {
         label: 'Seminar',
         url: `/${lang}/seminar`
      },
      {
         label: 'Chương trình dự án',
         url: `/${lang}/chuong-trinh-du-an`
      },
      {
         label: 'Sản phẩm NCKH-CGCN',
         url: `/${lang}/san-pham-nckh-cgcn`
      },
      {
         label: 'Công bố khoa học',
         url: `/${lang}/cong-bo-khoa-hoc`
      },
      {
         label: 'Sách giáo trình',
         url: `/${lang}/sach-giao-trinh`
      },
      {
         label: 'Đối tác học thuật',
         url: `/${lang}/doi-tac-hoc-thuat`
      },
      {
         label: 'Đối tác doanh nghiệp',
         url: `/${lang}/doi-tac-doanh-nghiep`
      },
      {
         label: 'Liên hệ',
         url: `/${lang}/lien-he`
      }
   ]

   const listEN = [
      {
         label: 'Home',
         url: `/${lang}`
      },
      {
         label: 'About IIT',
         url: `/${lang}/gioi-thieu-iit`
      },
      {
         label: 'Mission vision',
         url: `/${lang}/su-menh-tam-nhin`
      },
      {
         label: 'Organizational structure',
         url: `/${lang}/co-cau-to-chuc`
      },
      {
         label: 'Education',
         url: `/${lang}/chuong-trinh-dao-tao`
      },
      {
         label: 'Courses',
         url: `/${lang}/khoa-hoc`
      },
      {
         label: 'Seminar',
         url: `/${lang}/seminar`
      },
      {
         label: 'Project',
         url: `/${lang}/chuong-trinh-du-an`
      },
      {
         label: 'Research products',
         url: `/${lang}/san-pham-nckh-cgcn`
      },
      {
         label: 'Publications',
         url: `/${lang}/cong-bo-khoa-hoc`
      },
      {
         label: 'Textbook',
         url: `/${lang}/sach-giao-trinh`
      },
      {
         label: 'Academic partners',
         url: `/${lang}/doi-tac-hoc-thuat`
      },
      {
         label: 'Business partners',
         url: `/${lang}/doi-tac-doanh-nghiep`
      },
      {
         label: 'Contact',
         url: `/${lang}/lien-he`
      }
   ]

   const navbar = [
      {
         href: `/${lang}`,
         text: header.home,
         ghv: '',
         items: [],
         pointer: 'cursor-pointer'
      },
      {
         href: '#',
         text: header.about,
         ghv: 'group-hover:scale-100',
         pointer: 'cursor-default',
         items: [
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
            }
         ]
      },
      {
         href: '#',
         text: header.education,
         ghv: 'group-hover:scale-100',
         pointer: 'cursor-default',
         items: [
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
            }
         ]
      },
      {
         href: '#',
         text: header.research,
         ghv: 'group-hover:scale-100',
         pointer: 'cursor-default',

         items: [
            {
               name: header.seminar,
               href: '/vi/khoa-hoc-cong-nghe/seminar-workshops',
               bg: 'bg-transparent',
               itemss: []
            },
            {
               name: header.program_product,
               href: '/vi/khoa-hoc-cong-nghe/chuong-trinh-du-an',
               bg: 'bg-transparent',
               itemss: []
            }
         ]
      },
      {
         href: '#',
         text: header.cooperate,
         ghv: 'group-hover:scale-100',
         pointer: 'cursor-default',
         items: [
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
      },
      {
         href: `/${lang}/lien-he`,
         text: header.contact,
         pointer: 'cursor-pointer',
         ghv: '',
         items: []
      }
   ]

   return (
      <header>
         <main className='hidden md:block bg-gradient-to-r from-[#8dbffd] via-gray-300 to-[#8dbffd]  w-full fixed z-50 px-6'>
            <div className='mx-auto flex justify-between items-center py-3 md:p-1  font-semibold'>
               <div className='flex items-center md:gap-2'>
                  <Link href={`/${lang}`}>
                     <div className='flex items-center gap-1 md:gap-2'>
                        <Image
                           src={SIU}
                           width={100}
                           height={100}
                           className='w-10 md:w-16 lg:w-20'
                           alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
                        />
                        <Image
                           src={IIT}
                           width={100}
                           height={100}
                           className='w-10 md:w-16 lg:w-32'
                           alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
                        />
                     </div>
                  </Link>
               </div>
               <div>
                  {navbar.map((item1: any) => (
                     <div className='group inline-block' key={item1.text}>
                        <button className='outline-none focus:outline-none  px-1 md:px-2 py-0.5 bg-transparent rounded-lg flex items-center md:min-w-20'>
                           <Link
                              href={`${item1.href}`}
                              className={`pr-1 font-semibold ${item1.pointer} flex-1 text-[5px] md:text-[11px] lg:text-[13px] xl:text-[15px] hover:text-[#187cfa]`}
                           >
                              {item1.text}
                           </Link>
                           {item1.items.length !== 0 && (
                              <span>
                                 <svg
                                    className='fill-current h-1 w-1 md:h-4 md:w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                 >
                                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                 </svg>
                              </span>
                           )}
                        </button>
                        <ul
                           className={`bg-zinc-100 z-50  rounded-lg transform scale-0 ${item1.ghv} absolute transition duration-150 ease-in-out origin-top `}
                        >
                           <ul className='rounded-lg px-0.5 md:px-2 text-[4px] md:text-[12px] lg:text-[15px]  cursor-pointer md:py-1'>
                              {item1.items.map((item2: any) => (
                                 <ul key={item2.name}>
                                    {item2.itemss !== 0 && (
                                       <li className='rounded-lg relative px-0.5 py-0.5 '>
                                          <button className='w-full text-left flex items-center outline-none focus:outline-none'>
                                             <Link
                                                href={`${item2.href}`}
                                                className={`flex-1 ${item2.pointer} text-[6px] md:text-[12px] lg:text-[14px] hover:text-[#187cfa]`}
                                             >
                                                {item2.name}
                                             </Link>
                                             {item2.itemss.length !== 0 && (
                                                <svg
                                                   className='fill-current h-1 w-1 md:h-4 md:w-4 transition duration-150 ease-in-out'
                                                   xmlns='http://www.w3.org/2000/svg'
                                                   viewBox='0 0 20 20'
                                                >
                                                   <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                                </svg>
                                             )}
                                          </button>
                                          <ul
                                             className={`${item2.bg} z-50 rounded-lg absolute top-0 -right-[0.1rem] md:top-0.5 transition duration-150 ease-in-out origin-top-left w-[5rem] md:w-[11.5rem] `}
                                          >
                                             {item2.itemss.map((item3: any) => (
                                                <li
                                                   key={item3.name_item}
                                                   className='px-1 md:px-2 text-[5px] md:text-[12px] lg:text-[14px] py-0.5 cursor-pointer hover:text-[#187cfa]'
                                                >
                                                   <Link href={item3.href_item}>
                                                      {item3.name_item}
                                                   </Link>
                                                </li>
                                             ))}
                                          </ul>
                                       </li>
                                    )}
                                 </ul>
                              ))}
                           </ul>
                        </ul>
                     </div>
                  ))}
               </div>

               <div className='flex flex-row md:gap-2 items-center '>
                  <LocaleSwitcher />
               </div>
            </div>
         </main>
         <div className='flex justify-between px-6 py-2 items-center md:hidden bg-gradient-to-r from-[#8dbffd] via-gray-300 to-[#8dbffd]'>
            <div className='flex items-center md:gap-2'>
               <Link href={`/${lang}`}>
                  <div className='flex items-center gap-1 md:gap-2'>
                     <Image
                        src={SIU}
                        width={10000}
                        height={10000}
                        className='w-16'
                        alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
                     />
                     <Image
                        src={IIT}
                        width={10000}
                        height={10000}
                        className='w-28'
                        alt='Viện công nghệ sáng tạo IIT - Trường Đại học Quốc tế Sài Gòn SIU'
                     />
                  </div>
               </Link>
            </div>
            {/* <Sheet>
               <SheetTrigger>
                  <svg fill='currentColor' viewBox='0 0 20 20' className='w-6 h-6'>
                     <path
                        fillRule='evenodd'
                        d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                        clipRule='evenodd'
                     ></path>
                  </svg>
               </SheetTrigger>

               <SheetContent>
                  <SheetHeader>
                     <SheetTitle>Danh mục</SheetTitle>
                     <SheetDescription>
                        {lang === 'vi'
                           ? listVI.map((item, index) => (
                                <Link href={item.url} key={index} className='text-left'>
                                   <span className='px-1 py-2 block hover:bg-gray-200'>
                                      {item.label}
                                   </span>
                                </Link>
                             ))
                           : listEN.map((item, index) => (
                                <Link href={item.url} key={index} className='text-left'>
                                   <span className='px-1 py-2 block hover:bg-gray-200'>
                                      {item.label}
                                   </span>
                                </Link>
                             ))}
                     </SheetDescription>
                     <div className='flex flex-row md:gap-2 items-center '>
                        <LocaleSwitcher />
                     </div>
                  </SheetHeader>
               </SheetContent>
            </Sheet> */}
         </div>
      </header>
   )
}
