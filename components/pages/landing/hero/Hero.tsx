import { Container, Image, Title, Text } from '@mantine/core'

import image from './image.png'

import classes from './Hero.module.scss'

export default function Hero() {
  return (
    <Container size="xl">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>НЕСКУЧНАЯ ИСТОРИЯ</Title>
        </div>
        <Image className={classes.image} src={image.src} />
      </div>
    </Container>
  )
}
