const { StatusCodes } = require('http-status-codes');
const getOneLesson = require('./handler/getOneLesson');
const completeTheLesson = require('./handler/completeTheLesson');

const show = async (req, res, next) => {
    try {
        let result = await getOneLesson(req)

        res.status(StatusCodes.OK).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const completeLesson = async (req, res, next) => {
    try {
        let result = await completeTheLesson(req)

        res.status(StatusCodes.OK).json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { show, completeLesson }