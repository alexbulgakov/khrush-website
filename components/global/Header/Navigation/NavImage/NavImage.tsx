import { motion } from 'framer-motion'
import Image from 'next/image'

import { opacity } from '../../animation'

import styles from './NavImage.module.scss'

export default function NavImage({
  isActive,
  src,
  alt,
}: {
  isActive: boolean
  src: string
  alt: string
}) {
  return (
    <motion.div
      animate={isActive ? 'open' : 'closed'}
      className={styles.imageContainer}
      variants={opacity}
      initial="initial"
    >
      <Image
        sizes="(min-width: 808px) 50vw, 100vw"
        src={`/nav-images/${src}`}
        alt={alt}
        fill
      />
    </motion.div>
  )
}
