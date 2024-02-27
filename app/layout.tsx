import { ColorModeScript } from '@chakra-ui/react'
import { fonts } from '@/styles/fonts'
import { theme } from '@/styles/theme'

import { Providers } from './providers'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${fonts.exo.variable} ${fonts.raleway.variable}`}
      lang="ru"
    >
      <head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
