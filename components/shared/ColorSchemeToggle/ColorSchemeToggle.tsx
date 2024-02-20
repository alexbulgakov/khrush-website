'use client'
import {
  useComputedColorScheme,
  useMantineColorScheme,
  ActionIcon,
  Group,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import cx from 'clsx'

import styles from './ColorSchemeToggle.module.scss'

export default function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  })

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
        }
        aria-label="Toggle color scheme"
        variant="default"
        size="xl"
      >
        {colorScheme === 'light' ? (
          <IconMoon className={cx(styles.icon, styles.dark)} stroke={1.5} />
        ) : (
          <IconSun className={cx(styles.icon, styles.light)} stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  )
}
