const { User, Course, Lesson, Progress_User } = require('../../../db/models');

module.exports = async (req, res) => {
    const user = await User.findOne({
        where: {
            provider_id: req.user.uid
            // id: 1
        }
    });

    let progress = await Progress_User.findAll({
        where: {
            user_id: user.id
            // user_id: 1
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

    return progress;
}