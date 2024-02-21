import { useEffect, useRef } from 'react'

import image from '@/public/image.png'
import Image from 'next/image'

import './style.css'
export default function ImageTest() {
  let bounds
  const inputRef = useRef()
  const glowRef = useRef()
  const rotateToMouse = (e) => {
    bounds = inputRef.current.getBoundingClientRect()
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
  const removeListener = (e) => {
    inputRef.current.style.transform = ''
    inputRef.current.style.background = ''
  }
  useEffect(() => {})

  return (
    <div className="app">
      <div
        onMouseLeave={removeListener}
        onMouseMove={rotateToMouse}
        className="card"
        ref={inputRef}
      >
        <Image
          style={{
            objectFit: 'cover',
          }}
          alt="Picture of the author"
          quality={100}
          sizes="100vw"
          src={image}
          fill
        />
        <div className="glow" ref={glowRef} />
      </div>
    </div>
  )
}
