import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import { theme } from '@/styles/theme'

import '@mantine/core/styles.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
