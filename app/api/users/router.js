const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

const { me, learningProgress } = require('./controller')

router.get('/me', auth, me);
router.get('/learning-progress', auth, learningProgress);

module.exports = router;