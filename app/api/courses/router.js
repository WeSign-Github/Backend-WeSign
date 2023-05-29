const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const { index, show } = require('./controller');

router.get('/', auth, index)
router.get('/:id', auth, show)

module.exports = router;