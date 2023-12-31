import { defineType } from 'sanity';

export default defineType({
  name: 'video',
  type: 'document',
  title: 'Video',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      title: 'Content',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'file',
      type: 'file',
      title: 'File',
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
        },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'duration',
      type: 'number',
      title: 'Duration',
    },
    {
      name: 'course',
      type: 'reference',
      to: [{ type: 'course' }],
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
});
