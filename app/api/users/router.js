const express = require('express');
const router = express.Router();

const { me } = require('./controller')

router.get('/me', me);

module.exports = router;