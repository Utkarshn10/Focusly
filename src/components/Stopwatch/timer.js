import React, { useContext } from 'react';
import { formatTime } from '../utils';
import {Box} from "@chakra-ui/react";
import { MyContext } from '../../context';

const Timer = () => {
  const {timer}  = useContext(MyContext);
  
  return (
    <div className="app">
      <Box maxW='sm' borderColor='teal' color='black.400' borderWidth='1px' borderRadius='md' fontSize='lg' mt='2'>
        <h1 mt='2'>{formatTime(timer)}</h1>
      </Box>
    </div>
  );
}

export default Timer;