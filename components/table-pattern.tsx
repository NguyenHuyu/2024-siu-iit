import React from 'react'
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { ClassValue } from 'clsx'
import { DefaultSearchParams } from '@/types/utils'

type TableColumn<R> = {
   title: string
   key?: keyof R // Direct key of R
   path?: string // Nested path as a string
   render?: (record: R, value?: any) => React.ReactNode
   headerClassName?: ClassValue
   cellClassName?: ClassValue
}

type TableProps<R> = {
   columns: TableColumn<R>[]
   data: R[]
   searchParams?: DefaultSearchParams
}

function getNestedValue<R>(obj: R, path: string) {
   return path.split('.').reduce((acc: any, key: string) => acc && acc[key], obj)
}

type TableHeaderItemProps = {
   title: string
   className?: ClassValue
}

type TableBodyItemProps<R> = {
   record: R
   columns: TableColumn<R>[]
}

function TableHeaderItem({ title, className }: TableHeaderItemProps) {
   return (
      <TableHead className={cn(className, 'text-left font-bold text-black')}>
         {title}
      </TableHead>
   )
}

function TableBodyItem<R>({ record, columns }: TableBodyItemProps<R>) {
   return (
      <TableRow>
         {columns.map((column, colIndex) => {
            let value
            if (column.key) {
               value = record[column.key]
            } else if (column.path) {
               value = getNestedValue(record, column.path)
            }
            return (
               <TableCell key={colIndex} className={cn(column.cellClassName)}>
                  {column.render ? column.render(record, value) : value}
               </TableCell>
            )
         })}
      </TableRow>
   )
}

export default function TablePattern<R>({ columns, data, searchParams }: TableProps<R>) {
   return (
      <Table>
         <TableHeader>
            <TableRow>
               {columns.map((column, index) => (
                  <TableHeaderItem
                     key={index}
                     title={column.title}
                     className={column.headerClassName}
                  />
               ))}
            </TableRow>
         </TableHeader>
         <TableBody>
            {data.length > 0 ? (
               data.map((record, rowIndex) => (
                  <TableBodyItem key={rowIndex} record={record} columns={columns} />
               ))
            ) : (
               <TableRow>
                  <TableCell colSpan={columns.length}>
                     <div className='text-center'>
                        {searchParams?.filter
                           ? 'Không tìm thấy kết quả phù hợp.'
                           : 'Không có dữ liệu, vui lòng tìm kiếm.'}
                     </div>
                  </TableCell>
               </TableRow>
            )}
         </TableBody>
      </Table>
   )
}
