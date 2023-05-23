const { User } = require('../../../db/models')
const { imgUpload } = require('modules/imgUpload')

module.exports = async (req,res) => {
  const { provider_id, provider_name, first_name, last_name, email, avatar } = req.body

    // const emailUser = await User.findOne({
    //     where: { email: req.body.email }
    // });

    // if (emailUser) {
    //     throw new ConflictError('Email or username already exists');
    // }

    const newAvatar = await User.update({
        provider_id,
        provider_name,
        first_name,
        last_name,
        email,
        avatar
    })

    return newAvatar;
}