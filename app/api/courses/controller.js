const { Course } = require('../../db/models');

const index = async (req, res) => {
    const courses = await Course.findAll();

    res.status(200).json({
        data: courses
    });
}

const show = async (req, res) => {
    const { id } = req.params;
    
    const course = await Course.findByPk(id, {
        include: 'lessons'
    });

    res.status(200).json({
        data: course
    });
}

module.exports = { index, show }