'use strict';

require('dotenv').config(); // environment configuration

const server = require('./server/app.js'); // server app

server.start(); // start 'em up
