'use client'

// import Link from 'next/link'
import { useEffect, useState } from 'react'

import logoLight from '@/public/logo/logo_light.png'
// import { usePathname } from 'next/navigation'
import { Text } from '@mantine/core'
import Image from 'next/image'

import styles from './Header.module.scss'

export default function Header() {
  // const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={
        isScrolled ? `${styles.header} ${styles.scrolled}` : styles.header
      }
    >
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
