'use strict';

const swaggerJSDoc = require('swagger-jsdoc');

/********************************************************************************
Initialize Router 
********************************************************************************/
const router = require('express').Router();

const swaggerDefinition = {
  info: {
    title: 'Hello World', 
    version: '1.0.0', 
    description: 'A generic Express API',
  },
  host: `localhost:${process.env.PORT}`,
  basePath: '/',
};

const options = {
  // Import swaggerDefinitions
  swaggerDefinition,
  // Path to the API docs
  // Note that this path is relative to the current directory from which the Node.js is ran, not the application itself.
  apis: ['./server/api/v1.js'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

// Serve swagger docs the way you like (Recommendation: swagger-tools)
router.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

/********************************************************************************
Export interface
********************************************************************************/
module.exports = {router, swaggerSpec};
