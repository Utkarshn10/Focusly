import { Box, Container, Grid, Link } from "@chakra-ui/react";
import { PopupButton } from '@typeform/embed-react'
import { useEffect, useState } from "react";

const Footer = () => {
  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: 10,
    border: 'none',
    background: 'teal',
    color: 'white',
    fontSize: 16,
    cursor: 'pointer',
  }

  return (
    <Container maxW={"100%"} bg={"#f7f7f7"}  borderBottomWidth='6px' borderColor='teal' >
      <Grid templateColumns={{ base: "1fr", md: "1fr auto" }} gap={4} alignItems="center" className="wrap" p={4}>
  <div className="two">
    <PopupButton
      id="pmedcZ7N"
      style={buttonStyle}
      size={66}
    >
      <span style={{ marginLeft: 10 }}>🌱 Give Your Valuable Feedback</span>
    </PopupButton>
  </div>
  <Box opacity={0.8} fontSize="2xl" textAlign={{ base: "center", md: "initial" }} className="one" ms={{ md: "150px", lg: "150px" }}>
    🎯 Built by Team{" "}
    <Link color="teal.500" href="https://github.com/Utkarshn10/Focusly">
      Focusly
    </Link>
  </Box>
</Grid>

    </Container>
  );
};

export default Footer;
