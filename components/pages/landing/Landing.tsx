'use client'

import blurLight from '@/public/hero-images/shaula.png'
import blurDark from '@/public/hero-images/vega.png'
import { useColorMode } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

import Hero from './Hero/Hero'

// import classes from './Landing.module.scss'

export default function Landing() {
  const { colorMode } = useColorMode()

  return (
    <Box overflow="hidden" pos="relative">
      {colorMode === 'light' ? (
        <Image
          style={{
            objectFit: 'cover',
          }}
          src={blurLight}
          sizes="100vw"
          quality={100}
          alt="blur"
          fill
        />
      ) : (
        <Image
          style={{
            objectFit: 'cover',
            opacity: 0.6,
          }}
          src={blurDark}
          sizes="100vw"
          quality={100}
          alt="blur"
          fill
        />
      )}

      <Hero />
    </Box>
  )
}
