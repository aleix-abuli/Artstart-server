// Basic config
require('dotenv/config');
require('./db');
const {application} = require('express');
const express = require('express');
const app = express();
require('./config')(app); // This function is getting exported from the config folder. It runs most pieces of middleware.
require('./error-handling')(app);

// Routes
const routes = require('./routes/index.routes');
app.use('/api', routes);

//Export
module.exports = app;
