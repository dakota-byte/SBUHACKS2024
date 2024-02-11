//this will be for the drawing component

import {Box, Input, Flex} from "@chakra-ui/react";
import Canvas from "./Canvas/Canvas";
//darw
const draw = (context , count) =>{
    context.clearRect(0,0, context.canvas.width, context.canvas.height)
    context.fillStyle = 'grey'
    const delta = count % 800
    context.fillRect(10 + delta, 10, 100, 100)
}

const DrawBox = () => {
    return (
        <Box p={4} boxShadow="md" borderRadius="md" maxWidth="600px" mx="auto" marginTop={2} marginBottom={2} bg="white" align="center">
            {/* Top of box (should have caption and timer) */}
            <Flex alignItems = "center" marginBottom={8}>
                <Box flex = "2">
                    <Box paddingLeft={8} paddingRight={18}>
                        <Input variant='flushed' placeholder='Write your Caption Here!' maxLength ={25}/>
                    </Box>
                </Box>

                <Box flex = "2">
                    
                </Box>
            </Flex>
            
            <Canvas
                draw={draw}
                width = "570px"
                height = "300px"
            >
            </Canvas>

            <h1></h1>
    
        </Box>
      );
  };
  
  export default DrawBox;