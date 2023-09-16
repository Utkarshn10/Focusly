import React, { useContext } from "react";
import { formatTime } from "../utils";
import { Box, Text } from "@chakra-ui/react";
import { MyContext } from "../../context";

const Timer = ({ isActive }) => {
  const { timer } = useContext(MyContext);

  return (
    <div className="app">
      <Box
        maxW="sm"
        borderColor="teal.400"
        p="3"
        borderWidth="2px"
        borderRadius="full"
      >
        <Box fontSize="xs">Focused Time</Box>
        <Text fontSize="15" fontWeight="semibold">
          {formatTime(timer)}
        </Text>
      </Box>
    </div>
  );
};

export default Timer;
