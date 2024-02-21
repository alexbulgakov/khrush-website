'use client'

import { Container, Title } from '@mantine/core'

import MovableImages from '../movableImages/MovableImages'

import classes from './Hero.module.scss'

export default function Hero() {
  return (
    <Container size="xl">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>НЕСКУЧНАЯ ИСТОРИЯ</Title>
        </div>

        <MovableImages />
      </div>
    </Container>
  )
}
