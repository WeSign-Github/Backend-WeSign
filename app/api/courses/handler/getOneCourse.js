const { Course, Lesson, Lesson_User } = require('../../../db/models');
const { NotFoundError } = require('../../../errors');

module.exports = async (req, res) => {
    const { id } = req.params;

    const course = await Course.findByPk(id);

    if (!course) {
        throw new NotFoundError('Course not found');
    }

    const lessons = await Lesson.findAll({
        where: {
            course_id: id,
        }
    });

    const lessonUser = await Lesson_User.findAll({
        where: {
            user_id: 1,
            course_id: id,
        }
    });

    const result = lessons.map(lesson => {
        lesson = lesson.toJSON();
        lesson.completed = false;

        lessonUser.forEach(item => {
            if (lesson.id === item.lesson_id) {
                lesson.completed = true;
            }
        });

        return lesson;
    });

    return {
        ...course.toJSON(),
        lessons: result,
    }
}