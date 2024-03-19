/* theme.ts */
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      ':root': {
        '--brand-color-light': 'FFD2C7',
        '--brand-color': '#FF7757',
        '--border-radius': '7px',
      },
    },
  },
  fonts: {
    heading: 'var(--font-raleway)',
    body: 'var(--font-exo)',
  },
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
})
