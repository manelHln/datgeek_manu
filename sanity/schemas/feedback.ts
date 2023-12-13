export default {
    name: 'feedback',
    type: 'document',
    title: 'Feedback',
    fields: [
      {
        name: 'fullname',
        type: 'string',
        title: 'Fullname'
      },
      {
        name: 'jobTitle',
        type: 'string',
        title: 'Job title'
      },
      {
        name: 'feedback',
        type: 'text',
        title: 'Feedback'
      },
      {
        name: 'picture',
        type: 'image',
        title: 'Picture'
      },
    ]
  }