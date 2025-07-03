import React from 'react'
import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

const ColorPreview = ({hex}) => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24,
    }}>
    <span
        style={{
          display: 'inline-block',
          width: 24,
          height: 24,
          borderRadius: '50%',
          backgroundColor: hex || '#fff',
          border: '1px solid #ccc',
        }}
    />
    </div>
);

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
      // initialValue: {hex: '#ffffff'},
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      color: 'color',
    },
    prepare({title, color}) {
      return {
        title,
        media: color?.hex ? <ColorPreview hex={color.hex} /> : TagIcon,
      }
    },
  },
});