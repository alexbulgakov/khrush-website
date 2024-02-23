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
    <html className={fonts.exo.variable} lang="ru">
      <head></head>
      <body>
        <Providers>
          {children}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </Providers>
      </body>
    </html>
  )
}
