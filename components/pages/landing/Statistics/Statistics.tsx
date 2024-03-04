import { ListItem, Flex, List, Text, Box } from '@chakra-ui/react'

function Statistics() {
  const data = [
    {
      name: 'мозаик',
      number: 127,
      id: 1,
    },
    {
      name: 'вывесок',
      number: 68,
      id: 2,
    },
    {
      name: 'рельефов',
      number: 37,
      id: 3,
    },
    {
      name: 'витражей',
      number: 29,
      id: 4,
    },
  ]

  return (
    <Box
      justifyContent="center"
      flexDirection="column"
      display="flex"
      maxW="1200px"
      gap="50px"
      mt="50px"
      mb="50px"
      mx="auto"
      px="20px"
      w="100%"
    >
      <Box display="inline-block" position="relative">
        <Text alignSelf="flex-start" fontSize="60px" lineHeight="1">
          Мы изучили
        </Text>
        <Box
          position="absolute"
          bgColor="#FF7757"
          bottom="-20px"
          width="200px"
          height="2px"
          left="0"
        />
      </Box>
      <List
        gap={{ base: '50px', md: '100px', lg: '150px' }}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        display="flex"
        w="100%"
      >
        {data.map((item) => (
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
