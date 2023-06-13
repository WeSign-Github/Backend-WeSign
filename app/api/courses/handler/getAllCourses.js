const { Course } = require('../../../db/models');

module.exports = async (req, res) => {
    const courses = await Course.findAll();

    return courses;
}