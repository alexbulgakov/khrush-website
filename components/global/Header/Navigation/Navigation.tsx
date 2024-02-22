'use client'
import { useState } from 'react'

import { motion } from 'framer-motion'

import NavImage from './NavImage/NavImage'
import { height } from '../animation'
import Footer from './Footer/Footer'
import Body from './Body/Body'

import styles from './Navigation.module.scss'

const links = [
  {
    href: '/heritage/mosaics',
    src: 'mosaics.jpg',
    title: 'Мозаики',
  },
  {
    href: '/heritage/architecture',
    src: 'architecture.jpg',
    title: 'Архитектура',
  },
  {
    href: '/heritage/monuments',
    src: 'monuments.jpg',
    title: 'Памятники',
  },
  {
    href: '/heritage/signage',
    src: 'signage.jpg',
    title: 'Вывески',
  },
  {
    href: '/heritage/stained-glass-windows',
    src: 'stained-glass-windows.jpg',
    title: 'Витражи',
  },
  {
    href: '/heritage/reliefs',
    src: 'reliefs.jpg',
    title: 'Рельефы',
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
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  )
}
