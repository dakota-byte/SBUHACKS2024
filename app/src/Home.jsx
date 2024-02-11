// Home.js
import React from 'react';
import { Stack, Heading} from '@chakra-ui/react'

import Navigation from "./Navigation.jsx"

import { defineStyle } from '@chakra-ui/react'

import './animation.css';

import {Center, Image} from '@chakra-ui/react'

import logo from './assets/logo.png';

const Home = () => {
  <style>
  {`
    @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');
  `} </style>
  

  const headingStyles = defineStyle({
    textAlign: 'center', // Center the text
    marginTop: '0em', // Indent the text by 5 lines
    color: '#90e0ef',
    fontFamily: 'Bubblegum Sans, sans-serif', // Change the font to Arial
  });

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
    </div>
  );
};

export default Home;