import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
import { isUniqueSlug } from "@/sanity/lib/isUniqueSlug";
import WordCountInput from '@/sanity/components/wordCountInput'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
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
        isUnique: isUniqueSlug,
      },
    }),
   
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      components: {input: WordCountInput},
    }),
    defineField({
      name: 'keyWords',
      title: 'Key Words',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'Keywords for post metadata and SEO',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'mainImage',
    },
    prepare(selection) {
      const {publishedAt} = selection
      const formattedDate = publishedAt ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }) : 'Not published'
      return {...selection, subtitle: formattedDate}
    },
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedDateDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
    {
      title: 'Published Date, Old',
      name: 'publishedDateAsc',
      by: [
        {field: 'publishedAt', direction: 'asc'}
      ]
    },
      ]
})
