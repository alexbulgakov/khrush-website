'use client'

import { Container, Heading, Flex, Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

import MovableImages from '../MovableImages/MovableImages'

export default function Hero() {
  const gradient = useColorModeValue(
    'linear(to-l, #0721e1,#373B44)',
    'linear(to-l, #0721e1,#ffffff)',
  )

  return (
    <Container centerContent h="100vh" pt="180">
      <Flex justify="space-between" align="center">
        <Box mr="100">
          <Heading
            fontWeight="extrabold"
            bgGradient={gradient}
            bgClip="text"
            size="4xl"
            as="h1"
          >
            Нескучная история
          </Heading>
        </Box>

        <MovableImages />
      </Flex>
    </Container>
  )
}
