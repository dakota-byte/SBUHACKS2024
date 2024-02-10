const express = require('express');
const app = express();
const port = 3000;

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
router.get('/login', (req, res) => {
  res.redirect(`https://discord.com/api/oauth2/authorize?client_id=1205963282226085968&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fdiscord%2Fcallback&scope=identify`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
