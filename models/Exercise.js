module.exports = function (sequelize, DataTypes) {
  const Exercise = sequelize.define("Exercise", {
    exercise_duration: {
      type: DataTypes.INTEGER(3),
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
