import {Box, Container, Link} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box py={4} align="center" opacity={0.8} fontSize="2xl">
      Made by{" "}
      <Link color="teal.500" href="https://github.com/Utkarshn10/Focusly">
        Utkarsh Nagar
      </Link>
    </Box>
  );
};

export default Footer;
