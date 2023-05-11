const { User } = require('../../db/models');

const me = async(req,res) =>{
  let data = await User.findOne({
    where: {
      provider_id:"abcdef"
    }
  });

  return res.status(200).json({
    data,
  })
}

module.exports = {me};