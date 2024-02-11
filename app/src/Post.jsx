//this will be for the post component
import PostHeader from "./PostHeader"
import PostImage from "./PostImage"
import PostComments from "./PostComments"

import {Box} from "@chakra-ui/react";

const Post = (prop) => {
    return (
        <Box p={4} boxShadow="md" borderRadius="md" maxWidth="600px" mx="auto" marginTop={2} marginBottom={2}>
          {/* Post Header */}
          <PostHeader name={prop.name} link={prop.link} caption={prop.caption} />
    
          {/* Post Image Placeholder */}
          <PostImage/>
    
          {/* Post Comments Placeholder */}
          <PostComments/>
        </Box>
      );
  };
  
  export default Post;