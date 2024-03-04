'use client'

import { SanityDocument } from 'next-sanity'
import { Box } from '@chakra-ui/react'

import NewArticles from './NewArticles/NewArticles'
import Statistics from './Statistics/Statistics'
import AboutUs from './AboutUs/AboutUs'
import Photos from './Photos/Photos'
import Hero from './Hero/Hero'

export default function Landing({ posts }: { posts: SanityDocument[] }) {
  return (
    <Box overflow="hidden" pos="relative">
      <Hero />
      <AboutUs />
      <Statistics />
      <Photos />
      <NewArticles posts={posts} />
    </Box>
  )
}
