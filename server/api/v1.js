'use strict';

/********************************************************************************
Initialize Router 
********************************************************************************/
const router = require('express').Router();


/********************************************************************************
Add Routes
********************************************************************************/
/**
   * @swagger
   * /api/v1/helloworld:
   *   get:
   *     description: Returns the hello world string
   *     responses:
   *       200:
   *         description: "hello world"
*/
router.get('/helloworld', (req, res, next) => {
  res.status(200).send('Hello world v1');
});


/********************************************************************************
Export interface
********************************************************************************/
module.exports = router;
