const { User } = require('../../../db/models')
const { imgUpload } = require('modules/imgUpload')

module.exports = async (req,res) => {
  const { provider_id, provider_name, first_name, last_name, email, avatar } = req.body

  var imgUrl = ''

  if (req.file && req.file.cloudStoragePublicUrl){
    imgUrl = req.file.cloudStoragePublicUrl
  }

  const newAvatar = await User.update({ avatar: imgUrl }, {
    where: {
      provider_id: req.user.uid
    }
  });

    return newAvatar;
}