// test.jsx

//import React from 'react';

import ProfileBox from "./ProfileBox.jsx"

import PostHeader from "./PostHeader.jsx";

import Post from "./Post.jsx"

import PromptBox from "./PromptBox.jsx";

const KyleTest = () => {
  const placeHolderName1 = "John Doe";
  const placeHolderName2 = "Kyle Robert Batman Bautista";
  const placeHolderName3 = "Kyle";

  const placeHolderLink1 = "https://bit.ly/sage-adebayo"
  const placeHolderLink2 = "https://avatarfiles.alphacoders.com/340/340351.jpg"

  const placeHolderCaption1 = "title/caption/description/funny message/lolol"
  const placeHolderCaption2 = "title/caption/description/funny message/lolol"
  return (
    // <div>
    //   <ProfileBox name = {placeHolderName1} link = {placeHolderLink1}></ProfileBox>
    //   <ProfileBox name = {placeHolderName2} link = {'https://bit.ly/broken-link'}></ProfileBox>
    //   <ProfileBox name = {placeHolderName3} link = {'https://bit.ly/broken-link'}></ProfileBox>
    // </div>

    <div>
        <PromptBox
            prompt = {"How I feel when I have 1 hour left in SBU Hacks"}
        >

        </PromptBox>
        
        <Post
            name = {placeHolderName1}
            link = {placeHolderLink1}
            caption = {placeHolderCaption1}
        >
            
        </Post>
        
        <Post
            name = {placeHolderName2}
            link = {placeHolderLink2}
            caption = {placeHolderCaption2}
        >
            
        </Post>

        <ProfileBox name = {placeHolderName1} link = {placeHolderLink1}></ProfileBox>
    //   <ProfileBox name = {placeHolderName2} link = {'https://bit.ly/broken-link'}></ProfileBox>
    //   <ProfileBox name = {placeHolderName3} link = {placeHolderLink2}></ProfileBox>

        <PostHeader name = {placeHolderName1} link = {placeHolderLink1} caption = {placeHolderCaption1}>

        </PostHeader>

    </div>
  );
};

export default KyleTest;