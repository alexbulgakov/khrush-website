'use client'

import { Box } from '@chakra-ui/react'

import Statistics from './Statistics/Statistics'
import AboutUs from './AboutUs/AboutUs'
import Hero from './Hero/Hero'

export default function Landing() {
  return (
    <Box overflow="hidden" pos="relative">
      <Hero />
      <AboutUs />
      <Statistics />
    </Box>
  )
}
