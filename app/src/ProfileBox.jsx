import React from "react";

import { Avatar } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


import {Box} from "@chakra-ui/react";

function ProfileBox(props)
{
    return(
        <div> 
            <Box 
                display="flex"
                alignItems="center"
                p = {2}
                boxShadow = "md"
                borderRadius = "md"
                flexDirection= "row"
                maxWidth="250px" // Limit width to 400px
                mx = "auto"
            > 
                <Avatar name = {props.name} src={props.link} size ="md" mr = {4} />
            
                <Box flex = "1">
                    <Text 
                        noOfLines= {1} 
                        fontWeight = "bold" 
                        fontSize="sm"
                        overflow="hidden"
                        textOverflow="ellipsis"
                    >
                        {props.name}
                    </Text>
                </Box>

                <Box p = {1}> {/*adding on the right of the text*/}</Box>
                
                
            </Box>
            
        </div>
    );
}export default ProfileBox