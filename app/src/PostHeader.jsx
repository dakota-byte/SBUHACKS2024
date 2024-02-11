import React from "react";
import {Flex, Text } from "@chakra-ui/react";

import ProfileBox from "./ProfileBox";

const PostHeader = (prop) => {
  return (
    <Flex alignItems="center" mb={4}>
      {/* Profile Box */}
      <ProfileBox name = {prop.name} link = {prop.link}> 
      </ProfileBox>

      {/* Caption/Title */}
      <Text ml={4} fontWeight="bold" noOfLines= {1}>{prop.caption} </Text>
    </Flex>
  );
};

export default PostHeader;