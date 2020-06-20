module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
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
