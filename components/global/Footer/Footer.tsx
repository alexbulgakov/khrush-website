'use client'

import { useColorMode, Stack, Text, Box } from '@chakra-ui/react'
import logoLight from '@/public/logo/logo_light.png'
import logoDark from '@/public/logo/logo_dark.png'
import Image from 'next/image'

export default function Footer() {
  const { colorMode } = useColorMode()

  return (
    <Box
      py={{ base: '12px', md: '40px' }}
      //   borderTopColor="gray.200"
      role="contentinfo"
      //   borderTop="1px"
      as="footer"
      w="100%"
    >
      <Stack justify="space-around" direction="column" align="center" gap={5}>
        {colorMode === 'light' ? (
          <Image src={logoLight} height={52} width={55} alt="logo" />
        ) : (
          <Image src={logoDark} height={52} width={55} alt="logo" />
        )}
        <Text color="fg.subtle" fontSize="sm">
          &copy; {new Date().getFullYear()} Храш
        </Text>
      </Stack>
    </Box>
  )
}
