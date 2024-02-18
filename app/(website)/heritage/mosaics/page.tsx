import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Articles from "@/components/pages/articles/Articles";
import { draftMode } from "next/headers";
import ArticlesPreview from "@/components/pages/articles/ArticlesPreview";

export default async function Mosaics() {
  const initial = await loadQuery<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return (
    <main>
      <h1>Mosaics</h1>
      {draftMode().isEnabled ? (
        <ArticlesPreview initial={initial} />
      ) : (
        <Articles posts={initial.data} />
      )}
    </main>
  );
}
