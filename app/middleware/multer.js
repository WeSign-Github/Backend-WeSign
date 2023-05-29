const Multer = require('multer');

// Multer for handling file uploads
const upload = Multer({
  storage: Multer.MemoryStorage,
  limit:{
    fileSize: 5 * 1024 * 1024 //5 MB
  }
})

module.exports={
  upload,
};