'use client'
import React from 'react'
import { type Editor } from '@tiptap/react'
import {
   Bold,
   Italic,
   List,
   Heading2,
   Redo2,
   Heading1,
   Heading3,
   Heading4,
   Heading5,
   Heading6,
   AlignLeft,
   AlignCenter,
   AlignRight,
   AlignJustify,
   ParkingSquare,
   FlipHorizontal,
   EthernetPort,
   ListCheck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Props {
   editor: Editor | null
}

export default function Toolbar({ editor }: Props) {
   if (!editor) return null

   return (
      <div className='border border-input bg-transparent rounded-md p-1'>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
         >
            <Bold className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
         >
            <Italic className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            disabled={!editor.can().chain().focus().setTextAlign('left').run()}
         >
            <AlignLeft className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            disabled={!editor.can().chain().focus().setTextAlign('center').run()}
         >
            <AlignCenter className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            disabled={!editor.can().chain().focus().setTextAlign('right').run()}
         >
            <AlignRight className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            disabled={!editor.can().chain().focus().setTextAlign('justify').run()}
         >
            <AlignJustify className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() => editor.chain().focus().setParagraph().run()}
            disabled={!editor.can().chain().focus().setParagraph().run()}
         >
            <ParkingSquare className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() =>
               editor
                  .chain()
                  .focus()
                  .toggleHeading({
                     level: 1
                  })
                  .run()
            }
            disabled={
               !editor
                  .can()
                  .chain()
                  .focus()
                  .toggleHeading({
                     level: 1
                  })
                  .run()
            }
         >
            <Heading1 className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() =>
               editor
                  .chain()
                  .focus()
                  .toggleHeading({
                     level: 2
                  })
                  .run()
            }
            disabled={
               !editor
                  .can()
                  .chain()
                  .focus()
                  .toggleHeading({
                     level: 2
                  })
                  .run()
            }
         >
            <Heading2 className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() =>
               editor
                  .chain()
                  .focus()
                  .toggleHeading({
                     level: 3
                  })
                  .run()
            }
            disabled={
               !editor
                  .can()
                  .chain()
                  .focus()
                  .toggleHeading({
                     level: 3
                  })
                  .run()
            }
         >
            <Heading3 className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() =>
               editor
                  .chain()
                  .focus()
                  .toggleHeading({
                     level: 4
                  })
                  .run()
            }
            disabled={
               !editor
                  .can()
                  .chain()
                  .focus()
                  .toggleHeading({
                     level: 4
                  })
                  .run()
            }
         >
            <Heading4 className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() =>
               editor
                  .chain()
                  .focus()
                  .toggleHeading({
                     level: 5
                  })
                  .run()
            }
            disabled={
               !editor
                  .can()
                  .chain()
                  .focus()
                  .toggleHeading({
                     level: 5
                  })
                  .run()
            }
         >
            <Heading5 className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() =>
               editor
                  .chain()
                  .focus()
                  .toggleHeading({
                     level: 6
                  })
                  .run()
            }
            disabled={
               !editor
                  .can()
                  .chain()
                  .focus()
                  .toggleHeading({
                     level: 6
                  })
                  .run()
            }
         >
            <Heading6 className='size-3' />
         </Button>

         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
         >
            <Redo2 className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            disabled={!editor.can().chain().focus().setHorizontalRule().run()}
         >
            <FlipHorizontal className='size-3' />
         </Button>
         <Button
            type='button'
            size='icon'
            variant='ghost'
            onClick={() => editor.chain().focus().setHardBreak().run()}
            disabled={!editor.can().chain().focus().setHardBreak().run()}
         >
            <EthernetPort className='size-3' />
         </Button>
         <Button
            type='button'
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            disabled={!editor.can().chain().focus().toggleBulletList().run()}
         >
            <List className='size-3' />
         </Button>
         <Button
            variant='ghost'
            size='icon'
            type='button'
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            disabled={!editor.can().chain().focus().toggleOrderedList().run()}
         >
            <ListCheck className='size-3' />
         </Button>
         <Button
            variant='ghost'
            type='button'
            onClick={() => editor.chain().focus().splitListItem('listItem').run()}
            disabled={!editor.can().chain().focus().splitListItem('listItem').run()}
         >
            Split list item
         </Button>
         <Button
            type='button'
            variant='ghost'
            onClick={() => editor.chain().focus().sinkListItem('listItem').run()}
            disabled={!editor.can().chain().focus().sinkListItem('listItem').run()}
         >
            Tab next
         </Button>
         <Button
            variant='ghost'
            type='button'
            onClick={() => editor.chain().focus().liftListItem('listItem').run()}
            disabled={!editor.can().chain().focus().liftListItem('listItem').run()}
         >
            Tab previous
         </Button>
         <Input
            type='color'
            className='inline-flex size-6 p-0'
            onInput={(event: any) =>
               editor.chain().focus().setColor(event.target.value).run()
            }
            value={editor.getAttributes('textStyle').color}
            data-testid='setColor'
         />
      </div>
   )
}
