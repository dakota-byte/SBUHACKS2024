import React from 'react';
import { Box } from '@chakra-ui/react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

// Create a context for all images in the './images' folder
const imagesContext = require.context('../images', false, /\.(jpg|jpeg|png|gif)$/);

const images = imagesContext.keys().map((key) => ({
  name: key.split('/').pop().split('.')[0],
  link: imagesContext(key).default, // Get the image link using require.context
  caption: `Caption for ${key.split('/').pop().split('.')[0]}`, // You can modify this caption as needed
}));

const Post = () => {
  return (
    <div>
      {images.map((image, index) => (
        <Box key={index} p={4} boxShadow="md" borderRadius="md" maxWidth="600px" mx="auto" marginTop={2} marginBottom={2} bg="white">
          {/* Post Header */}
          <PostHeader name={image.name} link={image.link} caption={image.caption} />
    
          {/* Post Image Placeholder */}
          <PostImage src={image.link} />
    
        </Box>
      ))}
    </div>
  );
};

export default Post;
