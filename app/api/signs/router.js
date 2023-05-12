const express = require('express');
const router = express.Router();

const { textToSign } = require('./controller');

router.get('/text-to-sign', textToSign);

module.exports = router;