import * as z from 'zod'
import { parse } from 'date-fns'

// Utility functions
const requiredString = (error?: string) =>
   z.string({
      required_error: error || 'Không được để trống'
   })
const requiredNumber = (error?: string) =>
   z.number({
      required_error: error || 'Không được để trống'
   })
const requiredBoolean = (error?: string) =>
   z.boolean({
      required_error: error || 'Không được để trống'
   })

const requiredParsedDate = (error?: string) =>
   requiredString(error).refine(
      (val) => {
         const parsedDate = parse(val, 'dd/MM/yyyy', new Date())
         return !isNaN(parsedDate.getTime())
      },
      { message: 'Định dạng không hợp lệ' }
   )

const requiredStringOrBoolean = (error?: string) =>
   z.union([
      requiredBoolean(error),
      requiredString(error)
         .refine((val) => {
            return Boolean(val) === true ? 'true' : 'false'
         })
         .transform((val) => {
            return val === 'true' ? true : false
         })
   ])

const unionNumberOrString = (error?: string) =>
   z.union([
      requiredNumber(error),
      requiredString(error).transform((value) => parseInt(value as string, 10))
   ])

const requiredComboxbox = (error?: string) =>
   requiredNumber(error).refine((val) => {
      return val.toString()
   })

export {
   requiredComboxbox,
   requiredString,
   requiredNumber,
   requiredParsedDate,
   requiredStringOrBoolean,
   unionNumberOrString
}
