// Home.js
import React from 'react';

import { Center, Kbd } from '@chakra-ui/react'
import { Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react'

import { Avatar, AvatarBadge } from '@chakra-ui/react'
import Navigation from "./Navigation.jsx"

import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

import './animation.css';

import logo from './assets/logo.png';

const Home = () => {
  <style>
  {`
    @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');
  `} </style>
  
  const headingStyles = defineStyle({
    textAlign: 'center', // Center the text
    marginTop: '-1em', // Indent the text by 5 lines
    color: '#90e0ef',
    fontFamily: 'Bubblegum Sans, sans-serif', // Change the font to Arial
  });

  return (
    <div className="animated-background">
      <Navigation/>
      <Center>
        <Image
          borderRadius='full'
          boxSize='400px'
          src= {logo}
          alt='Logo'

        />
      </Center>
      <Stack direction='row' spacing={4}> </Stack>

      <Stack spacing={1} align = "center">
        <Heading as='h1' size='2xl' noOfLines={20} style={headingStyles}>
          DoodleDash
        </Heading>
      </Stack>
    </div>

    
  );
};

export default Home;
