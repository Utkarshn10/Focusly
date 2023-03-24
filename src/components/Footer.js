import { Box, Container, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container maxW={"100%"} bg={"#f7f7f7"}  borderBottomWidth='6px' borderColor='teal'>
      <Box py={4} align="center" opacity={0.8} fontSize="2xl">
        Contribute to{" "}
        <Link color="teal.500" href="https://github.com/Utkarshn10/Focusly">
          Focusly
        </Link>
      </Box>
    </Container>
  );
};

export default Footer;
