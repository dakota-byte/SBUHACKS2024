import React from "react";

import { Button, Image, Text , Tab, Tabs, TabList, TabPanels, TabPanel, IconButton, Box, Textarea, Flex, Stack } from '@chakra-ui/react'

import ProfileBox from "./ProfileBox.jsx"

import PostHeader from "./PostHeader.jsx";

import {useNavigate} from "react-router-dom";

import Post from "./Post.jsx"

import DrawBox from "./DrawBox.jsx";

import blueAstronaut from './assets/astronautpfps/blueastronaut.png';
import greenAstronaut from './assets/astronautpfps/greenastronaut.png';
import redAstronaut from './assets/astronautpfps/redastronaut.png';
import yellowAstronaut from './assets/astronautpfps/yellowastronaut.png';

import PostGallery from "./PostGallery.jsx";


function PromptBox(props)
{
    const placeHolderName1 = "John Doe";
    const placeHolderName2 = "Kyle Robert Batman Bautista";
    const placeHolderName3 = "Kyle";
  
    const placeHolderLink1 = "https://bit.ly/sage-adebayo"
    const placeHolderLink2 = "https://avatarfiles.alphacoders.com/340/340351.jpg"
  
    const placeHolderCaption1 = "title/caption/description/funny message/lolol"
    const placeHolderCaption2 = "title/caption/description/funny message/lolol"
    
    const navigate = useNavigate();

    const navigateToRoute = () => {
      navigate('/')
    }

    return(
        <div> 
            <Box 
                display="flex"
                alignItems="center"
                p = {2}
                boxShadow = "md"
                borderRadius = "md"
                maxWidth="700px" // Limit width to 400px
                mx = "auto"
                marginTop={0}
                marginBottom={2}
                bg="white"
            > 
                <Box flex = "1">
                    <Text  
                        fontWeight = "bold" 
                        fontSize="lg"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        textAlign="center"
                    >
                        TODAY'S PROMPT:
                    </Text>
                    
                    <Text  
                        fontWeight = "bold" 
                        fontSize="sm"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        textAlign="center"
                    >
                        {props.prompt}
                    </Text>
                    <Tabs boxShadow='md' defaultIndex={0} isFitted variant = 'soft-rounded' align = 'center' size = 'lg' colorScheme = 'cyan' fontFamily='monospace' style={{marginTop:'10px'}}>
                        <TabList>
                            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>DRAW</Tab>
                            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>VIEW</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                            {/* <Text fontWeight="bold" fontSize="sm">Choose Profile Icon:</Text>
                                <Flex style={{width: '185px', flexDirection: 'row'}}>
                                    <IconButton
                                        colorScheme='blue'
                                        aria-label='Call Segun'
                                        size='md'
                                        style={{ borderRadius: '50%' , marginRight: '8px'}}
                                    />

                                    <IconButton
                                        colorScheme='green'
                                        aria-label='Call Segun'
                                        size='md'
                                        style={{ borderRadius: '50%' , marginRight: '8px'}}
                                    />

                                    <IconButton
                                        colorScheme='red'
                                        aria-label='Call Segun'
                                        size='md'
                                        style={{ borderRadius: '50%' , marginRight: '8px'}}
                                    />

                                    <IconButton
                                        colorScheme='yellow'
                                        aria-label='Call Segun'
                                        size='md'
                                        style={{ borderRadius: '50%' , marginRight: '8px'}}
                                    />

                                </Flex> */}

                                <Box maxWidth="600px" mx="auto" marginTop={2} marginBottom={2} bg="white" flexDirection="column">
                                    <Textarea maxLength={20} rows={1} size='lg' placeholder='Enter a desired username (20 characters max)...' style={{width: '550px', resize: 'none', paddingTop: '5px', marginTop: '10px'}}/>

                                    <DrawBox></DrawBox>
                                  
                                    

                                    
                                </Box>

                                
                                
                                {/* 

                                <Box justifyContent="center" alignItems="center" height="15vh">
                                    
                                </Box>

                                <Flex justifyContent="center" alignItems="center" height="12vh">
                                    
                                </Flex> */}
                            </TabPanel>

                        <TabPanel>
            
                        
                            <PostGallery/>
                            
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
              </Box>

            <Box p = {1}> {/*adding on the right of the text*/}</Box>
                                
          </Box>
            
        </div>
    );
}export default PromptBox