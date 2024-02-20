import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { opacity } from '../../anim'

import styles from './style.module.scss'

export default function Index({ isActive, src }) {
  return (
    <motion.div
      animate={isActive ? 'open' : 'closed'}
      className={styles.imageContainer}
      variants={opacity}
      initial="initial"
    >
      <Image src={`/images/${src}`} fill={true} alt="image" />
    </motion.div>
  )
}
