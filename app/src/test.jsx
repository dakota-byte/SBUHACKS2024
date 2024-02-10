// test.jsx

//import React from 'react';

import Navigation from "./Navigation.jsx"
import ProfileBox from "./ProfileBox.jsx"

const KyleTest = () => {
  const placeHolderName1 = "John Doe";
  const placeHolderName2 = "Kyle";
  const placeHolderName3 = "Kyle Robert Batman Bautista";

  const placeHolderLink1 = "https://bit.ly/sage-adebayo"
  return (
    <div>
      <ProfileBox name = {placeHolderName1} link = {placeHolderLink1}></ProfileBox>
      <ProfileBox name = {placeHolderName2} link = {'https://bit.ly/broken-link'}></ProfileBox>
      <ProfileBox name = {placeHolderName3} link = {'https://bit.ly/broken-link'}></ProfileBox>
    </div>
  );
};

export default KyleTest;