export type Item = {
   name: string
   slug: string
   description?: string
}

export const demos: { name: string; items: Item[] }[] = [
   {
      name: 'Hình ảnh',
      items: [
         {
            name: 'Quản lý Banner',
            slug: 'vi/admin/banner'
         },
         {
            name: 'Quản lý ảnh',
            slug: 'vi/admin/image'
         }
      ]
   },
   {
      name: 'Quản lý Bài viết',
      items: [
         {
            name: 'Bài viết',
            slug: 'vi/admin/bulletin'
         }
      ]
   },
   {
      name: 'Quản lý Tài khoản',
      items: [
         {
            name: 'Tài khoản',
            slug: 'vi/admin/register'
         }
      ]
   }
]
