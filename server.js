const express = require('express');
const path = require('path');

const lolRoutes = require('./lol-api/lol-routes');

const app = express();

app.use(express.json());
app.use('/api', lolRoutes);
app.use('/images', express.static(path.join(__dirname, 'assets/img')));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
