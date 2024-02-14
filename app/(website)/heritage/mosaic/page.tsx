import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Posts from "@/app/(website)/_components/Posts/Posts";

export default async function Mosaics() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);

  return (
    <main>
      <h1>Mosaics</h1>
      <Posts posts={initial.data} />
    </main>
  );
}
