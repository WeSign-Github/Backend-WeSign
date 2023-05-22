const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || 'Something went wrong please try again later.'
    }

    // error validation
    if (err.name === 'ValidationError') {
        customError.message = err.details
        customError.statusCode = 422
    }

    // same variable declaration
    if (err.code && err.code === 11000) {
        customError.message = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`
        customError.statusCode = 400
    }

    // variable called but never declare
    if (err.name === 'CastError') {
        customError.message = `No item found with id: ${err.value}`
        customError.statusCode = 404
    }

    return res.status(customError.statusCode).json({
        message: customError.message
    })
}

module.exports = errorHandlerMiddleware