//  component for the post image

import React from "react";
import {Box} from "@chakra-ui/react";

//use for placeholder
import placeHolderImg from "./assets/whitebox.png"
import placeHolderDrawing from "./assets/lilGuy.png"


const PostImage = (prop) => {
  return (
    <Box
      bg="gray.200"
      width="570px" // Set width to 570px
      my={4}
      borderRadius="md"
      position="relative"
      overflow="hidden"
      boxShadow="sm"
    >
      <img
        src={prop.img}
        alt="Post Image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Box>
  );
}; export default PostImage