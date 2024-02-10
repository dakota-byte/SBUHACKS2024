import React from "react";

import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
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
            

                <Text noOfLines= {1} fontWeight = "bold" fontSize="sm">{props.name}</Text>
                
            </Box>
            
        </div>
    );
}export default ProfileBox