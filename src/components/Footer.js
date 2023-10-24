import {
  Box,
  Container,
  Flex,
  Link,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container
      maxW="100%"
      bg="#f7f7f7"
      borderTopRadius="50px"
      borderBottomWidth="6px"
      borderColor="teal"
      py={5} // Adjusted padding
    >
      <Flex
        direction={isMobile ? "column" : "row"}
        alignItems={isMobile ? "center" : "flex-start"}
        justifyContent="space-between"
        p={4} // Adjusted padding
      >
        <Link href="https://focusly.vercel.app/">
          <Image
            src="../Focusly_logo-bg-removed.png"
            boxSize={isMobile ? "80px" : "100px"}
            maxW={isMobile ? "80px" : "100px"}
            borderRadius="full"
            alt="Focusly logo"
            mb={isMobile ? 2 : 0}
          />
        </Link>

        <Box ml={isMobile ? 0 : 4}>
          <Text fontSize="sm" mb={2}>
            Follow for regular updates
          </Text>

          <Flex direction="row" alignItems="center">
            <Link href="https://twitter.com/Focusly_app">
              <Image
                src="../X_logo-bg-removed.png" // Corrected the image source
                boxSize={isMobile ? "40px" : "40px"} // Adjusted sizes
                maxW={isMobile ? "70px" : "70px"}
                borderRadius="full"
                alt="Twitter logo"
                ml={isMobile ? 9 : 10} // Adjusted margin for mobile view
              />
            </Link>
            <Link href="https://github.com/Utkarshn10/Focusly">
              <Image
                src="../GitHub_logo-bg-removed.png" // Corrected the image source
                boxSize={isMobile ? "40px" : "40px"} // Adjusted sizes
                maxW={isMobile ? "70px" : "70px"}
                borderRadius="full"
                alt="GitHub logo"
                ml={isMobile ? 5 : 4} // Adjusted margin for mobile view
              />
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Box borderTop="1px solid #e1e1e1" p={3} textAlign="center">
        <Text fontSize="sm" color="gray.600">
          &copy; 2022 Focusly. All rights reserved.
        </Text>
      </Box>
    </Container>
  );
};

export default Footer;
