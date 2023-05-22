const { User } = require('../../../db/models')
const { ConflictError } = require('../../../errors');

module.exports = async (req, res) => {
    const { provider_id, provider_name, first_name, last_name, email, avatar } = req.body

    const emailUser = await User.findOne({
        where: { email: req.body.email }
    });

    if (emailUser) {
        throw new ConflictError('Email or username already exists');
    }

    const newUser = await User.create({
        provider_id,
        provider_name,
        first_name,
        last_name,
        email,
        avatar
    })

    return newUser;
}
