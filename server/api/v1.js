'use strict';

/********************************************************************************
Initialize Router 
********************************************************************************/
const router = require('express').Router();


/********************************************************************************
Add Routes
********************************************************************************/
router.get('/helloworld', (req, res, next) => {
  res.status(200).send('Hello world v1');
});


/********************************************************************************
Export interface
********************************************************************************/
module.exports = router;
