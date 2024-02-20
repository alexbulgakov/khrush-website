import { createTheme } from '@mantine/core'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['cyrillic'],
  display: 'swap',
})

export const theme = createTheme({
  fontFamily: `${nunito.style.fontFamily}, sans-serif`,
})
