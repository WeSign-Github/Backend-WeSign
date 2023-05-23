const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');

const { me,
  learningProgress,
  uploadAvatar} = require('./controller')

router.get('/me', auth, me);
router.get('/learning-progress', auth, learningProgress);
// TODO : routing upload avatar
router.post('/insert-avatar', multer.single('avatar'), uploadAvatar);

module.exports = router;