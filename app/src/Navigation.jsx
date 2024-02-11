
import { Tabs, TabList, Tab } from '@chakra-ui/react'


function Navigation(){

    return(
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