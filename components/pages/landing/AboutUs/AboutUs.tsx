import { Container, Text, Flex, Box } from '@chakra-ui/react'
import orn from '@/public/landing-images/orn.svg'
import Image from 'next/image'

function AboutUs() {
  return (
    <Box
      mt={{ base: '20px', md: '50px' }}
      // bgImage={orn.src}
      height="100vh"
      pos="relative"
      // centerContent
      width="100vw"
    >
      <Image
        style={{
          objectFit: 'cover',
          opacity: 0.02,
          zIndex: -1,
        }}
        alt="Mountains"
        quality={100}
        sizes="100vw"
        src={orn}
        fill
      />
      <Flex direction="column" justify="center" align="center" gap="40px">
        <Box flex="1">
          <Text fontSize="60px" align="center" lineHeight="1" maxW="1000px">
            Прошлое в деталях:
            <br /> истории, скрытые на виду
          </Text>
        </Box>
        <Box maxW="1000px" flex="1">
          <Text fontSize="25px" align="center">
            Мы - команда ученых-энтузиастов, наша цель - сохранение
            исторического наследия. Мы уверены, что искусство всегда рядом:
            мозаика на соседней панельке, скульптура в парке возле дома - все
            это таит в себе множество тайн и удивительных историй.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default AboutUs
