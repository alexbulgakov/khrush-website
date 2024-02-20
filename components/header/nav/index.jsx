'use client'
import { useState } from 'react'

import { motion } from 'framer-motion'

import { height } from '../anim'
import Footer from './Footer'
import Image from './Image'
import Body from './Body'

import styles from './style.module.scss'

const links = [
  {
    title: 'Мозаики',
    src: 'home.png',
    href: '/',
  },
  {
    title: 'Архитектура',
    src: 'shop.png',
    href: '/shop',
  },
  {
    title: 'Памятники',
    src: 'home.png',
    href: '/about',
  },
  {
    src: 'lookbook.png',
    title: 'Газосвет',
    href: '/lookbook',
  },
  {
    src: 'contact.png',
    title: 'Витражи',
    href: '/contact',
  },
]

export default function Index() {
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
        <Image
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  )
}
