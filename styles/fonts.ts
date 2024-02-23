import { Nunito, Exo_2 } from 'next/font/google'

// const nunito = Nunito({
//   weight: ['400', '700'],
//   subsets: ['cyrillic'],
//   display: 'swap',
// })

const exo = Exo_2({
  variable: '--font-exo',
  subsets: ['cyrillic'],
})

export const fonts = {
  exo,
}
