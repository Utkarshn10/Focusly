import React from "react";
import { NavLink } from "react-router-dom";

import {
  Tabs,
  Tab,
  TabList,
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
              <NavLink to="/">Focus</NavLink>
            </Tab>
            <Tab>
              <NavLink to="/Meditate">Meditate</NavLink>
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </Center>
  );
}

export default tabs;
