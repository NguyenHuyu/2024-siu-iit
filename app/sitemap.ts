import { getBulletins } from '@/actions/bulletin'
import { customSlugify } from '@/utils/slugify'
import type { MetadataRoute } from 'next'
import { cookies } from 'next/headers'

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
   const baseUrl = 'https://iit.siu.edu.vn'
   const language = cookies().get('language')?.value as string

   const bulletin = await getBulletins({ size: '10', category: ['NEWS', 'EVENTS'] })

   const log = bulletin.content.map((item) => {
      return {
         url: `${baseUrl}/${language}/ban-tin/${customSlugify(item.title)}__${item.id}.html`,
         lastModified: new Date(item.updatedAt),
         priority: 1,
         alternates: {
            languages: {
               vi: `${baseUrl}/vi/ban-tin/${customSlugify(item.title)}__${item.id}.html`,
               en: `${baseUrl}/en/ban-tin/${customSlugify(item.title)}__${item.id}.html`
            }
         }
      }
   })

   return [
      {
         url: baseUrl,
         lastModified: new Date(),
         changeFrequency: 'always',
         priority: 1,
         alternates: {
            languages: {
               vi: 'https://iit.siu.edu.vn/vi',
               en: 'https://iit.siu.edu.vn/en'
            }
         }
      },
      {
         url: 'https://iit.siu.edu.vn/tin-tuc',
         lastModified: new Date(),
         changeFrequency: 'always',
         priority: 1,
         alternates: {
            languages: {
               vi: 'https://iit.siu.edu.vn/vi/tin-tuc',
               en: 'https://iit.siu.edu.vn/en/tin-tuc'
            }
         }
      },
      ...log
   ]
}
