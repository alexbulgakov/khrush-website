const transition = { ease: [0.76, 0, 0.24, 1], duration: 1 }

export const transparency = {
  closed: {
    transition: { duration: 0.2, delay: 0.9 },
    backgroundColor: 'rgba(26, 32, 44, 0.01)',
  },
  open: {
    backgroundColor: 'var(--chakra-colors-chakra-body-bg)',
    transition: { duration: 0.2 },
  },
  initial: {
    backgroundColor: 'rgba(26, 32, 44, 0.01)',
  },
}

export const opacity = {
  closed: {
    transition: { duration: 0.35 },
    opacity: 0,
  },
  open: {
    transition: { duration: 0.35 },
    opacity: 1,
  },
  initial: {
    opacity: 0,
  },
}

export const height = {
  enter: {
    height: 'auto',
    transition,
  },
  exit: {
    transition,
    height: 0,
  },
  initial: {
    height: 0,
  },
}

export const background = {
  open: {
    height: '100vh',
    transition,
  },
  closed: {
    transition,
    height: 0,
  },
  initial: {
    height: 0,
  },
}

export const blur = {
  open: {
    transition: { duration: 0.3 },
    filter: 'blur(4px)',
    opacity: 0.6,
  },
  closed: {
    transition: { duration: 0.3 },
    filter: 'blur(0px)',
    opacity: 1,
  },
  initial: {
    filter: 'blur(0px)',
    opacity: 1,
  },
}

export const translate = {
  exit: (i) => ({
    transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7, delay: i[1] },
    opacity: 0,
    y: '100%',
  }),
  enter: (i) => ({
    transition: { ease: [0.76, 0, 0.24, 1], duration: 1, delay: i[0] },
    opacity: 1,
    y: 0,
  }),
  initial: {
    opacity: 0,
    y: '100%',
  },
}
