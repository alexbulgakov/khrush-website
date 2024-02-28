'use client'

import ColorSchemeToggle from '@/components/shared/ColorSchemeToggle/ColorSchemeToggle'
import { IconBrandTelegram } from '@tabler/icons-react'
import { useColorModeValue } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { translate } from '../../animation'

import styles from './Footer.module.scss'

export default function Footer() {
  const iconColor = useColorModeValue('black', 'white')

  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          variants={translate}
          custom={[0.3, 0]}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link _hover={{ color: 'gray.400' }} fontSize="3xl" href="/">
            О НАС
          </Link>
        </motion.li>
      </ul>
      <ul>
        <motion.li
          variants={translate}
          custom={[0.3, 0]}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link
            href="https://t.me/your_khrush"
            _hover={{ color: 'gray.400' }}
            color={iconColor}
          >
            <Icon as={IconBrandTelegram} boxSize={8} />
          </Link>
        </motion.li>
      </ul>
      <ul className={styles.colorScheme}>
        <motion.li
          variants={translate}
          custom={[0.3, 0]}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <ColorSchemeToggle />
        </motion.li>
      </ul>
    </div>
  )
}
