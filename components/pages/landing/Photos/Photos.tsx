import EmblaCarousel from '@/components/shared/EmblaCarousel/EmblaCarousel'
import { locationsGalleryPhotos } from '@/content/images'
import { EmblaOptionsType } from 'embla-carousel'
import { Text, Box } from '@chakra-ui/react'

import '@/components/shared/EmblaCarousel/embla.css'
const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

function Photos() {
  return (
    <Box
      justifyContent="center"
      flexDirection="column"
      display="flex"
      maxW="1200px"
      gap="70px"
      my="150px"
      mx="auto"
      px="20px"
      w="100%"
    >
      <Box display="inline-block" alignSelf="flex-end" position="relative">
        <Text fontSize="60px" lineHeight="1">
          Галерея локаций
        </Text>
        <Box
          position="absolute"
          bgColor="#FF7757"
          bottom="-35px"
          width="200px"
          height="2px"
          right="0"
        />
      </Box>
      <Text
        color="var(--chakra-colors-gray-400)"
        alignSelf="flex-end"
        fontSize="20px"
      >
        Фото интересных мест
      </Text>
      <EmblaCarousel photos={locationsGalleryPhotos} options={OPTIONS} />
    </Box>
  )
}

export default Photos
