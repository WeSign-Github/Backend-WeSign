'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.hasMany(models.Lesson, {
        foreignKey: 'course_id',
        as: 'lessons'
      });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    language: DataTypes.ENUM('bisindo', 'sibi'),
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses'
  });
  return Course;
};