const { Lesson } = require('../../../db/models');
const { NotFoundError } = require('../../../errors');

module.exports = async (req, res) => {
    const { id } = req.params

    const lesson = await Lesson.findByPk(id);

    if (!lesson) {
        throw new NotFoundError('Lesson not found');
    }

    return lesson;
}