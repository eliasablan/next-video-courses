import {defineType} from 'sanity'

export default defineType({
  name: 'plan',
  type: 'document',
  title: 'Plan',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'duration',
      type: 'number',
      title: 'Duration',
    },
    {
      name: 'features',
      type: 'array',
      of: [{ type: 'string' }],
      title: 'Features',
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
