import {defineType} from 'sanity'

export default defineType({
  name: 'courseAccess',
  type: 'document',
  title: 'Course Access',
  fields: [
    {
      name: 'user',
      type: 'reference',
      to: [{type: 'user'}],
      title: 'Student',
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
  ],
})
