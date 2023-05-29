const { Course } = require('../../../db/models');
const { NotFoundError } = require('../../../errors');

module.exports = async (req, res) => {
    const { id } = req.params;

    const course = await Course.findByPk(id, {
        include: 'lessons'
    });

    if (!course) {
        throw new NotFoundError('Course not found');
    }

    return course;
}