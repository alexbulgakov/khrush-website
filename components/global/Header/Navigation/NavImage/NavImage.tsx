import { motion } from 'framer-motion'
import Image from 'next/image'

import { opacity } from '../../animation'

import styles from './NavImage.module.scss'

export default function NavImage({
  isActive,
  src,
}: {
  isActive: boolean
  src: string
}) {
  return (
    <motion.div
      animate={isActive ? 'open' : 'closed'}
      className={styles.imageContainer}
      variants={opacity}
      initial="initial"
    >
      <Image src={`/nav-images/${src}`} fill={true} alt="image" />
    </motion.div>
  )
}
