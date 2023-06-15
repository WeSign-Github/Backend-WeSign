const { Storage } = require('@google-cloud/storage');
const path = require('path');


// CONNECT GOOGLE CLOUD STORAGE
const pathKey = path.resolve(__dirname + '/serviceaccountkey.json')
const gcs = new Storage({
  projectId: 'wesign-app',
  keyFilename: pathKey
})

// CONNECT STORAGE BUCKETS
const bucketName = 'wesign-bucket'
const bucket = gcs.bucket(bucketName)

function getPublicUrl(filename) {
  return `https://storage.googleapis.com/${bucketName}/${filename}`;
}

// UPLOAD IMAGE TO GCS
let imgUpload = {}

imgUpload.uploadToGcs = async (req, res, next) => {

  if (!req.file) return next();

  const gcsname = `avatars/${req.user.uid}${path.extname(req.file.originalname)}`;
  const file = bucket.file(gcsname);

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  })

  stream.on('error', (err) => {
    req.file.cloudStorageError = err
    next(err)
  })

  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname
    req.file.cloudStoragePublicUrl = getPublicUrl(gcsname)
    next()
  })

  stream.end(req.file.buffer)
}

module.exports = { imgUpload };