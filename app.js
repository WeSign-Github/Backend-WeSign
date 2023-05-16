const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

const usersRouter = require('./app/api/users/router');
const signsRouter = require('./app/api/signs/router');
const coursesRouter = require('./app/api/courses/router');
const lessonsRouter = require('./app/api/lessons/router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', signsRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/lessons', lessonsRouter);

module.exports = app;
