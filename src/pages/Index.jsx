import { Box, Container, Flex, Heading, HStack, VStack, Text, Link, Image, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link as={RouterLink} to="/news" _hover={{ textDecoration: "none", color: "gray.400" }}>News</Link>
          <Link as={RouterLink} to="/markets" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
          <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
          <Link as={RouterLink} to="/more" _hover={{ textDecoration: "none", color: "gray.400" }}>More</Link>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>
        <Box flex="3" mr={{ md: 8 }}>
          {/* Featured Article */}
          <Box mb={8}>
            <Image src="https://via.placeholder.com/800x400" alt="Featured Article" mb={4} />
            <Heading as="h2" size="xl" mb={2}>Featured Article Title</Heading>
            <Text fontSize="md" color="gray.600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>

          {/* Grid of Smaller Articles */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Image src="https://via.placeholder.com/400x200" alt="Article 1" mb={4} />
              <Heading as="h3" size="md" mb={2}>Article Title 1</Heading>
              <Text fontSize="sm" color="gray.600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/400x200" alt="Article 2" mb={4} />
              <Heading as="h3" size="md" mb={2}>Article Title 2</Heading>
              <Text fontSize="sm" color="gray.600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/400x200" alt="Article 3" mb={4} />
              <Heading as="h3" size="md" mb={2}>Article Title 3</Heading>
              <Text fontSize="sm" color="gray.600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/400x200" alt="Article 4" mb={4} />
              <Heading as="h3" size="md" mb={2}>Article Title 4</Heading>
              <Text fontSize="sm" color="gray.600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <VStack spacing={8}>
            {/* Trending News */}
            <Box>
              <Heading as="h3" size="lg" mb={4}>Trending News</Heading>
              <VStack align="start" spacing={2}>
                <Link as={RouterLink} to="/article1" _hover={{ textDecoration: "none", color: "gray.800" }}>Trending Article 1</Link>
                <Link as={RouterLink} to="/article2" _hover={{ textDecoration: "none", color: "gray.800" }}>Trending Article 2</Link>
                <Link as={RouterLink} to="/article3" _hover={{ textDecoration: "none", color: "gray.800" }}>Trending Article 3</Link>
              </VStack>
            </Box>

            {/* Market Data */}
            <Box>
              <Heading as="h3" size="lg" mb={4}>Market Data</Heading>
              <Text fontSize="sm" color="gray.600">Market data will be displayed here.</Text>
            </Box>

            {/* Advertisements */}
            <Box>
              <Heading as="h3" size="lg" mb={4}>Advertisements</Heading>
              <Image src="https://via.placeholder.com/300x250" alt="Advertisement" />
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
            <Link as={RouterLink} to="/privacy" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
            <Link as={RouterLink} to="/terms" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;