import { groq } from 'next-sanity'

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`

export const LAST_THREE_POSTS_QUERY = groq`*[_type == "post" && defined(slug)] | order(publishedAt desc)[0...3]`
