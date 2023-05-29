const { StatusCodes } = require('http-status-codes');

const getLearningProgress = require('./handler/getLearningProgress');
const getLoggedUser = require('./handler/getLoggedUser');
const postUploadAvatar = require('./handler/postUploadAvatar');

const me = async (req, res, next) => {
    try {
        let result = await getLoggedUser(req);

        res.status(StatusCodes.OK).json({
            data: result,
            message: "Successfully get logged user data",
            error: false
        })
    } catch (error) {
        next(error)
    }
}

const learningProgress = async (req, res, next) => {
    try {
        let result = await getLearningProgress(req);

        res.status(StatusCodes.OK).json({
            data: result,
            message: "Successfully get user learning progress",
            error: false
        })
    } catch (error) {
        next(error)
    }
}

const uploadAvatar = async (req,res,next) => {
    try {
        let result = await postUploadAvatar(req);
    
        res.status(StatusCodes.CREATED).json({
            data: result,
            message: "Successfully upload avatar",
            error: false
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { me,
    learningProgress,
    uploadAvatar };