import React, { Fragment, Suspense } from 'react'
import { getBulletinById } from '@/actions/bulletin'
import RenderItem from '@/components/render-item'
import { Category, PageProps } from '@/types/utils'
import { getUrlParams } from '@/utils/utils'
import { notFound } from 'next/navigation'
import {
   RecommendedProducts,
   RecommendedProductsSkeleton
} from '@/components/recommended'
import { Metadata } from 'next'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const news = await getBulletinById(getUrlParams(params.id))

   if (!news) return notFound()

   return {
      title: news?.title,
      description: news?.description,
      openGraph: {
         title: news?.title,
         description: news?.description,
         images: [news.imageUrl]
      }
   }
}

export default async function Page({ params }: PageProps) {
   const bulletin = await getBulletinById(getUrlParams(params.id))

   if (!bulletin) return notFound()

   return (
      <Fragment>
         <RenderItem bulletin={bulletin} />
         <Suspense fallback={<RecommendedProductsSkeleton />}>
            <RecommendedProducts
               lists={[Category.SEMINARS]}
               id={getUrlParams(params.id as string)}
               params={`${params.lang}/seminar-workshops`}
            />
         </Suspense>
      </Fragment>
   )
}
