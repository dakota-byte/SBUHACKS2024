//this will be for the drawing component

import {Box, Input, Flex} from "@chakra-ui/react";

const DrawBox = () => {
    return (
        <Box p={4} boxShadow="md" borderRadius="md" maxWidth="600px" mx="auto" marginTop={2} marginBottom={2} bg="white">
            {/* Top of box (should have caption and timer) */}
            <Flex alignItems = "center">
                <Box flex = "2">
                    <Box paddingLeft={8} paddingRight={18}>
                        <Input variant='flushed' placeholder='Write your Caption Here!' maxLength ={25}/>
                    </Box>
                </Box>

                <Box flex = "2">
                    
                </Box>
            </Flex>
            
          
    
        </Box>
      );
  };
  
  export default DrawBox;