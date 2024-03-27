'use client'

import { useEffect, useState } from 'react'

import { Container, VStack, Flex, Text, Box } from '@chakra-ui/react'
import novosibirsk from '@/public/hero-images/novosibirsk.png'
import { shouldForwardProp, chakra } from '@chakra-ui/react'
import mangazeya from '@/public/hero-images/mangazeya.png'
import lineLight from '@/public/hero-images/lineLight.svg'
import { isValidMotionProp, motion } from 'framer-motion'
import lineDark from '@/public/hero-images/lineDark.svg'
import biysk from '@/public/hero-images/biysk.png'
import tomsk from '@/public/hero-images/tomsk.png'
import { useColorMode } from '@chakra-ui/react'
import Image from 'next/image'

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
  const fontColor = '#FF7757'
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
  const { colorMode } = useColorMode()
  return (
    <Box overflow="hidden" pos="relative">
      {colorMode === 'light' ? (
        <Image
          style={{
            objectFit: 'cover',
            opacity: 0.5,
          }}
          src={lineDark}
          sizes="100vw"
          quality={100}
          alt="blur"
          fill
        />
      ) : (
        <Image
          style={{
            objectFit: 'cover',
            opacity: 0.2,
          }}
          src={lineLight}
          sizes="100vw"
          quality={100}
          alt="blur"
          fill
        />
      )}
      <Container
        justifyContent={{ base: 'center', sm: 'start' }}
        pt={{ base: '120px', md: '170px' }}
        pos="relative"
        centerContent
        h="100vh"
      >
        <Flex
          direction={{ base: 'column-reverse', lg: 'row' }}
          gap={{ base: '30px', sm: '0px' }}
          align="center"
        >
          <VStack
            mr={{ base: '0px', lg: '20px', xl: '50px' }}
            mt={{ base: '20px', lg: '0px' }}
            spacing="0"
          >
            <Box
              w={{ base: '280px', sm: '350px', xl: '500px' }}
              h={{ base: '60px', xl: '90px' }}
            >
              <Text
                fontSize={{ base: '40px', sm: '50px', xl: '66px' }}
                fontFamily={'var(--font-raleway)'}
                fontWeight="extrabold"
                color={fontColor}
                m="0"
              >
                ИССЛЕДУЙТЕ
              </Text>
            </Box>
            <Box
              w={{ base: '280px', sm: '350px', xl: '500px' }}
              h={{ lg: '100px', xl: '150px' }}
            >
              <ChakraBox
                transition={{ duration: '1' }}
                variants={textVariants}
                animate="visible"
                initial="hidden"
                key={line.id}
                exit="hidden"
              >
                <Text
                  fontSize={{ base: '18px', sm: '30px', xl: '45px' }}
                  align={{ base: 'center', lg: 'left' }}
                  fontFamily={'var(--font-raleway)'}
                  fontWeight="bold"
                  lineHeight="1"
                >
                  {line.text}
                </Text>
              </ChakraBox>
            </Box>
          </VStack>
          <MovableImages image={images[currentImageIndex]} />
        </Flex>
      </Container>
    </Box>
  )
}
