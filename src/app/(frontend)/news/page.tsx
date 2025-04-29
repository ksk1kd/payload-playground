import configPromise from '@payload-config'
import { getPayload } from 'payload'
import Link from 'next/link'
import React from 'react'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const news = await payload.find({
    collection: 'news',
    sort: '-publishedAt',
  })

  return (
    <div className="mx-40 py-20">
      <h1 className="mb-16 text-4xl">News</h1>
      <ul className="flex flex-col gap-4">
        {news.docs.map(news => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`} className="py-3 px-2">
              {new Date(news.publishedAt).toLocaleDateString()} {news.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
