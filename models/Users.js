module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Exercise, {
      foreignKey: {
        allowNull: false,
      },
    });
    User.hasMany(models.Sleep, {
      foreignKey: {
        allowNull: false,
      },
    });
    User.hasMany(models.Fluid, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return User;
};
