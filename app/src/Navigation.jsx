import {Stack} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


function Navigation(){
    const placeholder1 = "Kyles's text";
    const placeholder2 = "Kyle's Second Text";

    return(
        // <div>
        //     <Stack direction='row' spacing={4}>
        //         <h1>{placeholder1}</h1>
        //         <h1>{placeholder2}</h1>
        //     </Stack>
            
        // </div>  
        <Tabs>
            <TabList>
                <Tab><a href = "/">Home</a></Tab>
                <Tab><a href = "/about"> About</a></Tab>
                <Tab><a href = "/drawing"> Drawing</a></Tab>
                <Tab><a href = "/feed"> Feed</a></Tab>
                <Tab><a href = "/profile"> Profile</a></Tab>
                <Tab><a href = "https://www.youtube.com/watch?v=CgkZ7MvWUAA"> Test Link</a></Tab>
                <Tab><a href = "/login">Login</a></Tab>
            </TabList>
        </Tabs>
        
    );
}

export default Navigation