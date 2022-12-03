import React from "react";
import {Box, Flex, Heading} from "@chakra-ui/react";
import Timer from "./Stopwatch/timer";
export default function Navbar() {
  return (
    <>
      <Box bg={"gray.100"} px={10}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading href={"/"}>Focusly</Heading>
          </Box>
          <Flex alignItems={"center"}></Flex>
          <Box>
            <Timer />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
