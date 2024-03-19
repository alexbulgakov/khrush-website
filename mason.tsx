<Box
sx={{ columnCount: [1, 2, 3], columnGap: '8px' }}
maxW="1200px"
padding={4}
mx="auto"
w="100%"
>
{posts.map((item) => {
  return <Card key={item._id} post={item} />
})}
</Box>

<Link href={`/heritage/${slug.current}`} passHref>
      <MotionBox
        // style={{
        //   borderRadius: '7px',
        //   overflow: 'hidden',
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        backgroundColor="black"
        position="relative"
        // }}
        borderRadius="md"
        // maxHeight="900px"
        overflow="hidden"
        d="inline-block"
        boxShadow="xl"
        w="100%"
        mb={2}
      >
        <Image
          htmlWidth="400px"
          htmlHeight="auto"
          objectFit="fill"
          src={imageUrl}
          alt="Обложка"
          opacity="0.8"
        />
        <Box
          position="absolute"
          boxShadow="lg"
          bottom="0"
          right="0"
          left="0"
          p={4}
        >
          {/* <VStack align="start" spacing={2}> */}
          <Heading color="white" size="xl" as="h2">
            {title}
          </Heading>
          {/* <Text color="white" fontSize="xl">
              {excerpt}
            </Text> */}
          {/* <AnimatePresence>
              {isHovered && (
                <MotionBox
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0, y: 50 }}
                >
                  <Text color="white" fontSize="sm">
                    {excerpt}
                  </Text>
                </MotionBox>
              )}
            </AnimatePresence> */}
          {/* </VStack> */}
        </Box>
      </MotionBox>
    </Link>