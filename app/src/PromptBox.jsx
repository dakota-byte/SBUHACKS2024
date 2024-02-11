import React from "react";

import { Text , Tab, Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react'

import ProfileBox from "./ProfileBox.jsx"

import PostHeader from "./PostHeader.jsx";

import Post from "./Post.jsx"

import DrawBox from "./DrawBox.jsx";


import {Box} from "@chakra-ui/react";

function PromptBox(props)
{
    const placeHolderName1 = "John Doe";
    const placeHolderName2 = "Kyle Robert Batman Bautista";
    const placeHolderName3 = "Kyle";
  
    const placeHolderLink1 = "https://bit.ly/sage-adebayo"
    const placeHolderLink2 = "https://avatarfiles.alphacoders.com/340/340351.jpg"
  
    const placeHolderCaption1 = "title/caption/description/funny message/lolol"
    const placeHolderCaption2 = "title/caption/description/funny message/lolol"

    return(
        <div> 
            <Box 
                display="flex"
                alignItems="center"
                p = {2}
                boxShadow = "md"
                borderRadius = "md"
                maxWidth="1000px" // Limit width to 400px
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
                        PROMPT:
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
                    <Tabs defaultIndex={1} isFitted variant = 'enclosed' align = 'center' size = 'lg' colorScheme = 'cyan' fontFamily='monospace'>
                        <TabList>
                            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>DRAW</Tab>
                            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>VIEW</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <p>one!</p>
                            </TabPanel>
                            <TabPanel>
                            <Post
            name = {placeHolderName1}
            link = {placeHolderLink1}
            caption = {placeHolderCaption1}
        >
            
        </Post>
        
        <Post
            name = {placeHolderName2}
            link = {placeHolderLink2}
            caption = {placeHolderCaption2}
        >
            
        </Post>

        <ProfileBox name = {placeHolderName1} link = {placeHolderLink1}></ProfileBox>
    //   <ProfileBox name = {placeHolderName2} link = {'https://bit.ly/broken-link'}></ProfileBox>
    //   <ProfileBox name = {placeHolderName3} link = {placeHolderLink2}></ProfileBox>

        <PostHeader name = {placeHolderName1} link = {placeHolderLink1} caption = {placeHolderCaption1}>

        </PostHeader>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>

                <Box p = {1}> {/*adding on the right of the text*/}</Box>
                
            </Box>
            
        </div>
    );
}export default PromptBox