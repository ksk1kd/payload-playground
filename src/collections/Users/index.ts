import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      options: [
        {
          label: {
            en: 'Editor',
            ja: '編集者',
          },
          value: 'editor',
        },
        {
          label: {
            en: 'Approver',
            ja: '承認者',
          },
          value: 'approver',
        },
        {
          label: {
            en: 'Administrator',
            ja: '管理者',
          },
          value: 'administrator',
        },
      ],
      hasMany: true,
    },
  ],
  timestamps: true,
}
