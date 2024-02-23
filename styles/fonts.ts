import { Raleway, Exo_2 } from 'next/font/google'

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['cyrillic'],
})

const exo = Exo_2({
  variable: '--font-exo',
  subsets: ['cyrillic'],
})

export const fonts = {
  raleway,
  exo,
}
