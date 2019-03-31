'use strict';

require('dotenv').config();

const express = require('express');
const morgan = require('morgan')(process.env.MORGAN_FORMAT);

const app = express();

app.use(morgan);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello world');
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on PORT ${process.env.PORT}`);
});
