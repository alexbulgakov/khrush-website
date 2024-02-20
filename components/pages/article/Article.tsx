import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'
import { getImage } from '@/utils/createBase64'
import { SanityDocument } from 'next-sanity'
import Image from 'next/image'

export default async function Article({ post }: { post: SanityDocument }) {
  const { mainImage, content, title } = post
  const imageUrl = urlForImage(mainImage)
  const base64 = await getImage(imageUrl)

  return (
    <main>
      {title ? <h1>{title}</h1> : null}
      {mainImage ? (
        <Image
          alt={'Главное изображение статьи'}
          blurDataURL={base64}
          placeholder="blur"
          src={imageUrl}
          width={1000}
          height={600}
        />
      ) : null}
      {content ? <PortableText value={content} /> : null}
    </main>
  )
}
