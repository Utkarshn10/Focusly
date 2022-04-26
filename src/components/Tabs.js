import React from "react";
import {
  Tabs,
  Tab,
  TabList,
  Link,
  TabPanel,
  TabPanels,
  Box,
  Center,
} from "@chakra-ui/react";
function tabs() {
  return (
    <Center>
      <Box py={4}>
        <Tabs variant="soft-rounded" colorScheme="teal">
          <TabList>
            <Tab>
              <Link href="/">Focus</Link>
            </Tab>
            <Tab>
              <Link href="/Meditate">Meditate</Link>
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </Center>
  );
}

export default tabs;
