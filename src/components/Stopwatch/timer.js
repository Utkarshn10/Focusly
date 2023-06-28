import React, { useContext } from 'react';
import { formatTime } from '../utils';
import {Box,Text} from "@chakra-ui/react";
import { MyContext } from '../../context';

const Timer = () => {
  const {timer}  = useContext(MyContext);
  
  return (
    <div className="app">
      <Box maxW='sm' p='1' color='white'  fontSize='lg' mt='2'>
        <Box fontSize='sm'>
          Focused Time
        </Box>
        <Text  fontSize="17" fontWeight="semibold">{formatTime(timer)}</Text>
      </Box>
    </div>
  );
}

export default Timer;