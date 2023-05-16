'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    static associate(models) {
      Lesson.belongsTo(models.Course, {
        foreignKey: 'course_id',
        as: 'course'
      });

      Lesson.belongsToMany(models.User, {
        through: 'LessonUsers',
        as: 'users',
        foreignKey: 'lesson_id'
      });
    }
  }
  Lesson.init({
    course_id: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lesson',
    tableName: 'lessons'
  });
  return Lesson;
};