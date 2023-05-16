const { Lesson } = require('../../db/models')

const show = async (req, res) => {
    const { id } = req.params

    const lesson = await Lesson.findByPk(id);

    res.status(200).json({
        data: lesson
    });
}

const updateProgress = async (req, res) => {
    const { id } = req.params

    const lesson = await Lesson.findByPk(id);

    await lesson.addUser(1);

    res.status(200).json({
        data: lesson
    });
}

module.exports = { show, updateProgress }