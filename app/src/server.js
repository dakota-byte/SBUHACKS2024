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
  console.log("heyheyhey");
  res.send('This is the kyle test page.');
});

// discord shenanigans
app.get('/login', (req, res) => {
  res.send('logging in...')
  console.log("logging in...")
});

app.get('wtfwtf', (req, res) => {
  res.send('<p>wtfwtf</p>')
});

app.get('/api/discord/redirect', async (req, res) => {
  const { code } = req.query;

  if (code) {
    const formData = new url.URLSearchParams({
      client_id: process.env.ClientID,
      client_secret: process.env.ClientSecret,
      grant_type: 'authorization_code',
      code: code.toString,
      redirect_uri: 'http://localhost:3000/api/discord/redirect',
    });

    const output = await axios.post('https://discord.com/api/oauth2/token', 
      formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    if (output.data) {
      const access = output.data.access_token;

      const userinfo = await axios.get('https://discord.com/api/users/@me', {
        headers: {
          authorization: `Bearer ${output.data.access_token}`,
        },
      });

      console.log(output.data, userinfo.data)
    }
  }
  res.send('<p>heyhey</p>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
