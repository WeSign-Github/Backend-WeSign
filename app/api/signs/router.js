const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

const { textToSign } = require('./controller');

router.get('/text-to-sign', auth, textToSign);

module.exports = router;