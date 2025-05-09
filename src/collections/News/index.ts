import type { CollectionConfig } from 'payload'
import { lexicalEditor, BlockquoteFeature } from '@payloadcms/richtext-lexical'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
} from '@payloadcms/plugin-seo/fields'

import { resetAwaitingApprovalFlag } from './hooks/resetAwaitingApprovalFlag'

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
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, BlockquoteFeature()]
        },
      }),
    },
    {
      name: 'meta',
      label: {
        en: 'Meta',
        ja: 'メタタグ',
      },
      type: 'group',
      fields: [
        MetaTitleField({}),
        MetaDescriptionField({}),
        MetaImageField({
          relationTo: 'media',
        })
      ]
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
    {
      name: 'customUpdatedAt',
      label: {
        en: 'Updated At',
        ja: '更新日',
      },
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
        position: 'sidebar',
      },
    },
    {
      name: 'isAwaitingApproval',
      label: {
        en: 'Awaiting Approval',
        ja: '承認待ち',
      },
      type: 'checkbox',
      admin: {
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
    update: ({ req, data }) => {
      if (!req.user?.roles) return false

      if (data?._status === 'published') {
        return req.user.roles.some((role) => ['administrator', 'approver'].includes(role))
      }

      return true
    },
    delete: ({ req }) => {
      if (!req.user?.roles) return false

      return req.user.roles.some((role) => ['administrator', 'approver'].includes(role))
    },
  },
  hooks: {
    beforeChange: [resetAwaitingApprovalFlag],
  },
}
