const { StatusCodes } = require('http-status-codes');
const getAllCourses = require("./handler/getAllCourses");
const getOneCourse = require('./handler/getOneCourse');

const index = async (req, res, next) => {
    try {
        const result = await getAllCourses(req);

        res.status(StatusCodes.OK).json({
            data: result,
            message: "Successfully get all courses",
            error: false
        })
    } catch (error) {
        next(error)
    }
}

const show = async (req, res, next) => {
    try {
        const result = await getOneCourse(req);

        res.status(StatusCodes.OK).json({
            data: result,
            message: "Successfully get one course",
            error: false
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { index, show }