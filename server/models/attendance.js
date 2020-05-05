'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    t_google_id: DataTypes.STRING,
    student_fullname: DataTypes.STRING,
    lesson_id: DataTypes.STRING,
    subject: DataTypes.STRING,
    type: DataTypes.STRING,
    points: DataTypes.INTEGER,
  }, {});
  Attendance.associate = function(models) {
    // associations can be defined here
  };
  return Attendance;
};