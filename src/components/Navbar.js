import React from "react";
import { Box, Flex, Heading, Link, Image, useBreakpointValue } from "@chakra-ui/react";
import Timer from "./Stopwatch/timer";
import TabPanel from "./Tabs";

export default function Navbar() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      pos="fixed"
      zIndex={10}
      w="100%"
      bg={"gray.100"}
      px={4}
      py={2}
      borderTopWidth="6px"
      borderColor="teal"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Heading>
            <Link href="https://focusly.vercel.app/">
              <Image
                src="../Focusly_logo-bg-removed.png"
                boxSize={isMobile ? "50px" : "70px"}
                maxW={isMobile ? "80px" : "100px"}
                borderRadius="full"
                alt="Focusly logo"
              />
            </Link>
          </Heading>
        </Box>
        {!isMobile && (
          <Flex alignItems={"center"}>
            <TabPanel />
          </Flex>
        )}
        <Box>
          <Timer />
        </Box>
      </Flex>

      {isMobile && (
        <Flex alignItems={"center"} justifyContent={"center"}>
          <TabPanel />
        </Flex>
      )}
    </Box>
  );
}
