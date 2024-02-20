import type { Metadata } from 'next'

import Header from '@/components/header'

import 'normalize.css/normalize.css'
import '@/styles/global.scss'

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon/favicon-light.ico',
      },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
  description: 'Нескучная история',
  title: 'Храш',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
