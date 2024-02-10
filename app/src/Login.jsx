// About.js
import React from 'react';

import Navigation from "./Navigation.jsx"

const Login = () => {
  return (
    <div>
      <Navigation/>
      <h1>SO YOU WANT TO DOODLE?????</h1>
      <a href="https://discord.com/api/oauth2/authorize?client_id=1205963282226085968&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fdiscord%2Fredirect&scope=identify">
        Login through discord.</a>
    </div>
  );
};

export default Login;