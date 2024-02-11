// Home.js
import React from 'react';
import { Stack, Heading} from '@chakra-ui/react'

import Navigation from "./Navigation.jsx"

import { defineStyle } from '@chakra-ui/react'

import './animation.css';

import {Center, Image} from '@chakra-ui/react'

import logo from './assets/logo.png';

import { Button, ButtonGroup, Flex } from '@chakra-ui/react'

const Home = () => {
  return (
    <div className="animated-background">
      <Navigation/>
      <Center>
        <Image
          borderRadius='full'
          boxSize='520px'
          src= {logo}
          alt='Logo'

        />
      </Center>
      <Stack direction='row' spacing={4}> </Stack>

      <Flex justifyContent="center" alignItems="center" height="0vh">
        <Button colorScheme='blue' size="lg" h = "55px" w="210px" top="-100px">Play</Button>
      </Flex>
    </div>
  );
};

export default Home;