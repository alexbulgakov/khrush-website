import { ListItem, List, Text, Box } from '@chakra-ui/react'
import Card from '@/components/shared/Card/Card'
import { SanityDocument } from 'next-sanity'

function NewArticles({ posts }: { posts: SanityDocument[] }) {
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
        <Text fontSize={{ base: '45px', lg: '60px' }} lineHeight="1">
          Новое на сайте
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
        Самое новое и интересное
      </Text>
      <List
        gap={{ base: '50px', md: '50px', lg: '50px' }}
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
        display="flex"
      >
        {posts.map((item) => {
          return (
            <ListItem key={item._id}>
              <Card post={item} />
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default NewArticles
