/** @type {import('next').NextConfig} */

const nextConfig = {
   images: {
      unoptimized: true,
      remotePatterns: [
         {
            hostname: 'dnbvietnam.com',
            protocol: 'https'
         },
         {
            hostname: 'th.bing.com',
            protocol: 'https'
         },
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
         },
         {
            hostname: 'siu.edu.vn',
            protocol: 'https'
         },
         {
            hostname: 'kd.io.vn',
            protocol: 'https'
         },
         {
            hostname: 'iit.siu.edu.vn',
            protocol: 'https'
         }
      ]
   },

   experimental: {
      trustHost: true,
      serverActions: {
         allowedOrigins: ['iit.siu.edu.vn', 'localhost:8010']
      }
   },
   typescript: {
      ignoreBuildErrors: true
   },
   transpilePackages: ['lucide-react', 'react-icons'],
   reactStrictMode: false,
   output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined
}

export default nextConfig
