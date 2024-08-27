'use client'
import React, { Fragment } from 'react'
import { Button } from '@/components/ui/button'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Calendar, Edit, Trash } from 'lucide-react'
import { Link } from 'next-view-transitions'
import {
   AlertDialog,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import SubmitButton from '@/components/submit-button'

interface LinkKey {
   linkUrl: string
   linkLabel: string
   icon: React.ReactNode
}

interface DropDownProps {
   children: React.ReactNode
   align?: 'start' | 'end' | 'center'
   labelOption?: string
   links?: LinkKey[]
   editUrl?: string
   handleDelete?: any
   deleteId?: number | string
   showUrl?: string
}

export default function DropdownPattern({
   children,
   align = 'center',
   labelOption = 'Tùy chọn',
   editUrl,
   deleteId,
   showUrl,
   links,
   handleDelete
}: DropDownProps) {
   const [open, setOpen] = React.useState(false)
   return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
         <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='sm'>
               {children}
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align={align}>
            <DropdownMenuLabel>{labelOption}</DropdownMenuLabel>
            <DropdownMenuGroup>
               {links &&
                  links.map((link, index) => (
                     <DropdownMenuItem key={index}>
                        <Link
                           href={link.linkUrl}
                           onClick={() => setOpen(false)}
                           className='flex items-center w-full cursor-pointer hover:bg-sky-100 py-1 rounded-sm transition duration-200'
                        >
                           {link.icon}
                           <div className='max-w-20 w-full truncate'>
                              {link.linkLabel}
                           </div>
                        </Link>
                     </DropdownMenuItem>
                  ))}
               {showUrl && (
                  <DropdownMenuItem>
                     <Link
                        href={showUrl}
                        onClick={() => setOpen(false)}
                        className='flex items-center w-full cursor-pointer hover:bg-sky-100 py-1 rounded-sm transition duration-200'
                     >
                        <Calendar className='mr-2 h-4 w-4' />
                        Xem thêm
                     </Link>
                  </DropdownMenuItem>
               )}
               {editUrl && (
                  <DropdownMenuItem>
                     <Link
                        href={editUrl}
                        onClick={() => setOpen(false)}
                        className='flex items-center w-full cursor-pointer hover:bg-sky-100 py-1 rounded-sm transition duration-200'
                     >
                        <Edit className='mr-2 h-4 w-4' />
                        Chỉnh sửa
                     </Link>
                  </DropdownMenuItem>
               )}

               {deleteId && handleDelete && (
                  <Fragment>
                     <DropdownMenuSeparator />
                     <AlertDialog>
                        <AlertDialogTrigger asChild className='w-full px-0'>
                           <Button
                              variant='ghost'
                              className='h-7 hover:bg-sky-100 text-red-500'
                           >
                              <Trash className='mr-2 h-4 w-4 ' />
                              Xóa
                              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                           </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className='max-w-md w-full'>
                           <AlertDialogHeader>
                              <AlertDialogTitle>
                                 Bạn có thật sự muốn xóa ?
                              </AlertDialogTitle>
                           </AlertDialogHeader>
                           <AlertDialogFooter>
                              <AlertDialogCancel className='bg-white'>
                                 Hủy
                              </AlertDialogCancel>
                              <SubmitButton
                                 setOpen={setOpen}
                                 handleDelete={handleDelete}
                                 id={deleteId}
                              />
                           </AlertDialogFooter>
                        </AlertDialogContent>
                     </AlertDialog>
                  </Fragment>
               )}
            </DropdownMenuGroup>
         </DropdownMenuContent>
      </DropdownMenu>
   )
}
