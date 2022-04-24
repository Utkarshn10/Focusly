import React from "react";
import {Tabs, Link, Tab, TabList, Box, Center} from "@chakra-ui/react";

function tabs() {
  return (
    <Center>
      <Box py={4}>
        <Tabs variant="soft-rounded" colorScheme="teal">
          <TabList>
            <Tab>
              <Link href="/">Nature</Link>
            </Tab>
            {/* <Tab>
              {" "}
              <Link href="/">Game Music</Link>
            </Tab> */}
          </TabList>
        </Tabs>
      </Box>
    </Center>
  );
}

export default tabs;
