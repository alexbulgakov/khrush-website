import { Text, Flex, Box } from '@chakra-ui/react'
import bg from '@/public/landing-images/bg.jpg'
import Image from 'next/image'

function AboutUs() {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      height="100vh"
      pos="relative"
      display="flex"
      width="100vw"
    >
      <Image
        style={{
          objectFit: 'cover',
          opacity: 0.3,
          zIndex: -1,
        }}
        alt="ornament"
        quality={100}
        sizes="100vw"
        src={bg}
        fill
      />
      <Flex direction="column" justify="center" align="center" gap="40px">
        <Box flex="1">
          <Text
            fontSize={{
              base: '40px',
              sm: '50px',
              md: '55px',
              lg: '65px',
              xl: '70px',
            }}
            fontWeight="bold"
            align="center"
            lineHeight="1"
            maxW="1200px"
          >
            Прошлое в деталях:
            <br /> истории, скрытые на виду
          </Text>
        </Box>
        <Box maxW="850px" flex="1">
          <Text
            fontSize={{
              base: '15px',
              sm: '18px',
              md: '20px',
              lg: '20px',
              xl: '25px',
            }}
            fontWeight="bold"
            align="center"
          >
            Мы — команда ученых-энтузиастов, наша цель — сохранение
            исторического наследия. Мы уверены, что искусство всегда рядом:
            мозаика на соседней панельке, скульптура в парке возле дома — все
            это таит в себе множество тайн и удивительных историй.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default AboutUs
