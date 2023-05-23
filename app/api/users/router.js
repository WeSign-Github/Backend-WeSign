const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const upload = require('../../middleware/multer');

const { me,
  learningProgress,
  uploadAvatar} = require('./controller')

router.get('/me', auth, me);
router.get('/learning-progress', auth, learningProgress);
// TODO : routing upload avatar
router.post('/insert-avatar', auth, upload.single('avatar'), uploadAvatar);

module.exports = router;