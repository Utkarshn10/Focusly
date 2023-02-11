import React from "react";
import {Box, Flex, Heading,Link} from "@chakra-ui/react";
import Timer from "./Stopwatch/timer";
export default function Navbar() {
  return (
    <>
      <Box pos="fixed" zIndex={10} w="100%" bg={"gray.100"} px={10}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading>
              <Link  href={"https://focusly.vercel.app/"}>Focusly</Link>
            </Heading>
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
