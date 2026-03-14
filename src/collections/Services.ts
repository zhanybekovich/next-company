import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Услуга',
    plural: 'Услуги',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Заголовок',
      maxLength: 30,
      admin: {
        placeholder: "Например: 'Консультация'",
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Описание услуги',
      maxLength: 200,
      admin: {
        rows: 4,
      },
    },
    {
      name: 'icon',
      type: 'upload',
      required: true,
      label: 'Иконка',
      relationTo: 'media',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
