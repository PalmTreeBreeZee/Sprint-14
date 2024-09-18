// build your server here and require it from index.js
const express = require('express');
const project_route = require('./project/router')
const resource_route = require('./resource/router')
const task_route = require('./task/router')
const server = express();



server.use(express.json());
server.use('/api/projects', project_route)
server.use('/api/resources', resource_route)
server.use('/api/tasks', task_route)
server.get('/', (req, res) => {
    res.send('You are in the server')
})



module.exports = server;