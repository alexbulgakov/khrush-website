import { IconMoon, IconSun } from '@tabler/icons-react'
import { useColorMode } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

export default function ColorSchemeToggle() {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode} color="inherit" sx={{ ml: 1 }}>
      {colorMode === 'dark' ? (
        <IconSun stroke={1.5} />
      ) : (
        <IconMoon stroke={1.5} />
      )}
    </Button>
  )
}
