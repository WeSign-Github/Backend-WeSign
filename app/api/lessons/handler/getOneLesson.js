const { Lesson } = require('../../../db/models')

module.exports = async (req, res) => {
    const { id } = req.params

    const lesson = await Lesson.findByPk(id);

    return lesson;
}