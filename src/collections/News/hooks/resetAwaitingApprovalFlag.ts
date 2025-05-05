import type { CollectionBeforeChangeHook } from 'payload'

import type { News } from '../../../payload-types'

export const resetAwaitingApprovalFlag: CollectionBeforeChangeHook<News> = async ({ data }) => {
  if (data._status === 'published' && data.isAwaitingApproval === true) {
    data.isAwaitingApproval = false
  }

  return data
}
