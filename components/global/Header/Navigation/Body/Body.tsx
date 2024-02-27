'use client'

import { ReactNode } from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { translate, blur } from '../../animation'

import styles from './Body.module.scss'

export default function Body({
  setSelectedLink,
  selectedLink,
  links,
}: {
  setSelectedLink: (selectedLink: { isActive: boolean; index: number }) => void
  selectedLink: { isActive: boolean; index: number }
  links: Array<{ title: string; href: string }>
}) {
  const getChars = (word: string) => {
    const chars: ReactNode[] = []
    word.split('').forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          key={char + i}
          exit="exit"
        >
          {char}
        </motion.span>,
      )
    })
    return chars
  }

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link
        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? 'open'
                  : 'closed'
              }
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index })
              }}
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index })
              }}
              variants={blur}
            >
              {getChars(title)}
            </motion.p>
          </Link>
        )
      })}
    </div>
  )
}
