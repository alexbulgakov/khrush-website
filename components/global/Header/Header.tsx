'use client'

import { useState } from 'react'

import ColorSchemeToggle from '@/components/shared/ColorSchemeToggle/ColorSchemeToggle'
import { AnimatePresence, motion } from 'framer-motion'
import logoLight from '@/public/logo/logo_light.png'
import logoDark from '@/public/logo/logo_dark.png'
import { useColorMode } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import { transparency, background, opacity } from './animation'
import Navigation from './Navigation/Navigation'

import styles from './Header.module.scss'

export default function Header() {
  const [isActive, setIsActive] = useState(false)

  const { colorMode } = useColorMode()

  return (
    <motion.div
      animate={isActive ? 'open' : 'closed'}
      className={styles.header}
      variants={transparency}
      initial="initial"
    >
      <div className={styles.bar}>
        <Link className={styles.logo} href="/">
          {colorMode === 'light' ? (
            <Image src={logoLight} height={42} width={45} alt="logo" />
          ) : (
            <Image src={logoDark} height={42} width={45} alt="logo" />
          )}
          <div className={styles.logoText}>Храш</div>
        </Link>
        <div className={styles.menu}>
          <div
            onClick={() => {
              setIsActive(!isActive)
            }}
            className={styles.el}
          >
            <div
              className={`${styles.burger}  ${isActive ? styles.burgerActive : ''}`}
            />
            <div className={styles.label}>
              <motion.p
                animate={!isActive ? 'open' : 'closed'}
                variants={opacity}
              >
                Наследие
              </motion.p>
              <motion.p
                animate={isActive ? 'open' : 'closed'}
                variants={opacity}
              >
                Закрыть
              </motion.p>
            </div>
          </div>
          <motion.div
            animate={!isActive ? 'open' : 'closed'}
            className={styles.about}
            variants={opacity}
          >
            <div className={styles.el}>
              <p className={styles.aboutUs}>О нас</p>
            </div>
          </motion.div>
          <motion.div
            animate={!isActive ? 'open' : 'closed'}
            className={styles.colorScheme}
            variants={opacity}
          >
            <ColorSchemeToggle />
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={isActive ? 'open' : 'closed'}
        className={styles.background}
        variants={background}
        initial="initial"
      />
      <AnimatePresence mode="wait">
        {isActive && <Navigation />}
      </AnimatePresence>
    </motion.div>
  )
}
