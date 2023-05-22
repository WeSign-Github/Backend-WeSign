const { User } = require('../../../db/models');

module.exports = async (req, res) => {
    let data = await User.findOne({
        where: {
            provider_id: req.user.uid
            // id: 1
        }
    });

    return data;
}