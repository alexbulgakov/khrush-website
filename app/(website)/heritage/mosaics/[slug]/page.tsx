import { POSTS_QUERY, POST_QUERY } from '@/sanity/lib/queries'
import { SanityDocument, QueryParams } from 'next-sanity'
import { loadQuery } from '@/sanity/lib/store'
import { client } from '@/sanity/lib/client'

import Article from '../../../../../components/pages/Article/ArticlePage'

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY)

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function Page({ params }: { params: QueryParams }) {
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params, {})

  return <Article post={initial.data} />
}
