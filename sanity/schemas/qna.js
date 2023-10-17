import {defineType} from 'sanity'

export default defineType({
  name: 'qna',
  type: 'document',
  title: 'Q&A',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question',
    },
    {
      name: 'answer',
      type: 'string',
      title: 'Answer',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'student',
      type: 'reference',
      to: [{ type: 'user' }],
      title: 'Student',
    },
    {
      name: 'teacher',
      type: 'reference',
      to: [{ type: 'user' }],
      title: 'Teacher',
    },
    {
      name: 'video',
      type: 'reference',
      to: [{ type: 'video' }],
      title: 'Video',
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
});
