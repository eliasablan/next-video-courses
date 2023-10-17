import {defineType} from 'sanity'

export default defineType({
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'username',
      type: 'string',
      title: 'Username',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      options: {
        list: [
          {title: 'Student', value: 'student'},
          {title: 'Teacher', value: 'teacher'},
        ],
      },
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
