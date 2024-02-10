// About.js
import React from 'react';

import Navigation from "./Navigation.jsx"

const About = () => {
  return (
    <div>
      <Navigation/>
      <h1>About Page</h1>
      <a href="/api/discord/login">Login through discord</a>
    </div>
  );
};

export default About;