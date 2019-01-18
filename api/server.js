const express = require('express');

const configureMiddleware = require('../config/middleware.js');
const projectsRouter = require('../routes/projectsRouter.js');
const actionsRouter = require('../routes/actionsRouter.js');

const server = express();

// Middleware
configureMiddleware(server);

// routes
server.use('/projects', projectsRouter);
server.use('/actions', actionsRouter);


module.exports = server;