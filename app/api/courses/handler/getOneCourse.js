const { Course } = require('../../../db/models');

module.exports = async (req, res) => {
    const { id } = req.params;

    const course = await Course.findByPk(id, {
        include: 'lessons'
    });

    return course;
}