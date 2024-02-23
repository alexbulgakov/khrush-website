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
          <span>Made by:</span>Studio Lumio
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
            <Icon as={IconBrandTelegram} boxSize={10} />
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
          <span>Сделал:</span> Лёша Булгаков
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
          Контакты
        </motion.li>
        <motion.li
          variants={translate}
          custom={[0.3, 0]}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Информация
        </motion.li>
      </ul>
    </div>
  )
}
