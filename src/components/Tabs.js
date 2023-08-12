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
                        <NavLink to="/">
                            <Tab borderRadius={theme.radii.lg}>Work</Tab>
                        </NavLink>
                        <NavLink to="/Lofi">
                            <Tab borderRadius={theme.radii.lg}>Lo-fi</Tab>
                        </NavLink>
                        <NavLink to="/Meditate">
                            <Tab borderRadius={theme.radii.lg}>Meditate</Tab>
                        </NavLink>
                    </TabList>
                </Tabs>
            </Box>
        </Center>
    );
}

export default TabPanel;
