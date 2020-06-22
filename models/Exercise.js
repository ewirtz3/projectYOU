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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Exercise.associate = function (models) {
    Exercise.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Exercise;
};
