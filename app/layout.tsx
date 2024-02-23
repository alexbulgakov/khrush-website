import { theme } from '@/styles/theme'

import '@mantine/core/styles.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head></head>
      <body>{children}</body>
    </html>
  )
}
