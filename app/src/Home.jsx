// Home.js
import React from 'react';

import { Kbd } from '@chakra-ui/react'
import { Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react'

import { Avatar, AvatarBadge } from '@chakra-ui/react'
import Navigation from "./Navigation.jsx"

const Home = () => {
  return (
    <div>
      <Navigation/>
      <Stack direction='row' spacing={4}>
  <Avatar>
    <AvatarBadge boxSize='1.25em' bg='green.500' />
  </Avatar>

  {/* You can also change the borderColor and bg of the badge */}
  <Avatar>
    <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
  </Avatar>
</Stack>
      <h1>Welcome to the homepage!</h1>
      <span>
        <Kbd>alt</Kbd> or <Kbd>option</Kbd>
      </span>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>kyles soul</Heading>
      <Text>
        this sofa is kyles soul
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $69
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Eat now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Eat later
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  );
};

export default Home;
