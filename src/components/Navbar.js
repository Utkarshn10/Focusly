import React from "react";
// import Badge from "./Badge";
import {Box, Flex, Heading, useColorMode} from "@chakra-ui/react";

export default function Navbar() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <>
      <Box bg={"gray.100"} px={10}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading href={"/"}><a href={"/"}>Focusly</a></Heading>
          </Box>
          <Flex alignItems={"center"}></Flex>
        </Flex>
      </Box>
    </>
  );
}
