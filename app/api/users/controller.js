const { StatusCodes } = require('http-status-codes');

const getLearningProgress = require('./handler/getLearningProgress');
const getLoggedUser = require('./handler/getLoggedUser');

const me = async (req, res, next) => {
	try {
		let result = await getLoggedUser(req);

		res.status(StatusCodes.OK).json({
			data: result
		})
	} catch (error) {
		next(error)
	}
}

const learningProgress = async (req, res, next) => {
	try {
		let result = await getLearningProgress(req);

		res.status(StatusCodes.OK).json({
			data: result
		})
	} catch (error) {
		next(error)
	}
}

module.exports = { me, learningProgress };