import { getLatestBulletins } from '@/actions/bulletin'
import { Locale } from '@/lib/i18n.config'
import { Category } from '@/types/utils'
import { customSlugify } from '@/utils/slugify'
import { renderStatus } from '@/utils/utils'
import { Link } from 'next-view-transitions'
import Image from 'next/image'

export async function RecommendedProducts({
   id,
   params,
   lists
}: {
   params: string
   id: string
   lists: Category[]
}) {
   const relatests = await getLatestBulletins(id, lists)

   return (
      <div className='space-y-6 py-8 container mx-auto max-w-6xl'>
         <div className='text-lg font-medium text-black'>Bài viết khác</div>
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {relatests.map((product) => (
               <Link
                  key={product.id}
                  href={`/${params}/${customSlugify(product.title)}__${product.id}.html`}
                  className='group block h-40 w-40 md:h-full md:w-full m-2'
               >
                  <div className='md:space-y-2'>
                     <div className='relative'>
                        {product ? (
                           <div className='absolute left-2 top-2 z-10 flex'>
                              <div className='rounded bg-gray-600 px-1.5 text-xs font-medium leading-5 text-white'>
                                 {product.title}
                              </div>
                           </div>
                        ) : null}
                        {product.imageUrl && (
                           <Image
                              src={product?.imageUrl}
                              width={400}
                              height={400}
                              className='relative rounded-xl group-hover:opacity-80 h-40 w-40 md:h-72 md:w-96 object-cover'
                              alt={product.title}
                           />
                        )}
                     </div>
                     <div className='truncate text-sm font-medium text-black group-hover:text-vercel-cyan'>
                        {product.description}
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </div>
   )
}

const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`

function ProductSkeleton() {
   return (
      <div className='col-span-4 space-y-4 lg:col-span-1'>
         <div className={`relative h-[167px] rounded-xl bg-gray-300 ${shimmer}`} />

         <div className='h-4 w-full rounded-lg bg-gray-300' />
         <div className='h-6 w-1/3 rounded-lg bg-gray-300' />
         <div className='h-4 w-full rounded-lg bg-gray-300' />
         <div className='h-4 w-4/6 rounded-lg bg-gray-300' />
      </div>
   )
}

export function RecommendedProductsSkeleton() {
   return (
      <div className='space-y-6 pb-[5px] py-8'>
         <div className='space-y-2'>
            <div className={`h-6 w-1/3 rounded-lg bg-gray-300 ${shimmer}`} />
            <div className={`h-4 w-1/2 rounded-lg bg-gray-300 ${shimmer}`} />
         </div>

         <div className='grid grid-cols-4 gap-6'>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
         </div>
      </div>
   )
}
