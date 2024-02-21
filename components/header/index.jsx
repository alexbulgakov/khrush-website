'use client'
import { useState } from 'react'

// import ColorSchemeToggle from '@/components/shared/ColorSchemeToggle/ColorSchemeToggle'
import { AnimatePresence, motion } from 'framer-motion'
import { useMantineColorScheme } from '@mantine/core'
import logoLight from '@/public/logo/logo_light.png'
import logoDark from '@/public/logo/logo_dark.png'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import { background, opacity } from './anim'
import Nav from './nav'

import styles from './style.module.scss'

const ColorSchemeToggle = dynamic(
  () => import('@/components/shared/ColorSchemeToggle/ColorSchemeToggle'),
  { ssr: false },
) //сделать то же самое для шапки

export default function index() {
  const [isActive, setIsActive] = useState(false)
  const { colorScheme } = useMantineColorScheme()

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link className={styles.logo} href="/">
          {colorScheme === 'light' ? (
            <Image src={logoDark} height={42} width={45} alt="logo" />
          ) : (
            <Image src={logoLight} height={42} width={45} alt="logo" />
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
              className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
            ></div>
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
              <p>О нас</p>
            </div>
          </motion.div>
          <motion.div
            animate={!isActive ? 'open' : 'closed'}
            className={styles.about}
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
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  )
}
