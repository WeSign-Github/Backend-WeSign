'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Progress_User, {
        foreignKey: 'user_id',
        as: 'progress'
      });

      User.belongsToMany(models.Lesson, {
        through: 'LessonUsers',
        as: 'lessons',
        foreignKey: 'user_id'
      });
    }
  }
  User.init({
    provider_id: DataTypes.STRING,
    provider_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    email: DataTypes.STRING,
    is_verified: DataTypes.BOOLEAN,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};