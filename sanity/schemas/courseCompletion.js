import {defineType} from 'sanity'

export default defineType({
  name: 'courseCompletion',
  type: 'document',
  title: 'Course Completion',
  fields: [
    {
      name: 'user',
      type: 'reference',
      to: [{type: 'user'}],
      title: 'Student',
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
    },
    {
      name: 'finishDate',
      type: 'date',
      title: 'Finish Date',
    },
    {
      name: 'course',
      type: 'reference',
      to: [{type: 'course'}],
      title: 'Course',
    },
    {
      name: 'percentage',
      type: 'number',
      title: 'Percentage',
    },
  ],
})
