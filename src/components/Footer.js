import {Box, Container} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container>
      <Box align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Utkarsh Nagar. All Rights Reserved.
      </Box>
    </Container>
  );
};

export default Footer;
