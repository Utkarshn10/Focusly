import React from "react";
import {Box, Flex, Heading,Link} from "@chakra-ui/react";
import Timer from "./Stopwatch/timer";
import TabPanel from "./Tabs";
import { Image } from "@chakra-ui/react";
export default function Navbar() {
  return (
    <>
    <Box pos="fixed" zIndex={10} w="100%" bg={"gray.100"} px={10} borderTopWidth="6px" borderColor='teal'>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading>
              <Link href="https://focusly.vercel.app/">
                <Image src="../Focusly Logo.webp" py={2} boxSize='70px'  maxW="100px" borderRadius='half' alt="Focusly logo"/>
              </Link>
            </Heading>
          </Box>
          <Flex alignItems={"center"}>
            <TabPanel />
          </Flex>
          <Box>
            <Timer />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
