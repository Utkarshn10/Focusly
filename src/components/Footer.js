import { Box, Container, Flex, Link, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { PopupButton } from '@typeform/embed-react';

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="100%" bg="#f7f7f7" borderTopRadius="50px" borderBottomWidth='6px' borderColor='teal'>
      <Flex justifyContent="space-between" alignItems="center" mr={39} p={10}>
        <Link href="https://focusly.vercel.app/">
          <Image
            src="../Focusly_logo-bg-removed.png"
            boxSize={isMobile ? "50px" : "70px"}
            maxW={isMobile ? "80px" : "100px"}
            borderRadius="full"
            alt="Focusly logo"
            ml={isMobile ? 0 : 4}
          />
        </Link>

        <Flex flexDirection="column" alignItems="center" ml={5}>
          <Box mb={2}>
            <Text fontSize="sm">
              Follow for regular updates
            </Text>
          </Box>

          <Flex>
            <Link href="https://twitter.com/Focusly_app">
              <Image
                src="../X_logo-bg-removed.png"
                boxSize={isMobile ? "40px" : "60px"}
                maxW={isMobile ? "70px" : "90px"}
                borderRadius="full"
                alt="Twitter logo"
              />
            </Link>

            <Link href="https://github.com/Utkarshn10/Focusly" ml={2}>
              <Image
                src="../Github_logo-bg-removed.png"
                boxSize={isMobile ? "40px" : "60px"}
                maxW={isMobile ? "70px" : "90px"}
                borderRadius="full"
                alt="GitHub logo"
              />
            </Link>
          </Flex>
        </Flex>
        {/* <PopupButton
          id="pmedcZ7N"
          style={buttonStyle}
          size={66}
        >
          <span style={{ marginLeft: 10 }}>🌱 Give Your Valuable Feedback</span>
        </PopupButton> */}
{/* <Link justifySelf="end" borderWidth='2px' borderColor='teal' py={2} px={2} borderRadius='6px' href="https://github.com/sponsors/Utkarshn10">Support Focusly</Link> */ }
      </Flex>
    </Container>
  );
};

export default Footer;
