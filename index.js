'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Hello world');
});

app.listen(3000, () => {
  console.log('Server listening on PORT 3000');
});
