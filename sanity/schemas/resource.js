import {defineType} from 'sanity'

export default defineType({
  name: 'resource',
  type: 'document',
  title: 'Resource',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: 'Document', value: 'document'},
          {title: 'Image', value: 'image'},
          {title: 'Audio', value: 'audio'},
          {title: 'Video', value: 'video'},
        ],
      },
    },
    {
      name: 'file',
      type: 'file',
      title: 'File',
    },
    {
      name: 'video',
      type: 'reference',
      to: [{type: 'video'}],
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
})
