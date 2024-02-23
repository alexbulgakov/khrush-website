/* theme.ts */
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'var(--font-raleway)',
    body: 'var(--font-exo)',
  },
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
})
