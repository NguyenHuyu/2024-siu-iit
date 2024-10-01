'use client'
import React, { useEffect, useRef, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SizePattern() {
   const initialRender = useRef(true)
   const pathName = usePathname()
   const searchParams = useSearchParams()
   const valueParams = searchParams?.get('value') as string
   const filterParams = searchParams?.get('filter') as string
   const router = useRouter()
   const [selectedSize, setSelectedSize] = useState<string>('10')

   useEffect(() => {
      if (initialRender.current) {
         initialRender.current = false
         return
      }
      if (!filterParams && !valueParams && selectedSize === '10') {
         router.push(pathName)
      } else {
         const url = new URL(pathName, window.location.origin)
         if (filterParams) url.searchParams.set('filter', filterParams)
         if (valueParams) url.searchParams.set('value', valueParams)
         if (selectedSize !== '10') url.searchParams.set('size', selectedSize)
         router.push(url.toString())
      }
   }, [router, pathName, selectedSize, valueParams, filterParams])

   return (
      <div className='flex justify-around md:justify-between items-center px-2'>
         <RadioGroup
            defaultValue='10'
            className='flex m-2'
            value={selectedSize}
            onValueChange={setSelectedSize}
         >
            <div className='flex items-center space-x-2'>
               <RadioGroupItem value='10' id='10' />
               <Label htmlFor='10'>10</Label>
            </div>
            <div className='flex items-center space-x-2'>
               <RadioGroupItem value='20' id='20' />
               <Label htmlFor='20'>20</Label>
            </div>
            <div className='flex items-center space-x-2'>
               <RadioGroupItem value='50' id='50' />
               <Label htmlFor='50'>50</Label>
            </div>
         </RadioGroup>
      </div>
   )
}
