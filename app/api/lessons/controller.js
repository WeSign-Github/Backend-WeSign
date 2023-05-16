const { Lesson, Progress_User, Lesson_User } = require('../../db/models')

const show = async (req, res) => {
    const { id } = req.params

    const lesson = await Lesson.findByPk(id);

    res.status(200).json({
        data: lesson
    });
}

const completeLesson = async (req, res) => {
    const { id } = req.params

    const lesson = await Lesson.findByPk(id);
    const user_already_completed = await lesson.hasUser(1)

    if (!user_already_completed) {
        await Lesson_User.create({
            user_id: 1,
            course_id: lesson.course_id,
            lesson_id: lesson.id
        })

        const lessons = await Lesson.findAll({
            where: {
                course_id: lesson.course_id
            }
        })

        const total_lessons_completed = await Lesson_User.count({
            where: {
                course_id: lesson.course_id,
                user_id: 1
            }
        })

        const total_lesson = lessons.length
        const learning_percentage = total_lessons_completed / total_lesson * 100

        const is_user_progress_exist = await Progress_User.findOne({
            where: {
                user_id: 1,
                course_id: lesson.course_id
            }
        })

        if (is_user_progress_exist) {
            await is_user_progress_exist.update({
                lesson_id: lesson.id,
                learning_percentage
            })
        } else {
            await Progress_User.create({
                user_id: 1,
                course_id: lesson.course_id,
                lesson_id: lesson.id,
                learning_percentage
            })
        }
    }

    res.status(200).json({
        message: 'Lesson completed'
    });
}

module.exports = { show, completeLesson }