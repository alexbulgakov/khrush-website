import { ListItem, Flex, List, Text, Box } from '@chakra-ui/react'
import { statistics } from '@/content/content'

function Statistics() {
  return (
    <Box
      justifyContent="center"
      flexDirection="column"
      display="flex"
      maxW="1200px"
      gap="70px"
      my="150px"
      mx="auto"
      px="20px"
      w="100%"
    >
      <Box display="inline-block" position="relative">
        <Text
          fontSize={{ base: '45px', lg: '60px' }}
          alignSelf="flex-start"
          lineHeight="1"
        >
          Мы изучили
        </Text>
        <Box
          position="absolute"
          bgColor="#FF7757"
          bottom="-35px"
          width="200px"
          height="2px"
          left="0"
        />
      </Box>
      <Text color="var(--chakra-colors-gray-400)" fontSize="20px">
        Сделали фото и прочитали источники, чтобы рассказать вам
      </Text>
      <List
        gap={{ base: '50px', md: '100px', lg: '150px' }}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        display="flex"
        w="100%"
      >
        {statistics.map((item) => (
          <ListItem key={item.id}>
            <Flex direction="column" align="center">
              <Box fontWeight="bold" fontSize="50px" color="#FF7757">
                {item.number}
              </Box>
              <Box fontSize="20px">{item.name}</Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Statistics
