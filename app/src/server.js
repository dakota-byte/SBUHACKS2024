const express = require('express');

const port = 3000;

const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
  res.json({"please":"work"});
});

app.use(express.static('public'));

// BELOW IS BELOW IS BELOW XD

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
