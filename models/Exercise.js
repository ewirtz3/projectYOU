module.exports = function (sequelize, DataTypes) {
  const Exercise = sequelize.define("Exercise", {
    exercise_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exercise_duration: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
    },
    user_Id: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  });

  Exercise.associate = function (models) {
    Exercise.hasOne(models.User, {
      foreignKey: "User.id",
    });
    Exercise.belongsTo(User);
  };

  return Exercise;
};
