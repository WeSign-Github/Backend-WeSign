const { User, Course, Lesson, Progress_User } = require('../../../db/models');

module.exports = async (req, res) => {
    const { course_id } = req.query;

    const user = await User.findOne({
        where: {
            provider_id: req.user.uid
        }
    });

    const whereOptions = {
        user_id: user.id,
    }

    if (course_id) {
        whereOptions.course_id = course_id;
    }

    let progress = await Progress_User.findAll({
        where: whereOptions,
        include: [
            {
                model: Course,
                as: 'course',
                attributes: ['id', 'title', 'language']
            },
            {
                model: Lesson,
                as: 'lesson',
                attributes: ['id', 'title']
            }
        ]
    });

    progress = progress.map(item => {
        return {
            course_id: item.course.id,
            course: item.course.title,
            language: item.course.language,
            lesson_id: item.lesson.id,
            lesson: item.lesson.title,
            learning_percentage: item.learning_percentage
        }
    })

    return progress;
}