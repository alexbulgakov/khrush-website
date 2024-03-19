import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'
import { SanityDocument } from 'next-sanity'
import Image from 'next/image'

export default async function Article({ post }: { post: SanityDocument }) {
  const { mainImage, content, title } = post
  const imageUrl = urlForImage(mainImage)

  return (
    <main>
      {title ? <h1>{title}</h1> : null}
      {mainImage ? (
        <Image
          alt={'Главное изображение статьи'}
          src={imageUrl}
          width={1000}
          height={600}
        />
      ) : null}
      {content ? <PortableText value={content} /> : null}
    </main>
  )
}
