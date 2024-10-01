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
      name: 'Bài viết',
      items: [
         {
            name: 'Quản lý bài viết',
            slug: 'vi/admin/bulletin'
         },
         {
            name: 'Quản lý thông tin liên hệ',
            slug: 'vi/admin/contact'
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
