export default {
  name: 'wrap',
  title: 'Wrap Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string'
    },

    {
      name: 'afterImage',
      title: 'After Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
