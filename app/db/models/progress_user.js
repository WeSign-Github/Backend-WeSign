'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Progress_User extends Model {
    static associate(models) {
      Progress_User.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });

      Progress_User.belongsTo(models.Course, {
        foreignKey: 'course_id',
        as: 'course'
      });

      Progress_User.belongsTo(models.Lesson, {
        foreignKey: 'lesson_id',
        as: 'lesson'
      });
    }
  }
  Progress_User.init({
    user_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    lesson_id: DataTypes.INTEGER,
    learning_percentage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Progress_User',
    tableName: 'progress_users'
  });
  return Progress_User;
};