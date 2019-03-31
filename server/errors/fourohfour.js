'use strict';

/********************************************************************************
Initialize Router 
********************************************************************************/
module.exports = (req, res, next) => {
  res.status(404).json({
    error: 'Resource Not Found',
  }).end();
};
