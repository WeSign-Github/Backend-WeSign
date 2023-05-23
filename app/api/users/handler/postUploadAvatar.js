const {Storage} = require('@google-cloud/storage')
const fs = require('fs')
const path = require('path');


// CONNECT GOOGLE CLOUD STORAGE
const pathKey = path.resolve('./serviceaccountkey.json')
const gcs = new Storage({
  projectId: 'wesign-app',
  keyFilename: pathKey
})

// CONNECT STORAGE BUCKETS
const bucketName = 'wesign-bucket'
const bucket = gcs.bucket(bucketName)
function getPublicUrl(filename) {
    return 'https://storage.googleapis.com/' + bucketName + '/' + filename;
}

// TODO: upload image to gcs
module.exports = async (req,res,next) => {
  if (!req.file) return next();

  // Check file size
  const fileSizeInBytes = req.file.size;
  const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
  if (fileSizeInBytes > maxSizeInBytes) {
    return res.status(400).json({ message: 'File size exceeds the limit' });
  }

  const gcsname = dateFormat(new Date(), "yyyymmdd-HHMMss")
  const file = bucket.file(gcsname)

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
    res.status(200).json({ message: 'File uploaded successfully' });
}