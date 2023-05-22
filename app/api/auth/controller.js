const { StatusCodes } = require('http-status-codes');
const authRegister = require('./handler/authRegister')

const register = async (req, res, next) => {
    try {
        const result = await authRegister(req)

        res.status(StatusCodes.CREATED).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { register }