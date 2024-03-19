import { ArrowForwardIcon } from '@chakra-ui/icons'
import { urlForImage } from '@/sanity/lib/image'
import { Heading, Box } from '@chakra-ui/react'
import { SanityDocument } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'

import classes from './Card.module.scss'

function Card({ post }: { post: SanityDocument }) {
  const { mainImage, title, slug } = post
  const imageUrl = urlForImage(mainImage)

  return (
    <Link href={`/heritage/${slug.current}`} passHref>
      <div className={classes.card}>
        <Image
          style={{
            objectFit: 'cover',
          }}
          sizes="(min-width: 808px) 50vw, 100vw"
          src={imageUrl}
          alt="Обложка"
          fill
        />
        <Box
          position="absolute"
          zIndex={10}
          bottom="0"
          right="0"
          left="0"
          p={4}
        >
          <Heading color="white" size="xl" as="h2">
            {title}
            <span className={classes.arrow}>
              <ArrowForwardIcon />
            </span>
          </Heading>
        </Box>
      </div>
    </Link>
  )
}

export default Card
