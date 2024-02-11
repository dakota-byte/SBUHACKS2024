import React from "react";

import { Text , Tab, Tabs, TabList } from '@chakra-ui/react'


import {Box} from "@chakra-ui/react";

function PromptBox(props)
{
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
                    </Tabs>
                </Box>

                <Box p = {1}> {/*adding on the right of the text*/}</Box>
                
            </Box>
            
        </div>
    );
}export default PromptBox