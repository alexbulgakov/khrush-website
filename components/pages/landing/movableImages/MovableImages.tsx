'use client'

import { useEffect, useState, useRef } from 'react'

import novosibirsk from '@/public/hero-images/novosibirsk.png'
import { shouldForwardProp, chakra } from '@chakra-ui/react'
import mangazeya from '@/public/hero-images/mangazeya.png'
import { isValidMotionProp, motion } from 'framer-motion'
import biysk from '@/public/hero-images/biysk.png'
import tomsk from '@/public/hero-images/tomsk.png'
import Image from 'next/image'

import classes from './MovableImages.module.scss'

const images = [
  {
    alt: 'Новосибирск',
    src: novosibirsk,
    id: 0,
  },
  {
    alt: 'Бийск',
    src: biysk,
    id: 1,
  },
  {
    alt: 'Мангазея',
    src: mangazeya,
    id: 2,
  },
  {
    alt: 'Томск',
    src: tomsk,
    id: 3,
  },
]

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

export default function MovableImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const inputRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 15000)

    return () => clearInterval(interval)
  }, [currentImageIndex])

  const image = images[currentImageIndex]

  const rotateToMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!inputRef.current || !glowRef.current) return

    const bounds = inputRef.current.getBoundingClientRect()
    const mouseX = e.clientX
    const mouseY = e.clientY
    const leftX = mouseX - bounds.x
    const topY = mouseY - bounds.y
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    }
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

    inputRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `

    glowRef.current.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `
  }

  const removeListener = () => {
    if (inputRef.current) {
      inputRef.current.style.transform = ''
      inputRef.current.style.background = ''
    }
  }
  //вставить сюда орнамент
  return (
    <div className={classes.imageContainer}>
      <div
        className={classes.imageAnimatedWrapper}
        onMouseLeave={removeListener}
        onMouseMove={rotateToMouse}
        ref={inputRef}
      >
        <ChakraBox
          transition={{ transition: '0.5', ease: 'easeInOut', duration: '1' }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          position="relative"
          key={image.id}
          h="100%"
        >
          <Image
            style={{
              objectFit: 'cover',
            }}
            sizes="(min-width: 808px) 50vw, 100vw"
            src={image.src}
            alt={image.alt}
            priority={true}
            quality={100}
            fill
          />
        </ChakraBox>
        <div className={classes.glow} ref={glowRef} />
      </div>
    </div>
  )
}
