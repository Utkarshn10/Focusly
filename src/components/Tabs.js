import React from "react";
import { NavLink } from "react-router-dom";

import {
  Tabs,
  Tab,
  TabList,
  Box,
  Center,

} from "@chakra-ui/react";
function TabPanel() {
  return (
    <Center>
      <Box py={4}>
        <Tabs variant="soft-rounded" colorScheme="teal">
          <TabList>
            <Tab>
              <NavLink to="/">Work</NavLink>
            </Tab>
            <Tab>
              <NavLink to="/Lofi">Lo-fi</NavLink>

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

export default TabPanel;
