import Link from 'next/link'
const Navbar = ({ lang }: { lang: string }) => {
   const navbarVI = [
      {
         href: `/${lang}`,
         text: 'Trang chủ',
         ghv: '',
         items: [],
         pointer: 'cursor-pointer'
      },
      {
         href: '#',
         text: 'Giới thiệu',
         ghv: 'group-hover:scale-100',
         pointer: 'cursor-default',
         items: [
            {
               name: 'Giới thiệu về IIT',
               href: `/${lang}/gioi-thieu-iit`,
               bg: 'bg-transparent',
               pointer: 'cursor-pointer',
               itemss: []
            },
            {
               name: 'Sứ mệnh tầm nhìn',
               href: `/${lang}/su-menh-tam-nhin`,
               bg: 'bg-transparent',
               pointer: 'cursor-pointer',
               itemss: []
            },
            {
               name: 'Cơ cấu tổ chức',
               href: `/${lang}/co-cau-to-chuc`,
               bg: 'bg-transparent',
               pointer: 'cursor-pointer',
               itemss: []
            }
         ]
      },
      {
         href: '#',
         text: 'Đào tạo',
         ghv: 'group-hover:scale-100',
         pointer: 'cursor-default',
         items: [
            {
               name: 'Chương trình đào tạo',
               href: `/${lang}/chuong-trinh-dao-tao`,
               bg: 'bg-transparent',
               pointer: 'cursor-pointer',
               itemss: []
            },
            {
               name: 'Khóa học',
               href: `/${lang}/khoa-hoc`,
               bg: 'bg-transparent',
               pointer: 'cursor-pointer',
               itemss: []
            }
         ]
      },
      {
         href: '#',
         text: 'Khoa học & Công nghệ',
         ghv: 'group-hover:scale-100',
         pointer: 'cursor-default',

         items: [
            {
               name: 'Seminar - workshops',
               href: '/vi/khoa-hoc-cong-nghe/seminar-workshops',
               bg: 'bg-transparent',
               itemss: []
            },
            {
               name: 'Chương trình - Dự án',
               href: '/vi/khoa-hoc-cong-nghe/chuong-trinh-du-an',
               bg: 'bg-transparent',
               itemss: []
            },
            {
               name: 'Sản phẩm NCKH ssss',
               bg: 'bg-zinc-100',
               itemss: [
                  {
                     name_item: 'Sản phẩm KHCN-CGCN',
                     href_item: '/vi/khoa-hoc-cong-nghe/san-pham'
                  },
                  {
                     name_item: 'Công bố khoa học',
                     href_item: '/vi/khoa-hoc-cong-nghe/cong-bo-khoa-hoc'
                  },
                  {
                     name_item: 'Sách - Giáp trình',
                     href_item: '/vi/khoa-hoc-cong-nghe/sach-giao-trinh'
                  }
               ],
               href: '#'
            }
         ]
      },
      {
         href: '#',
         text: 'Hợp tác',
         ghv: 'group-hover:scale-100',
         pointer: 'cursor-default',
         items: [
            {
               name: 'Đối tác học thuật',
               href: `/${lang}/doi-tac-hoc-thuat`,
               ghv: '',
               itemss: []
            },
            {
               name: 'Đối tác doanh nghiệp',
               href: `/${lang}/doi-tac-doanh-nghiep`,
               ghv: '',
               itemss: []
            }
         ]
      },
      {
         href: `/${lang}/lien-he`,
         text: 'Liên hệ',
         pointer: 'cursor-pointer',
         ghv: '',
         items: []
      }
   ]

   const navbarEN = [
      {
         href: `/${lang}`,
         text: 'Home',
         ghv: '*',
         items: [],
         pointer: 'cursor-pointer'
      },
      {
         href: '#',
         text: 'About Us',
         ghv: 'group-hover:scale-100',
         pointer: 'cursor-default',
         items: [
            {
               name: 'About IIT',
               href: `/${lang}/gioi-thieu-iit`,
               bg: 'bg-transparent',
               pointer: 'cursor-pointer',
               itemss: []
            },
            {
               name: 'Mission vision',
               href: `/${lang}/su-menh-tam-nhin`,
               bg: 'bg-transparent',
               pointer: 'cursor-pointer',
               itemss: []
            },
            {
               name: 'Organizational structure',
               href: `/${lang}/co-cau-to-chuc`,
               bg: 'bg-transparent',
               pointer: 'cursor-pointer',
               itemss: []
            }
         ]
      },
      {
         href: '#',
         text: 'Education',
         ghv: 'group-hover:scale-100',
         pointer: 'cursor-default',
         items: [
            {
               name: 'Education System',
               href: `/${lang}/chuong-trinh-dao-tao`,
               bg: 'bg-transparent',
               pointer: 'cursor-pointer',
               itemss: []
            },
            {
               name: 'Courses',
               href: `/${lang}/khoa-hoc`,
               bg: 'bg-transparent',
               pointer: 'cursor-pointer',
               itemss: []
            }
         ]
      },
      {
         href: '#',
         text: 'Science & technology',
         ghv: 'group-hover:scale-100',
         pointer: 'cursor-default',

         items: [
            {
               name: 'Seminar - workshops',
               href: '/vi/khoa-hoc-cong-nghe/seminar-workshops',
               bg: 'bg-transparent',
               itemss: []
            },
            {
               name: 'Programs - Projects',
               href: '/vi/khoa-hoc-cong-nghe/chuong-trinh-du-an',
               bg: 'bg-transparent',
               itemss: []
            },
            {
               name: 'S&T Products',
               bg: 'bg-zinc-100',
               itemss: [
                  {
                     name_item: 'S&T products & technology transfer',
                     href_item: '/vi/khoa-hoc-cong-nghe/san-pham'
                  },
                  {
                     name_item: 'Scientific publications',
                     href_item: '/vi/khoa-hoc-cong-nghe/cong-bo-khoa-hoc'
                  },
                  {
                     name_item: 'Books - Armor',
                     href_item: '/vi/khoa-hoc-cong-nghe/sach-giao-trinh'
                  }
               ],
               href: '#'
            }
         ]
      },
      {
         href: '#',
         text: 'Cooperate',
         ghv: 'group-hover:scale-100',
         pointer: 'cursor-default',
         items: [
            {
               name: 'Academic Partners',
               href: `/${lang}/doi-tac-hoc-thuat`,
               ghv: '',
               itemss: []
            },
            {
               name: 'Corporate Partners',
               href: `/${lang}/doi-tac-doanh-nghiep`,
               ghv: '',
               itemss: []
            }
         ]
      },
      {
         href: `/${lang}/lien-he`,
         text: 'Contact',
         pointer: 'cursor-pointer',
         ghv: '',
         items: []
      }
   ]

   return (
      <div>
         {lang === 'vi' &&
            navbarVI &&
            navbarVI.map((item1: any) => (
               <div className='group inline-block' key={item1.text}>
                  <button className='outline-none focus:outline-none px-1 py-0.5 bg-transparent rounded-lg flex items-center md:min-w-32'>
                     <Link
                        href={`${item1.href}`}
                        className={`font-semibold ${item1.pointer} flex-1 text-[5px] md:text-[11px] lg:text-[13px] xl:text-[15px] hover:text-[#187cfa]`}
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
                     className={`bg-zinc-100 z-50 rounded-lg transform scale-0 ${item1.ghv} absolute transition duration-150 ease-in-out origin-top `}
                  >
                     <ul className='rounded-lg px-0.5 text-[4px] md:text-[12px] lg:text-[15px]  cursor-pointer md:py-1'>
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
                                       className={`${item2.bg} z-50 rounded-lg absolute top-0 -right-[0.1rem] md:top-0.5 transition duration-150 ease-in-out origin-top-left md:min-w-32 w-[5rem] md:w-[11rem] `}
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
         {lang === 'en' &&
            navbarEN &&
            navbarEN.map((item1: any) => (
               <div className='group inline-block' key={item1.text}>
                  <button className='outline-none focus:outline-none px-1 py-0.5 bg-transparent rounded-lg flex items-center md:min-w-32'>
                     <Link
                        href={`${item1?.href}`}
                        className={`pr-1 font-semibold ${item1.pointer} flex-1 text-[5px] md:text-[12px] lg:text-[16px] hover:text-[#187cfa]`}
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
                     <ul className='rounded-lg px-0.5 md:px-2 text-[4px] md:text-[12px] lg:text-[15px] cursor-pointer md:py-1'>
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
                                       className={`${item2.bg} z-50 rounded-lg absolute top-0 -right-[0.1rem] md:top-0.5 transition duration-150 ease-in-out origin-top-left md:min-w-32 w-[5rem] md:w-[11rem] `}
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
   )
}

export default Navbar
