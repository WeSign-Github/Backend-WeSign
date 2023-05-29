const { StatusCodes } = require('http-status-codes');
const getTextToSign = require("./handler/getTextToSign");

const textToSign = async (req, res, next) => {
    try {
        let result = await getTextToSign(req);

        res.status(StatusCodes.OK).json({
            data: result,
            message: "Successfully get sign",
            error: false
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { textToSign };