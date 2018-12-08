const express = require('express');
const logger = require('morgan');
const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');

const server = express();
const PORT = 5000;

server.use(express.json(), logger('tiny'));

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
    res.send("API is active");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});