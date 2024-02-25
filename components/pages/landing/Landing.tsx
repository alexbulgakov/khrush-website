import Ornament from '@/public/hero-images/ornament.svg'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

import Hero from './Hero/Hero'

import classes from './Landing.module.scss'

export default function Landing() {
  return (
    <Box overflow="hidden" pos="relative">
      <Ornament
        style={{
          position: 'absolute',
          height: 'auto',
          right: '80px',
          width: '20%',
          top: '200px',
          opacity: 0.6,
          zIndex: -1,
        }}
        alt="circles"
      />
      <Hero />
    </Box>
  )
}
