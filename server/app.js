'use strict';

/********************************************************************************
Third Party Libraries
********************************************************************************/
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');


/********************************************************************************
Initialize App
********************************************************************************/
const app = express();


/********************************************************************************
Middleware
********************************************************************************/
app.use(cors());
app.use(morgan(process.env.MORGAN_FORMAT));

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
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

/********************************************************************************
Routes
********************************************************************************/
app.use(require('./api/v1.js'));


/********************************************************************************
Errors
********************************************************************************/
app.use(require('./errors/404.js'));
app.use(require('./errors/500.js'));


/********************************************************************************
Export interface
********************************************************************************/
module.exports = {
  expressApp: app,
  start: function(){
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on PORT ${process.env.PORT}`);
    });
  },
};