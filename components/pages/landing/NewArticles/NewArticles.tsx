import { ListItem, Flex, List, Text, Box } from '@chakra-ui/react'
import { SanityDocument } from 'next-sanity'
import Link from 'next/link'

function NewArticles({ posts }: { posts: SanityDocument[] }) {
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
      <Box display="inline-block" alignSelf="flex-end" position="relative">
        <Text fontSize="60px" lineHeight="1">
          Новое на сайте
        </Text>
        <Box
          position="absolute"
          bgColor="#FF7757"
          bottom="-20px"
          width="200px"
          height="2px"
          right="0"
        />
      </Box>
      <List
        gap={{ base: '50px', md: '100px', lg: '150px' }}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        display="flex"
      >
        {posts.map((item) => (
          <ListItem key={item._id}>
            <Link href={`mosaics/${item.slug.current}`}>{item.title}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default NewArticles
