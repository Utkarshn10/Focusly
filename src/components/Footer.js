import { Box, Container, Flex, Link, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { PopupButton } from '@typeform/embed-react';

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="100%" bg="#f7f7f7" borderTopRadius="50px" borderBottomWidth='6px' borderColor='teal'>
      <Flex direction={isMobile ? "column" : "row"} alignItems={isMobile ? "center" : "flex-start"} justifyContent="space-between" p={10}>
        <Link href="https://focusly.vercel.app/">
          <Image
            src="../Focusly_logo-bg-removed.png"
            boxSize={isMobile ? "80px" : "100px"}  // Adjusted logo size for desktop view
            maxW={isMobile ? "80px" : "100px"}
            borderRadius="full"
            alt="Focusly logo"
            mb={isMobile ? 2 : 0}  // Added margin at the bottom for mobile view
          />
        </Link>

        <Box ml={isMobile ? 0 : 4}>
          <Text fontSize="sm" mb={2}>
            Follow for regular updates
          </Text>

          <Flex direction="row" alignItems="center"> {/* Always display icons in a row */}
            <Link href="https://twitter.com/Focusly_app">
              <Image
                src="../X_logo-bg-removed.png"
                boxSize={isMobile ? "40px" : "60px"}
                maxW={isMobile ? "70px" : "90px"}
                borderRadius="full"
                alt="Twitter logo"
                ml={12} // Add margin between icons
              />
            </Link>

            <Link href="https://github.com/Utkarshn10/Focusly">
              <Image
                src="../Github_logo-bg-removed.png"
                boxSize={isMobile ? "40px" : "60px"}
                maxW={isMobile ? "70px" : "90px"}
                borderRadius="full"
                alt="GitHub logo"
              />
            </Link>
          </Flex>
        </Box>
        {/* <PopupButton
          id="pmedcZ7N"
          style={buttonStyle}
          size={66}
        >
          <span style={{ marginLeft: 10 }}>🌱 Give Your Valuable Feedback</span>
        </PopupButton> */}
        {/* <Link justifySelf="end" borderWidth='2px' borderColor='teal' py={2} px={2} borderRadius='6px' href="https://github.com/sponsors/Utkarshn10">Support Focusly</Link> */}
      </Flex>
    </Container>
  );
};

export default Footer;