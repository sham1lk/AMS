'use strict';
module.exports = (sequelize, DataTypes) => {
  const attendance = sequelize.define('attendance', {
    t_google_id: DataTypes.STRING,
    student_fullname: DataTypes.STRING,
    lesson_id: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {});
  attendance.associate = function(models) {
    // associations can be defined here
  };
  return attendance;
};