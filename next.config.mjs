/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            hostname: 'via.placeholder.com',
            protocol: 'https'
         },
         {
            hostname: 'utfs.io',
            protocol: 'https'
         },
         {
            hostname: 'images.unsplash.com',
            protocol: 'https'
         },
         {
            hostname: 'unsplash.com',
            protocol: 'https'
         }
      ]
   }
}

export default nextConfig
