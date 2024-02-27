'use client'

import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

import { opacity } from '../../animation'

import styles from './NavImage.module.scss'

export default function NavImage({
  isActive,
  src,
  alt,
}: {
  src: StaticImageData
  isActive: boolean
  alt: string
}) {
  return (
    <motion.div
      animate={isActive ? 'open' : 'closed'}
      className={styles.imageContainer}
      variants={opacity}
      initial="initial"
    >
      <Image sizes="(min-width: 808px) 50vw, 100vw" src={src} alt={alt} fill />
    </motion.div>
  )
}
