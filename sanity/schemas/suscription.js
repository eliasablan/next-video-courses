import {defineType} from 'sanity'

export default defineType({
  name: 'subscription',
  type: 'document',
  title: 'Subscription',
  fields: [
    {
      name: 'user',
      type: 'reference',
      to: [{type: 'user'}],
      title: 'Student',
    },
    {
      name: 'plan',
      type: 'reference',
      to: [{type: 'plan'}],
      title: 'Plan',
    },
    {
      name: 'planDuration',
      type: 'number',
      title: 'Plan Duration',
    },
    {
      name: 'planExpiration',
      type: 'datetime',
      title: 'Plan Expiration',
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
