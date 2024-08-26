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
         }
      ]
   }
}

export default nextConfig
