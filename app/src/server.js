require('dotenv').config();
const express = require('express');
const axios = require('axios');
const url = require('url');

const app = express();
const port = process.env.PORT || 3000;

// Route 1: Home route
app.get('/home', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Route 2: About route
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Route 3: Drawing route
app.get('/drawing', (req, res) => {
  res.send('This is the drawing page.');
});

// Route 4: Feed route
app.get('/feed', (req, res) => {
  res.send('This is the feed page.');
});

// Route 5: Profile route
app.get('/profile', (req, res) => {
  res.send('This is the profile page.');
});

//test space for kyle
app.get('/KyleTest', (req, res) => {
  res.send('This is the kyle test page.');
});

// discord shenanigans
app.get('/login', (req, res) => {
  res.send('logging in...')
});

app.get('/api/discord/redirect', async (req, res) => {
  const { code } = req.query;

  if (code) {
    const formData = new url.URLSearchParams({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: code.toString,
      redirect_uri: 'http://localhost:3000/api/discord/redirect',
    });

    const ouput = await axios.post('https://discord.com/api/v10/oauth2/token', 
      formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    if (output.data) {
      const access = output.data.access_token;

      const userinfo = await axios.get('https://discord.com/api/v10/users/@me', {
        headers: {
          authorization: `Bearer ${access}`,
        },
      });

      console.log(output.data, userinfo.data)
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
