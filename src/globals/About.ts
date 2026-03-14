import { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  label: 'Страница "О нас"',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Заголовок',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'SEO Описание',
      maxLength: 160,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Содержимое страницы',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Изображение для страницы "О нас"',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
