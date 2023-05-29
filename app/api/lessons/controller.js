const { StatusCodes } = require('http-status-codes');
const getOneLesson = require('./handler/getOneLesson');
const completeTheLesson = require('./handler/completeTheLesson');

const show = async (req, res, next) => {
    try {
        let result = await getOneLesson(req)

        res.status(StatusCodes.OK).json({
            data: result,
            message: "Successfully get all lessons",
            error: false
        })
    } catch (error) {
        next(error)
    }
}

const completeLesson = async (req, res, next) => {
    try {
        let result = await completeTheLesson(req)

        res.status(StatusCodes.OK).json({
            data: result,
            message: "Successfully complete the lesson",
            error: false
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { show, completeLesson }