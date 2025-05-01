import type { CollectionConfig } from 'payload'

export const AllFields: CollectionConfig = {
  slug: 'all-fields',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: {
        en: 'Title',
        ja: 'タイトル',
      },
    },
    {
      name: 'array',
      type: 'array',
      label: {
        en: 'Array',
        ja: '配列',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: {
            en: 'Title',
            ja: 'タイトル',
          },
        },
      ],
    },
    {
      name: 'checkbox',
      type: 'checkbox',
      label: {
        en: 'Checkbox',
        ja: 'チェックボックス',
      },
    },
    {
      name: 'code',
      type: 'code',
      label: {
        en: 'Code',
        ja: 'コード',
      },
    },
    {
      name: 'date',
      type: 'date',
      label: {
        en: 'Date',
        ja: '日付',
      },
    },
    {
      name: 'email',
      type: 'email',
      label: {
        en: 'Email',
        ja: 'メール',
      },
    },
    {
      name: 'group',
      type: 'group',
      label: {
        en: 'Group',
        ja: 'グループ',
      },
      fields: [
        {
          name: 'child1',
          type: 'text',
          required: true,
          label: {
            en: 'Child1',
            ja: '子1',
          },
        },
        {
          name: 'child2',
          type: 'text',
          required: true,
          label: {
            en: 'Child2',
            ja: '子2',
          },
        },
      ],
    },
    {
      name: 'json',
      type: 'json',
    },
    {
      name: 'number',
      type: 'number',
      label: {
        en: 'Number',
        ja: '数値',
      },
    },
    // {
    //   name: 'point',
    //   type: 'point',
    //   label: {
    //     en: 'Point',
    //     ja: '座標',
    //   },
    // },
    {
      name: 'radio',
      type: 'radio',
      label: {
        en: 'Radio',
        ja: 'ラジオボタン',
      },
      options: [
        {
          label: {
            en: 'Options1',
            ja: 'オプション1',
          },
          value: 'option1',
        },
        {
          label: {
            en: 'Option2',
            ja: 'オプション2',
          },
          value: 'option2',
        },
      ],
    },
    {
      name: 'textarea',
      type: 'textarea',
      label: {
        en: 'Textarea',
        ja: 'テキストエリア',
      },
    },
    {
      name: 'select',
      type: 'select',
      options: [
        {
          label: {
            en: 'Options1',
            ja: 'オプション1',
          },
          value: 'option1',
        },
        {
          label: {
            en: 'Option2',
            ja: 'オプション2',
          },
          value: 'option2',
        },
      ],
      label: {
        en: 'Select',
        ja: 'セレクト',
      },
    },
  ],
}
