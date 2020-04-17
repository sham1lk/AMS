module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    type: {
      type: DataTypes.STRING,
    },
    google_id:{
      type: DataTypes.STRING,
    }
  });
  User.associate = (models) => {
  };

  return User;
};
