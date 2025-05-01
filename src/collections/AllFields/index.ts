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
      name: 'relationship',
      type: 'relationship',
      label: {
        en: 'Relationship',
        ja: 'リレーションシップ',
      },
      relationTo: 'pages',
    },
    {
      name: 'rich-text',
      type: 'richText',
      label: {
        en: 'Rich Text',
        ja: 'リッチテキスト',
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
    {
      name: 'textarea',
      type: 'textarea',
      label: {
        en: 'Textarea',
        ja: 'テキストエリア',
      },
    },
    {
      name: 'upload',
      type: 'upload',
      label: {
        en: 'Upload',
        ja: 'アップロード',
      },
      relationTo: 'media',
    },
    {
      type: 'collapsible',
      label: {
        en: 'Collapsible',
        ja: '折りたたみ',
      },
      fields: [
        {
          name: 'text-in-collapsible',
          type: 'text',
          label: {
            en: 'Text in Collapsible',
            ja: '折りたたみ内のテキスト',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'text1-in-row',
          label: {
            en: 'Text1 in Row',
            ja: 'Row内のテキスト1',
          },
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'text2-in-row',
          label: {
            en: 'Text2 in Row',
            ja: 'Row内のテキスト2',
          },
          type: 'text',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Tab One Label',
          fields: [
            {
              name: 'text-in-tab1',
              label: {
                en: 'Text in Tab One',
                ja: 'タブ1内のテキスト',
              },
              type: 'text',
            },
          ],
        },
        {
          label: 'Tab Two Label',
          fields: [
            {
              name: 'text-in-tab2',
              label: {
                en: 'Text in Tab Two',
                ja: 'タブ2内のテキスト',
              },
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
