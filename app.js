const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const YAML = require('yamljs');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = YAML.load('./app/api/docs/api-docs.yaml');

const app = express();

const notFoundMiddleware = require('./app/middleware/not-found')
const errorHandlerMiddleware = require('./app/middleware/handle-error');

const usersRouter = require('./app/api/users/router');
const authRouter = require('./app/api/auth/router');
const signsRouter = require('./app/api/signs/router');
const coursesRouter = require('./app/api/courses/router');
const lessonsRouter = require('./app/api/lessons/router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', signsRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/lessons', lessonsRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

module.exports = app;
