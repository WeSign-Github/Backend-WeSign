const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

const { updateProgress, show } = require('./controller');

router.get('/:id', show)
router.get('/:id/complete', auth, updateProgress)

module.exports = router;