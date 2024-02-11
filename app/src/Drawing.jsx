// About.js
import React from 'react';

import Navigation from "./Navigation.jsx"
import {Box, Text} from '@chakra-ui/react';

const Drawing = () => {
  return (
    <div>
      <Navigation/>
      
      <Box
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='repeat-y'
      height='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      boxShadow = 'md'
    >
      <Box p={8} bg='white' borderRadius='lg'>
        <Text fontSize='xl'>
          Drawing
        </Text>
      </Box>
    </Box>
    </div>
  );
};

export default Drawing;