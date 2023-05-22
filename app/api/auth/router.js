const express = require('express');
const router = express.Router();

const { register } = require('./controller');
const validator = require('./validator');

router.post('/register', validator, register)

module.exports = router;