import { motion } from 'framer-motion'

import { translate } from '../../animation'

import styles from './Footer.module.scss'

export default function Footer() {
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
          <span>Typography:</span> Google Fonts
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
          <span>Images:</span> Freepik, Envato
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
          Privacy Policy
        </motion.li>
        <motion.li
          variants={translate}
          custom={[0.3, 0]}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Terms & Conditions
        </motion.li>
      </ul>
    </div>
  )
}
