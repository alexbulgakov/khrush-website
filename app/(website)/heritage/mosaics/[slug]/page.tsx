import { client } from "@/sanity/lib/client";
import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { loadQuery } from "@/sanity/lib/store";
import ArticlePreview from "@/components/pages/article/ArticlePreview";
import Article from "@/components/pages/article/Article";

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <ArticlePreview initial={initial} params={params} />
  ) : (
    <Article post={initial.data} />
  );
}
