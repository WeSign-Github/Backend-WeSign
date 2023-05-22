const { User } = require('../../db/models')

const register = async (req, res) => {
    const { provider_id, provider_name, first_name, last_name, email, avatar } = req.body

    await User.create({
        provider_id,
        provider_name,
        first_name,
        last_name,
        email,
        avatar
    })

    res.status(201).json({
        message: 'User created'
    })
}

module.exports = { register }