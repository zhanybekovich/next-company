import { GlobalConfig } from 'payload'

const urlValidator = (value?: string) => {
  if (!value) return true
  try {
    new URL(value)
    return true
  } catch {
    return 'Введите корректную ссылку'
  }
}

export const WebsiteInfo: GlobalConfig = {
  slug: 'website',
  access: {
    read: () => true,
  },
  label: 'Информация о сайте',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Название',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Описание',
      admin: {
        rows: 5,
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Логотип',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'home_banner',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Изображения на главную страницу',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'address',
      type: 'textarea',
      required: true,
      label: 'Адрес',
      admin: {
        rows: 3,
        position: 'sidebar',
      },
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Телефон',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'socials',
      type: 'group',
      label: 'Социальные сети',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook ссылка',
          validate: urlValidator,
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram ссылка',
          validate: urlValidator,
        },
        {
          name: 'telegram',
          type: 'text',
          label: 'Telegram ссылка',
          validate: urlValidator,
        },
        {
          name: 'whatsapp',
          type: 'text',
          label: 'WhatsApp ссылка',
          validate: urlValidator,
        },
      ],
    },
  ],
}
