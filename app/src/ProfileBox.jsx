import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

function ProfileBox(props)
{
    return(
        <div> 
            <Avatar name = {props.name} src='https://bit.ly/broken-link' />
        </div>
    );
}export default ProfileBox