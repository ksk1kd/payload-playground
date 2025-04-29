import type { GlobalConfig } from 'payload'

export const EmergencyNotice: GlobalConfig = {
  slug: 'emergency-notice',
  label: {
    en: 'Emergency Notice',
    ja: '緊急のお知らせ',
  },
  fields: [
    {
      name: 'items',
      label: {
        en: 'Items',
        ja: 'アイテム',
      },
      type: 'array',
      fields: [
        {
          name: 'title',
          label: {
            en: 'Title',
            ja: 'タイトル',
          },
          type: 'text',
          required: true,
        },
      ],
      maxRows: 10,
    },
  ],
}
