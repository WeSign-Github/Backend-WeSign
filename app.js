const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

const signsRouter = require('./app/api/signs/router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/signs', signsRouter);

module.exports = app;
