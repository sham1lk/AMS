module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    google_id:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  User.associate = (models) => {
  };

  return User;
};
