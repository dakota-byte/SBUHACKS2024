// About.js
import React from 'react';

import Navigation from "./Navigation.jsx"

import {useNavigate } from "react-router-dom";

import {Box, Text, Flex, Button, Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react';

import ProfileBox from "./ProfileBox.jsx"

import PostHeader from "./PostHeader.jsx";

import Post from "./Post.jsx"

import PromptBox from "./PromptBox.jsx";

const Drawing = () => {
  const navigate = useNavigate();

  const navigateToRoute = () => {
    navigate('/feed')
  }

  return (
    <div>
      <PromptBox prompt = {"How I feel when I have 1 hour left in SBU Hacks"}></PromptBox>

      

    </div>
  );
};

export default Drawing;