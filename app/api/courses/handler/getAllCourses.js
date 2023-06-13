const { Course } = require('../../../db/models');

module.exports = async (req, res) => {
    const { language } = req.query;

    const courses = await Course.findAll({
        where: {
            language,
        }
    });

    return courses;
}