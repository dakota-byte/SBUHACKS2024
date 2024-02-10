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

//test space for kyle
app.get('/KyleTest', (req, res) => {
  res.send('This is the kyle test page.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use('/api/discord', require('../api/discord'));
