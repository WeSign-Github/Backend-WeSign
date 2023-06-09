const { Lesson } = require('../../../db/models');
const { NotFoundError } = require('../../../errors');
const { Op } = require('sequelize');

module.exports = async (req, res) => {
    const { id } = req.params

    const lesson = await Lesson.findByPk(id);

    if (!lesson) {
        throw new NotFoundError('Lesson not found');
    }

    const nextLesson = await Lesson.findOne({
        where: {
            id: {
                [Op.gt]: lesson.id
            },
            course_id: lesson.course_id
        },
        order: [['id', 'ASC']]
    });

    if (nextLesson) {
        lesson.dataValues.nextLessonId = nextLesson.id;
    } else {
        lesson.dataValues.nextLessonId = null;
    }

    return lesson;
}