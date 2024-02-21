'use client'

import { Container, Image, Title } from '@mantine/core'

import ImageTest from '../image-test/image'

import classes from './Hero.module.scss'

export default function Hero() {
  return (
    <Container size="xl">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>НЕСКУЧНАЯ ИСТОРИЯ</Title>
        </div>

        <ImageTest />
      </div>
    </Container>
  )
}
