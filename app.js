require('dotenv').config();
const express = require('express');
const apiRouter = require('./router');
const connection  = require('./database/connection');

const app = express();

app.set('port', process.env.PORT || 8080);
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1', apiRouter);

module.exports = app;
