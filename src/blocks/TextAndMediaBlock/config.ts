import type { Block } from 'payload'

export const TextAndMediaBlock: Block = {
  slug: 'textAndMediaBlock',
  labels: {
    singular: {
      en: 'Text + Media Block',
      ja: 'テキスト + メディア ブロック',
    },
    plural: {
      en: 'Text + Media Block',
      ja: 'テキスト + メディア ブロック',
    },
  },
  interfaceName: 'TextAndMediaBlock',
  fields: [
    {
      name: 'text',
      label: {
        en: 'Text',
        ja: 'テキスト',
      },
      type: 'richText',
      required: true,
    },
    {
      name: 'media',
      label: {
        en: 'Media',
        ja: 'メディア',
      },
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'mediaPostion',
      label: {
        en: 'Media Postion',
        ja: 'メディアの位置',
      },
      type: 'radio',
      options: [
        {
          label: {
            en: 'Left',
            ja: '左'
          },
          value: 'left',
        },
        {
          label: {
            en: 'Right',
            ja: '右',
          },
          value: 'right',
        }
      ],
      required: true,
      defaultValue: 'left',
    }
  ],
}
