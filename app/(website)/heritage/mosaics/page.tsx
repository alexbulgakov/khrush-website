import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Articles from "@/components/pages/articles/Articles";

export default async function Mosaics() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY, {}, {});

  return (
    <main>
      <h1>Mosaics</h1>
      <Articles posts={initial.data} />
    </main>
  );
}
