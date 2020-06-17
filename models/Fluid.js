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
    user_Id: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  });

  Fluid.associate = function (models) {
    Fluid.hasOne(models.User, {
      foreignKey: "User.id",
    });
    Fluid.belongsTo(User);
  };

  return Fluid;
};
