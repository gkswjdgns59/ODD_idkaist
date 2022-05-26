const express = require('express');
const http = require('http');

const port = process.env.PORT || process.env.port || 4000;

const app = express();
app.use(express.static('public'));
const server = http.createServer(app);
const PORT = 4000;

server.listen(port, () => console.log(`Listening on port ${port}`));