'use client'
import { useEffect, useRef, useState } from 'react'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import { Input } from '@/components/ui/input'
import { Menu, X } from 'lucide-react'

export interface IInputOption {
   value: string
   name: string
}

interface InputPatternProps {
   listSelectOptions: IInputOption[]
}

export default function InputPattern({ listSelectOptions }: InputPatternProps) {
   const initialRender = useRef(true)
   // Get value and filter from URL
   const valueParams = useSearchParams()?.get('value') as string
   const filterParams = useSearchParams()?.get('filter') as string
   // Input search
   const router = useRouter()
   const pathName = usePathname()
   const params = useParams()
   const [text, setText] = useState<string | undefined>(valueParams || undefined)
   const [query] = useDebounce(text, 400)

   const [selectedOption, setSelectedOption] = useState<string>(
      valueParams || listSelectOptions[0]?.value
   )
   const [inputName, setInputName] = useState<string>(
      listSelectOptions[0]?.name || filterParams
   )
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setText(value)
   }
   useEffect(() => {
      if (initialRender.current) {
         initialRender.current = false
         return
      }
      if (!query) {
         router.push(pathName)
      } else {
         router.push(`${pathName}?value=${query}`)
      }
   }, [router, query, pathName, selectedOption])

   useEffect(() => {
      if (listSelectOptions) {
         listSelectOptions.find((option) => {
            if (option.value === selectedOption) {
               setInputName(option.name)
            }
         })
      }
   }, [valueParams, filterParams, listSelectOptions, selectedOption])

   return (
      <div className='flex flex-col gap-4'>
         <div className='flex flex-col md:flex md:flex-row justify-between gap-3 items-center md:items-center'>
            <div className='relative'>
               <Input
                  placeholder={params.lang === 'vi' ? 'Tìm kiếm' : 'Search'}
                  value={text}
                  onChange={handleChange}
                  className='pl-10 pr-8 h-12 w-[150px] lg:w-[350px] border-black shadow-sm'
               />
               {text && (
                  <X
                     size={18}
                     className='absolute top-4 right-4 cursor-pointer'
                     onClick={() => {
                        setText('')
                        setSelectedOption(filterParams)
                        router.push(pathName)
                        router.refresh()
                     }}
                  />
               )}

               <div className='absolute top-3 left-2'>
                  <Menu />
               </div>
            </div>
         </div>
      </div>
   )
}
