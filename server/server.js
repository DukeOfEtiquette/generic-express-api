'use strict';

const express = require('express');
const morgan = require('morgan')(process.env.MORGAN_FORMAT);

const app = express();

app.use(morgan);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello world');
});


module.exports = {
  server: app,
  start: function(port){
    app.listen(port, () => {
      console.log(`Server listening on PORT ${port}`);
    });
  },
};