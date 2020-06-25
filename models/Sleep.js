module.exports = function (sequelize, DataTypes) {
  const Sleep = sequelize.define("Sleep", {
    sleep_duration: {
      type: DataTypes.INTEGER(15),
      allowNull: false,
    },
  });

  Sleep.associate = function (models) {
    Sleep.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Sleep;
};
