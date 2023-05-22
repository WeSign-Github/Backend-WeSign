const { Lesson, User, Progress_User, Lesson_User } = require('../../../db/models')

module.exports = async (req, res) => {
    const { id } = req.params

    const user = await User.findOne({
        where: {
            // provider_id: req.user.uid
            provider_id: "dsfkjdsfkjh"
        }
    })

    const lesson = await Lesson.findByPk(id);
    const user_already_completed = await lesson.hasUser(user.id)

    if (!user_already_completed) {
        await Lesson_User.create({
            user_id: user.id,
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
                user_id: user.id
            }
        })

        const total_lesson = lessons.length
        const learning_percentage = total_lessons_completed / total_lesson * 100

        const is_user_progress_exist = await Progress_User.findOne({
            where: {
                user_id: user.id,
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
                user_id: user.id,
                course_id: lesson.course_id,
                lesson_id: lesson.id,
                learning_percentage
            })
        }
    }

    return 'Lesson completed';
}