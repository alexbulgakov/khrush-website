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
      display="flex"
      width="100vw"
      mt="50px"
      mb="50px"
    >
      <Box
        flexDirection="column"
        display="flex"
        maxW="1200px"
        gap="50px"
        px="20px"
      >
        <Text alignSelf="flex-start" fontSize="60px" lineHeight="1">
          Мы изучили
        </Text>
        <List
          gap={{ base: '50px', md: '100px', lg: '150px' }}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          display="flex"
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
    </Box>
  )
}

export default Statistics
