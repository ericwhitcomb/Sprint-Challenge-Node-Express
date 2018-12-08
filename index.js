const express = require('express');
const logger = require('morgan');

const server = express();
const PORT = 5000;

server.use(express.json(), logger('tiny'));

server.get('/', (req, res) => {
    res.send("API is active");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});