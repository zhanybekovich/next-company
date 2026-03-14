import { GlobalConfig } from 'payload'

export const Contacts: GlobalConfig = {
  slug: 'contacts',
  label: 'Страница "Контакты"',
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
      label: 'Описание',
      admin: {
        rows: 4,
      },
    },
    {
      name: 'mapCode',
      type: 'textarea',
      required: true,
      label: 'Код карты (Google Maps или Yandex)',
      defaultValue:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5847.685915888107!2d74.60983362509661!3d42.87615869637101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c0cdbbae15%3A0xa6b565413fa531df!2z0KbQo9Cc!5e0!3m2!1sru!2skg!4v1772790582404!5m2!1sru!2skg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      admin: {
        rows: 5,
      },
    },
  ],
}
