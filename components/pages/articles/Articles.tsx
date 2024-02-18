import Link from "next/link";
import { SanityDocument } from "next-sanity";

export default function Articles({ posts }: { posts: SanityDocument[] }) {
  return (
    <ul>
      {posts?.map((post) => (
        <li key={post._id}>
          <Link href={post.slug.current}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
