import {defineType} from 'sanity'

export default defineType({
  name: 'review',
  type: 'document',
  title: 'Review',
  fields: [
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
    },
    {
      name: 'comment',
      type: 'text',
      title: 'Comment',
    },
    {
      name: 'user',
      type: 'reference',
      to: [{type: 'user'}],
      title: 'User',
    },
    {
      name: 'course',
      type: 'reference',
      to: [{type: 'course'}],
      title: 'Course',
    },
    {
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
    },
    {
      name: 'updatedAt',
      type: 'datetime',
      title: 'Updated At',
    },
  ],
})
