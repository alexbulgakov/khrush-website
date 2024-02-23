/* theme.ts */
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  fonts: {
    heading: 'var(--font-exo)',
    body: 'var(--font-exo)',
  },
})
