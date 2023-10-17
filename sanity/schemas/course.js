import { defineType } from 'sanity';

export default defineType({
  name: 'course',
  type: 'document',
  title: 'Course',
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
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
      title: 'Teacher',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'discount',
      type: 'number',
      title: 'Discount',
      options: {
        min: 1,
        max: 100,
      },
    },
    {
      name: 'courseLevel',
      type: 'string',
      title: 'Course Level',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
        ],
      },
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Tags',
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
