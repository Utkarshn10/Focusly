import React from "react";
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
      py={5}
    >
      <Flex
        direction={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        p={4}
      >
        <Link href="https://focusly.vercel.app">
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

          <Flex direction="row" alignItems="center" ml={isMobile ? 0 : 4}>
            <Link href="https://twitter.com/Focusly_app">
              <Image
                src="../X_logo-bg-removed.png"
                boxSize={isMobile ? "40px" : "40px"}
                maxW={isMobile ? "70px" : "70px"}
                borderRadius="full"
                alt="Twitter logo"
                ml={isMobile ? 10 : 4}
              />
            </Link>
            <Link href="https://github.com/Utkarshn10/Focusly">
              <Image
                src="../GitHub_logo-bg-removed.png"
                boxSize={isMobile ? "40px" : "40px"}
                maxW={isMobile ? "70px" : "70px"}
                borderRadius="full"
                alt="GitHub logo"
                ml={isMobile ? 0 : 4}
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
