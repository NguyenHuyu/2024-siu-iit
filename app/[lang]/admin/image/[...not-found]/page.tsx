import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function NotFound() {
   const headersList = cookies()
   const language = headersList.get('language')?.value

   redirect(`/${language}/admin/image`)
}
