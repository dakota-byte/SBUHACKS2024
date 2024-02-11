
import { Tabs, TabList, Tab } from '@chakra-ui/react'


function Navigation(){

    return(
        <Tabs align = 'center'>
            <TabList>
                <Tab><a href = "/">Home</a></Tab>
                <Tab><a href = "/about"> About</a></Tab>
                <Tab><a href = "/drawing"> Drawing</a></Tab>
                <Tab><a href = "/feed"> Feed</a></Tab>
                <Tab><a href = "/profile"> Profile</a></Tab>
                <Tab><a href = "/kyletest"> Test Link</a></Tab>
                <Tab><a href = "/login">Login</a></Tab>
            </TabList>
        </Tabs>
        
    );
}

export default Navigation