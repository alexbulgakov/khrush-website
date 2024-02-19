import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import { getImage } from "@/utils/createBase64";

export default async function Article({ post }: { post: SanityDocument }) {
  const { title, mainImage, content } = post;
  const imageUrl = urlForImage(mainImage);
  const base64 = await getImage(imageUrl);

  return (
    <main>
      {title ? <h1>{title}</h1> : null}
      {mainImage ? (
        <Image
          src={imageUrl}
          width={1000}
          height={600}
          placeholder="blur"
          blurDataURL={base64}
          alt={"Главное изображение статьи"}
        />
      ) : null}
      {content ? <PortableText value={content} /> : null}
    </main>
  );
}
