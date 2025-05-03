import type { CollectionConfig } from 'payload'

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    defaultColumns: ['title', 'publishedAt', 'updatedAt'],
    useAsTitle: 'title',
  },
  labels: {
    singular: {
      en: 'News',
      ja: 'お知らせ',
    },
    plural: {
      en: 'News',
      ja: 'お知らせ',
    },
  },
  fields: [
    {
      name: 'title',
      label: {
        en: 'Title',
        ja: 'タイトル',
      },
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'body',
      label: {
        en: 'Body',
        ja: '本文',
      },
      type: 'richText',
      localized: true,
    },
    {
      name: 'publishedAt',
      label: {
        en: 'Published At',
        ja: '公開日',
      },
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
        position: 'sidebar',
      },
    },
  ],
  versions: {
    drafts: true,
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true

      return {
        _status: {
          equals: 'published',
        },
      }
    },
  },
}
