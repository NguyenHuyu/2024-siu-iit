import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
   const baseUrl = 'https://iit.siu.edu.vn'
   return {
      rules: {
         userAgent: '*',
         allow: ['/', '/vi', '/en', '/vi/ban-tin'],
         disallow: ['/admin', '/vi/admin', '/en/admin']
      },
      sitemap: `${baseUrl}/sitemap.xml`
   }
}
