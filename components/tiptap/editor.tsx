'use client'
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import Document from '@tiptap/extension-document'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Image from '@tiptap/extension-image'
import Dropcursor from '@tiptap/extension-dropcursor'
import Typography from '@tiptap/extension-typography'
import { HardBreak } from '@tiptap/extension-hard-break'
import TextAlign from '@tiptap/extension-text-align'
import Toolbar from '@/components/tiptap/toolbar'
import { cn } from '@/lib/utils'

interface Props {
   body: string | null
   onChange?: (text: string) => void
   editable?: boolean
}

const Editor = ({ body, onChange, editable }: Props) => {
   const editor = useEditor({
      editable,
      extensions: [
         StarterKit,
         Document,
         Paragraph,
         Text,
         TextStyle,
         Heading.configure({
            levels: [1, 2, 3, 4, 5, 6]
         }),
         Color,
         BulletList.configure({
            HTMLAttributes: {
               class: 'list-disc mx-4'
            }
         }),
         OrderedList.configure({
            HTMLAttributes: {
               class: 'list-decimal mx-4'
            }
         }),
         ListItem.configure({
            HTMLAttributes: {
               class: 'ml-4'
            }
         }),
         Image.configure({
            inline: true,
            HTMLAttributes: {
               class: 'mx-auto w-full h-auto py-2'
            }
         }),
         HardBreak,
         Dropcursor,
         Typography.configure({
            oneHalf: false,
            oneQuarter: false,
            threeQuarters: false
         }),
         TextAlign.configure({
            types: ['heading', 'paragraph']
         })
      ],

      editorProps: {
         attributes: {
            class: cn(
               editable &&
                  'prose-2xl rounded-md border min-h-[300px] border-input bg-back p-2 w-full'
            )
         }
      },
      content: body,
      onUpdate: ({ editor }) => {
         onChange && onChange(editor.getHTML())
      }
   })
   return (
      <div className='flex flex-col gap-2 justify-stretch min-h-[300px]'>
         {editable && <Toolbar editor={editor} />}
         <EditorContent editor={editor} className='w-full' />
      </div>
   )
}

export default Editor
