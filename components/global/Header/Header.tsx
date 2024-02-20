'use client'

import logoLight from '@/public/logo/logo_light.png'
// import { usePathname } from 'next/navigation'
import { Text } from '@mantine/core'
import Image from 'next/image'
// import Link from 'next/link'

import styles from './Header.module.scss'

export default function Header() {
  // const pathname = usePathname()

  return (
    <header>
      <Image
        placeholder="blur"
        src={logoLight}
        height={100}
        width={100}
        alt="logo"
      />
      <Text size="xl" fw={700}>
        Храш
      </Text>

      {/* <Link
        className={`styles.link ${pathname === '/heritage/mosaics' ? '' : ''}`}
        href={'/heritage/mosaics'}
      >
        Мозаики
      </Link> */}
    </header>
  )
}
