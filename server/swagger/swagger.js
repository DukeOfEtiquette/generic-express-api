'use strict';

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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
  host: `http://localhost:${process.env.PORT}`,
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
let swaggerSpec = swaggerJSDoc(options);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerSpec));

router.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

/********************************************************************************
Export interface
********************************************************************************/
module.exports = {router, swaggerSpec};
