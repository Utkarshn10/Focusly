import React from "react";
import { useTheme } from "@emotion/react";
import { NavLink } from "react-router-dom";
import { Tabs, Tab, TabList, Box, Center } from "@chakra-ui/react";

function TabPanel() {
  const theme = useTheme();

  return (
    <Center>
      <Box py={4}>
        <Tabs variant="soft-rounded" colorScheme="teal">
          <TabList>
            <Tab borderRadius={theme.radii.lg}>
              <NavLink to="/">Work</NavLink>
            </Tab>
            <Tab borderRadius={theme.radii.lg}>
              <NavLink to="/Lofi">Lo-fi</NavLink>
            </Tab>
            <Tab borderRadius={theme.radii.lg}>
              <NavLink to="/Meditate">Meditate</NavLink>
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </Center>
  );
}

export default TabPanel;
