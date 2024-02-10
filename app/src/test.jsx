// test.jsx

//import React from 'react';

import Navigation from "./Navigation.jsx"
import ProfileBox from "./ProfileBox.jsx"

import PostHeader from "./PostHeader.jsx";

import Post from "./Post.jsx"

const KyleTest = () => {
  const placeHolderName1 = "John Doe";
  const placeHolderName2 = "Kyle";
  const placeHolderName3 = "Kyle Robert Batman Bautista";

  const placeHolderLink1 = "https://bit.ly/sage-adebayo"

  const placeHolderCaption = "title/caption/description/funny message/lolol"
  return (
    // <div>
    //   <ProfileBox name = {placeHolderName1} link = {placeHolderLink1}></ProfileBox>
    //   <ProfileBox name = {placeHolderName2} link = {'https://bit.ly/broken-link'}></ProfileBox>
    //   <ProfileBox name = {placeHolderName3} link = {'https://bit.ly/broken-link'}></ProfileBox>
    // </div>

    <div>
        <ProfileBox name = {placeHolderName1} link = {placeHolderLink1}></ProfileBox>
    //   <ProfileBox name = {placeHolderName2} link = {'https://bit.ly/broken-link'}></ProfileBox>
    //   <ProfileBox name = {placeHolderName3} link = {'https://bit.ly/broken-link'}></ProfileBox>

        <PostHeader name = {placeHolderName1} link = {placeHolderLink1} caption = {placeHolderCaption}>

        </PostHeader>

        <Post
            name = {placeHolderName1}
            link = {placeHolderLink1}
            caption = {placeHolderCaption}
        >

        </Post>

    </div>
  );
};

export default KyleTest;