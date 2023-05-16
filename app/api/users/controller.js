const { User, Course, Lesson, Progress_User } = require('../../db/models');

const me = async (req, res) => {
	let data = await User.findOne({
		where: {
			id: 1
		}
	});

	return res.status(200).json({
		data,
	})
}

const learningProgress = async (req, res) => {
	let progress = await Progress_User.findAll({
		where: {
			user_id: 1
		},
		include: [
			{
				model: Course,
				as: 'course',
				attributes: ['title']
			},
			{
				model: Lesson,
				as: 'lesson',
				attributes: ['title']
			}
		]
	});

	progress = progress.map(item => {
		return {
			course: item.course.title,
			lesson: item.lesson.title,
			learning_percentage: item.learning_percentage
		}
	})

	return res.status(200).json({
		data: progress,
	})
}

module.exports = { me, learningProgress };