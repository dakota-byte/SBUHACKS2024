import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


function ProfileBox(props)
{
    return(
        <div> 
            <Avatar name = {props.name} src={props.link} />
        </div>
    );
}export default ProfileBox