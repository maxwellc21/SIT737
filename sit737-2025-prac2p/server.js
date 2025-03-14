const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');

const app = express();
const PORT = 3000;

// Serve static files from the public directory 
app.use(express.static(path.join(__dirname, 'public')));

// Use routes, accesses the mainRoutes.js in the routes directory 
app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
