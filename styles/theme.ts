import { Nunito, Exo_2 } from 'next/font/google'
import { createTheme } from '@mantine/core'

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['cyrillic'],
  display: 'swap',
})

const exo = Exo_2({
  weight: ['400', '700'],
  subsets: ['cyrillic'],
  display: 'swap',
})

export const theme = createTheme({
  // headings: { fontFamily: `${nunito.style.fontFamily}, sans-serif` },
  headings: { fontFamily: `${exo.style.fontFamily}, sans-serif` },
  fontFamily: `${exo.style.fontFamily}, sans-serif`,
})
