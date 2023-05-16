const express = require('express');
const router = express.Router();

const { me, learningProgress } = require('./controller')

router.get('/me', me);
router.get('/learning-progress', learningProgress);

module.exports = router;