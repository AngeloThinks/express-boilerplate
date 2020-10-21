require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const morganOptn = process.env.NODE_ENV === 'production'
  ?  'tiny'
  : 'common';

app.use(morgan(morganOptn));
app.use(helmet());
app.use(cors());

app.get('/', (req, res)=>{
	res.status(200).end();
});

module.exports = app;
