import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default function Mosaics({ posts }: { posts: SanityDocument[] }) {
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
