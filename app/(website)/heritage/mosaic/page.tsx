import Link from "next/link";

export default function Mosaic() {
  const posts = [{ slug: "1" }, { slug: "2" }, { slug: "3" }];

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/heritage/mosaic/${post.slug}`}>
              `Мозаика {post.slug}`
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
