import configPromise from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

type Args = {
  params: Promise<{
    id: number
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { id } = await paramsPromise

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'news',
    limit: 1,
    where: {
      id: {
        equals: id,
      },
    },
  })

  const news =  result.docs?.[0]

  if (!news) notFound()

  return (
    <article className="mx-40 py-20">
      <time className="block mb-5">{new Date(news.publishedAt).toLocaleDateString()}</time>
      <h1 className="mb-12 text-4xl">{news.title}</h1>
      {news.body && (
        <RichText data={news.body} />
      )}
    </article>
  )
}
