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
  //   styles: {
  //   global: {
  //     ':root': {
  //       '--hue': '320',
  //       '--bg': 'oklch(35% .3 var(--hue))',
  //       '--text': 'oklch(85% .1 var(--hue))',
  //       '--shadow': 'oklch(25% .2 var(--hue))',
  //       '--highlight': 'oklch(98% .05 var(--hue))',
  //     },
  //     '.highlighted-text-shadow': {
  //       textShadow: `
  //         0 .15ch 15px var(--shadow),
  //         0 -2px 0 var(--highlight)
  //       `,
  //     }
  //   },
  // },
})
