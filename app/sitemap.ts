import type { MetadataRoute } from 'next'

export default function Sitemap(): MetadataRoute.Sitemap {
   return [
      {
         url: 'https://iit.siu.edu.vn',
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
      }
   ]
}
