const express = require('express');
const app = express();
const path = require('path');

const port = 3000; // Choose a port number

// Set up static file serving
app.use(express.static(path.join(__dirname, '')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
