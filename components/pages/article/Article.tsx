import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import { getPlaiceholder } from "plaiceholder";

const getImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export default async function Article({ post }: { post: SanityDocument }) {
  const { title, mainImage, content } = post;
  const imageUrl = urlForImage(mainImage);
  const { base64, img } = await getImage(imageUrl);

  return (
    <main>
      {title ? <h1>{title}</h1> : null}
      {mainImage ? (
        <Image
          {...img}
          placeholder="blur"
          blurDataURL={base64}
          alt={"Главное изображение статьи"}
        />
      ) : null}
      {content ? <PortableText value={content} /> : null}
    </main>
  );
}
