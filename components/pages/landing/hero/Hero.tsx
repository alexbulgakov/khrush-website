'use client'

import { useEffect, useState } from 'react'

import { Container, Heading, VStack, Flex, Box } from '@chakra-ui/react'
import novosibirsk from '@/public/hero-images/novosibirsk.png'
import { shouldForwardProp, chakra } from '@chakra-ui/react'
import mangazeya from '@/public/hero-images/mangazeya.png'
import { isValidMotionProp, motion } from 'framer-motion'
import { useColorModeValue } from '@chakra-ui/react'
import biysk from '@/public/hero-images/biysk.png'
import tomsk from '@/public/hero-images/tomsk.png'

import MovableImages from '../MovableImages/MovableImages'

const images = [
  {
    alt: 'Новосибирск',
    src: novosibirsk,
    id: 0,
  },
  {
    alt: 'Бийск',
    src: biysk,
    id: 1,
  },
  {
    alt: 'Мангазея',
    src: mangazeya,
    id: 2,
  },
  {
    alt: 'Томск',
    src: tomsk,
    id: 3,
  },
]

const lines = [
  { text: 'истории, застывшие в камне и стекле', id: 0 },
  {
    text: 'эпоху, отражённую в архитектурных формах',
    id: 1,
  },
  {
    text: 'памятники, хранящие отголоски прошлого',
    id: 2,
  },
]

const textVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

export default function Hero() {
  const gradient = useColorModeValue(
    'linear(to-l, #2c3e50, #fd746c)',
    'linear(to-l, #a1ffce, #faffd1)',
  )
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentLineIndex, setCurrentLineIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
      setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length)
    }, 15000)

    return () => clearInterval(interval)
  }, [currentImageIndex, currentLineIndex])

  const line = lines[currentLineIndex]

  return (
    <Container pos="relative" centerContent h="100vh" pt="180">
      <Flex justify="space-between" align="center">
        <VStack spacing="0" mr="50">
          <Box w="500px" h="100px">
            <Heading
              fontWeight="extrabold"
              bgGradient={gradient}
              height="90px"
              bgClip="text"
              size="4xl"
              as="h1"
              m="0"
            >
              Исследуйте
            </Heading>
          </Box>
          <Box w="500px" h="200px">
            <ChakraBox
              transition={{ duration: '1' }}
              variants={textVariants}
              animate="visible"
              initial="hidden"
              key={line.id}
              exit="hidden"
            >
              <Heading size="2xl" as="h2">
                {line.text}
              </Heading>
            </ChakraBox>
          </Box>
        </VStack>
        <MovableImages image={images[currentImageIndex]} />
      </Flex>
    </Container>
  )
}
