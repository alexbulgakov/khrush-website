'use client'

import { Container, Heading, Flex, Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

import MovableImages from '../MovableImages/MovableImages'

export default function Hero() {
  const gradient = useColorModeValue(
    'linear(to-l, #C33764, #1D2671)',
    'linear(to-l, #00416A, #799F0C, #FFE000)',
  )

  return (
    <Container centerContent maxW="xl" pt="180">
      <Flex justify="space-between" align="center">
        <Box mr="100">
          <Heading
            fontWeight="extrabold"
            bgGradient={gradient}
            bgClip="text"
            size="4xl"
            as="h1"
          >
            НЕСКУЧНАЯ ИСТОРИЯ
          </Heading>
        </Box>
        <MovableImages />
      </Flex>
    </Container>
  )
}
