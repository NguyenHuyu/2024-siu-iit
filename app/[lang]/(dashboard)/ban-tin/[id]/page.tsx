import React, { Fragment, Suspense } from 'react'
import { getBulletinById } from '@/actions/bulletin'
import RenderItem from '@/components/render-item'
import { PageProps } from '@/types/utils'
import { getUrlParams } from '@/utils/utils'
import { notFound } from 'next/navigation'
import {
   RecommendedProducts,
   RecommendedProductsSkeleton
} from '@/components/recommended'

export default async function Page({ params }: PageProps) {
   const bulletin = await getBulletinById(getUrlParams(params.id))

   if (!bulletin) return notFound()

   return (
      <Fragment>
         <RenderItem bulletin={bulletin} />
         <Suspense fallback={<RecommendedProductsSkeleton />}>
            <RecommendedProducts id={getUrlParams(params.id as string)} params={params} />
         </Suspense>
      </Fragment>
   )
}
