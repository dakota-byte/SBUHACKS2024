const express = require('express');
const cors = require('cors');

const port = 3000;

const app = express();
app.use(cors());

app.post("/api/save-image", (req, res) => {
  const imageData = req.body.imageData;

  // Generate a unique file name (e.g., using a timestamp)
  const timestamp = Date.now();
  const fileName = `image_${timestamp}.png`;

  // Define the directory where images will be saved
  const saveDir = path.join(__dirname, "doodles");

  // Write the image data to a file
  const filePath = path.join(saveDir, fileName);
  fs.writeFile(filePath, imageData, "base64", (err) => {
    if (err) {
      console.error("Error saving image:", err);
      res.status(500).send("Error saving image");
    } else {
      console.log("Image saved successfully:", fileName);
      res.status(200).send("Image saved successfully");
    }
  });
});

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
