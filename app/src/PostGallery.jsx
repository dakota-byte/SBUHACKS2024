import React from 'react';
import Post from './Post';

// Define a function to import all images from a directory
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Import all images from the images folder
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const PostGallery = () => {
  // Map over the images and create a Post component for each image
  const postComponents = Object.entries(images).map(([imageName, imageURL]) => (
    <Post caption={imageName} img={imageURL} />
  ));

  return (
    <div>
      {/* Render the array of Post components */}
      {postComponents}
    </div>
  );
};

export default PostGallery;