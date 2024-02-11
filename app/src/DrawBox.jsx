//this will be for the drawing component

import {IconButton, Box, Input, Flex} from "@chakra-ui/react";
import Canvas from "./Canvas/Canvas";
import { CiEraser } from "react-icons/ci";

const DrawBox = () => {
    return (
        <Box p={4} boxShadow="md" borderRadius="md" maxWidth="600px" mx="auto" marginTop={2} marginBottom={2} bg="white" align="center">
            {/* Top of box (should have caption and timer) */}
            <Flex alignItems = "center" marginBottom={8} >
                <Box flex = "2">
                    <Box paddingLeft={8} paddingRight={18}>
                        <Input variant='flushed' placeholder='Write your Caption Here!' maxLength ={25}/>
                    </Box>
                </Box>

                <Box flex = "2">
                    
                </Box>
            </Flex>
            <Box boxShadow ="lg">
                <Canvas
                    width = "570px"
                    height = "300px"
                >
                </Canvas>
                <IconButton
                    variant='outline'
                    colorScheme='pink'
                    aria-label='Call Sage'
                    fontSize='20px'
                    icon={<CiEraser />}
                    style={{ borderRadius: '50%' , right: '-255px', top: '-10px'}}
                />
            </Box>
            

            <h1></h1>
    
        </Box>
      );
  };
  
  export default DrawBox;