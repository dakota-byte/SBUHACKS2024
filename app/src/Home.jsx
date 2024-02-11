// Home.js
import React from 'react';

import Navigation from "./Navigation.jsx"

import {useNavigate} from "react-router-dom";

import './animation.css';

import {Stack, Center, Image, Button, Flex} from '@chakra-ui/react'

import logo from './assets/logo.png';

const Home = () => {
  const navigate = useNavigate();

  const navigateToRoute = () => {
    navigate('/drawing')
  }

  return (
    <div className="animated-background">
      <Navigation/>
      <Center>
        <Image
          borderRadius='full'
          boxSize='530px'
          src= {logo}
          alt='Logo'

        />
      </Center>
      <Stack direction='row' spacing={4}> </Stack>

      <Flex justifyContent="center" alignItems="center" height="0vh">
        <Button colorScheme='blue' onClick={navigateToRoute} size="lg" h = "55px" w="210px" top="-100px">PLAY</Button>
      </Flex>
    </div>
  );
};

export default Home;