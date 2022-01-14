const express = require('express');
const path = require('path');

const lolAPI = require('./lolAPI');

const server = express();

server.use(express.json());
server.use('/api', lolAPI);
server.use('/images', express.static(path.join(__dirname, 'assets/img')));

const port = 5000;
server.listen(port, () => console.log(`Server started on port ${port}`));
