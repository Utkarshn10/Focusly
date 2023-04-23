import React, { useContext } from 'react';
import { formatTime } from '../utils';
import {Box,Text} from "@chakra-ui/react";
import { MyContext } from '../../context';



const Timer = () => {
  const {timer}  = useContext(MyContext);
  
  return (
    <div className="app">
      <Box maxW='sm' borderColor='teal' p='1' color='black.400' borderWidth='2px' borderRadius='md' fontSize='lg' mt='2'>
        <Box fontSize='sm'>
          Focused Time
        </Box>
        <Text  fontSize={{ base: '15', sm: '22'}} fontWeight="semibold">{formatTime(timer)}</Text>
      </Box>
    </div>
  );
}

export default Timer;