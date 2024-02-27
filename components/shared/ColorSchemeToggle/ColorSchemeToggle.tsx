'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import { useColorMode } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

export default function ColorSchemeToggle() {
  const { toggleColorMode, colorMode } = useColorMode()

  const handleClick = () => {
    toggleColorMode()
    const styleEl = document.createElement('style')
    const cssText = document.createTextNode(
      'html * { transition: color, background-color 0.3s ease-out!important }',
    )
    styleEl.appendChild(cssText)
    document.head.appendChild(styleEl)
    setTimeout(() => {
      document.head.removeChild(styleEl)
    }, 300)
  }

  return (
    <Button onClick={handleClick} color="inherit" sx={{ ml: 1 }}>
      {colorMode === 'dark' ? (
        <IconSun stroke={1.5} />
      ) : (
        <IconMoon stroke={1.5} />
      )}
    </Button>
  )
}
