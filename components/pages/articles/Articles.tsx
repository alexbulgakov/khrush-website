import { SanityDocument } from 'next-sanity'
import Link from 'next/link'

export default function Articles({ posts }: { posts: SanityDocument[] }) {
  return (
    <ul>
      {posts?.map((post) => (
        <li key={post._id}>
          <Link href={`mosaics/${post.slug.current}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
