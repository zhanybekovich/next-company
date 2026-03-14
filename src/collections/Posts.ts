import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Новость',
    plural: 'Новости',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      maxLength: 250,
      required: true,
      label: 'Заголовок новости',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'ЧПУ (человеко-понятный URL)',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [
          ({ data, originalDoc }) => {
            // если slug уже есть (например при обновлении) — не трогаем
            if (originalDoc?.slug) return originalDoc.slug

            if (data?.title) {
              return slugify(data.title, {
                lower: true,
                strict: true, // убирает спецсимволы
                locale: 'ru',
              })
            }
          },
        ],
      },
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 160,
      required: true,
      label: 'SEO Описание',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Содержимое новости',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Изображение',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      label: 'Категории',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'isPublished',
      type: 'checkbox',
      defaultValue: false,
      label: 'Опубликовать?',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
