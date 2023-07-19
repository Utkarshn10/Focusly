import { Box, Container, Grid, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container maxW={"100%"} bg={"#f7f7f7"}  borderBottomWidth='6px' borderColor='teal'>
    
    <Grid templateColumns="1fr auto" gap={4} alignItems="center"  p={4}>
      <Box opacity={0.8} fontSize="2xl" justifySelf="middle"  ms={{base: 0 , md: "150px" , lg: "150px"}}>
        🎯 Built by Team{" "}
        <Link color="teal.500" href="https://github.com/Utkarshn10/Focusly">
          Focusly
        </Link>
      </Box>


      <Link justifySelf="end" borderWidth='2px' borderColor='teal' py={2} px={2} borderRadius='6px' href="https://github.com/sponsors/Utkarshn10">Support Focusly</Link>
    </Grid>
    </Container>
  );
};

export default Footer;
