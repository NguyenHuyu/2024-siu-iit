/**
 * Render status of scheduler
 */
type StatusStrategies = () => {
   status: string
   color: string
   link?: string
}

const statusStrategy: Record<string, StatusStrategies> = {
   NEWS: () => ({
      status: 'Tin tức',
      color: 'text-cyan-500',
      link: 'tin-tuc'
   }),
   ANNOUNCEMENTS: () => ({
      status: 'Thông báo',
      color: 'text-yellow-500',
      link: 'thong-bao'
   }),
   EVENTS: () => ({
      status: 'Sự kiện sắp tới',
      color: 'text-green-500',
      link: 'su-kien-sap-toi'
   })
}

export const renderStatus = (
   status: string
): {
   status: string
   color: string
   link?: string
} => {
   const strategy = statusStrategy[status]
   return strategy
      ? strategy()
      : {
           status: 'Unknown',
           color: 'text-grey-500'
        }
}

export const getUrlParams = (params: string): string => {
   const paramsID = params.split('__')[1]
   return paramsID.split('.')[0]
}
