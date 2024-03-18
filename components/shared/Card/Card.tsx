import { useState } from 'react'

import { useColorModeValue, Heading, VStack, Text, Box } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { urlForImage } from '@/sanity/lib/image'
import { SanityDocument } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'

function Card({ post }: { post: SanityDocument }) {
  const { mainImage, excerpt, title, slug } = post
  const imageUrl = urlForImage(mainImage)
  const [isHovered, setIsHovered] = useState(false)

  const MotionBox = motion(Box)

  return (
    <Link href={`/heritage/${slug.current}`} passHref>
      <MotionBox
        style={{
          // boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          borderRadius: '7px',
          overflow: 'hidden',
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        backgroundColor="black"
        position="relative"
        height="300px"
        boxShadow="xl"
        width="500px"
      >
        <Image
          style={{
            objectFit: 'cover',
            opacity: 0.8,
          }}
          src={imageUrl}
          sizes="100vw"
          alt="Обложка"
          quality={100}
          fill
        />
        <Box
          position="absolute"
          boxShadow="lg"
          bottom="0"
          right="0"
          left="0"
          p={4}
        >
          {/* <VStack align="start" spacing={2}> */}
          <Heading color="white" size="xl" as="h2">
            {title}
          </Heading>
          {/* <Text color="white" fontSize="xl">
              {excerpt}
            </Text> */}
          {/* <AnimatePresence>
              {isHovered && (
                <MotionBox
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0, y: 50 }}
                >
                  <Text color="white" fontSize="sm">
                    {excerpt}
                  </Text>
                </MotionBox>
              )}
            </AnimatePresence> */}
          {/* </VStack> */}
        </Box>
      </MotionBox>
    </Link>
  )
}

export default Card
