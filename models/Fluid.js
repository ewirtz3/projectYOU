module.exports = function (sequelize, DataTypes) {
  const Fluid = sequelize.define("Fluid", {
    fluid_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numOfGlasses: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
    },
  });

  Fluid.associate = function (models) {
    Fluid.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Fluid;
};
