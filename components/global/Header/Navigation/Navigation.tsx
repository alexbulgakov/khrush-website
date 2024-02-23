'use client'
import { useState } from 'react'

import stainedGlassWindows from '@/public/nav-images/stained-glass-windows.jpg'
import architecture from '@/public/nav-images/architecture.jpg'
import monuments from '@/public/nav-images/monuments.jpg'
import mosaics from '@/public/nav-images/mosaics.jpg'
import signage from '@/public/nav-images/signage.jpg'
import reliefs from '@/public/nav-images/reliefs.jpg'
import { motion } from 'framer-motion'

import NavImage from './NavImage/NavImage'
import { height } from '../animation'
import Footer from './Footer/Footer'
import Body from './Body/Body'

import styles from './Navigation.module.scss'

const links = [
  {
    href: '/heritage/mosaics',
    title: 'Мозаики',
    src: mosaics,
  },
  {
    href: '/heritage/architecture',
    title: 'Архитектура',
    src: architecture,
  },
  {
    href: '/heritage/monuments',
    title: 'Памятники',
    src: monuments,
  },
  {
    href: '/heritage/signage',
    title: 'Вывески',
    src: signage,
  },
  {
    href: '/heritage/stained-glass-windows',
    src: stainedGlassWindows,
    title: 'Витражи',
  },
  {
    href: '/heritage/reliefs',
    title: 'Рельефы',
    src: reliefs,
  },
]

export default function Navigation() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  })

  return (
    <motion.div
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            setSelectedLink={setSelectedLink}
            selectedLink={selectedLink}
            links={links}
          />
          <Footer />
        </div>
        <NavImage
          alt={links[selectedLink.index].title}
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  )
}
