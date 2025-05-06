import configPromise from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import { headers as getHeaders } from 'next/headers'
import type { Config } from '@/payload-types'

type Args = {
  params: Promise<{
    id: number
    locale: Config['locale']
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { id, locale } = await paramsPromise

  const payload = await getPayload({ config: configPromise })
  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })

  const result = await payload.find({
    collection: 'news',
    limit: 1,
    where: {
      id: {
        equals: id,
      },
    },
    locale,
    user,
    overrideAccess: false,
  })

  const news = result.docs?.[0]

  if (!news) notFound()

  return (
    <article className="mx-40 py-20">
      <div className="block mb-5">
        <time>Published at: {new Date(news.publishedAt).toLocaleDateString(locale)}</time>
        {news.customUpdatedAt && news.customUpdatedAt !== news.publishedAt && (
          <time className="ml-4">Updated at: {new Date(news.customUpdatedAt).toLocaleDateString(locale)}</time>
        )}
      </div>
      <h1 className="mb-12 text-4xl">{news.title}</h1>
      {news.body && <RichText data={news.body} />}
    </article>
  )
}
