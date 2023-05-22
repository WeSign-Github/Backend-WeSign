const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

const { completeLesson, show } = require('./controller');

router.get('/:id', auth, show)
router.post('/:id/complete', auth, completeLesson)

module.exports = router;