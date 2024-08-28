import { DefaultSearchParams } from '@/types/utils'

function buildQuery(queryProps: DefaultSearchParams): string {
   const params = new URLSearchParams()

   if (queryProps.page) params.set('page', queryProps.page)
   if (queryProps.size) params.set('size', queryProps.size)
   if (queryProps.filter) params.set('filter', queryProps.filter)
   if (queryProps.value) params.set('value', queryProps.value)

   return params.toString()
}

// Function to build search URL with optional additional filters
function buildSearchUrl(
   queryProps: DefaultSearchParams,
   filters?: Record<string, string[]>
): string {
   const baseQuery = buildQuery(queryProps)
   const params = new URLSearchParams(baseQuery)

   if (filters) {
      Object.entries(filters).forEach(([key, values]) => {
         values.forEach((value) => {
            params.append('filter', key)
            params.append('value', value)
         })
      })
   }

   const queryString = params.toString()
   return queryString ? `search?${queryString}` : 'search'
}

export const searchWithFilters = (
   queryProps: DefaultSearchParams,
   filters?: Record<string, string[]>
): string => {
   return buildSearchUrl(queryProps, filters)
}
