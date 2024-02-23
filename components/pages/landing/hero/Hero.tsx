'use client'

import MovableImages from '../MovableImages/MovableImages'

import classes from './Hero.module.scss'

export default function Hero() {
  return (
    // <Container size="xl">
    <div className={classes.inner}>
      <div className={classes.content}>
        {/* <Title className={classes.title}>НЕСКУЧНАЯ ИСТОРИЯ</Title> */}
      </div>

      <MovableImages />
    </div>
    // </Container>
  )
}
