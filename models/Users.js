// const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      len: [1, 10],
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

  User.prototype.validPassword = (password) => {
    if (password === this.password) {
      return true;
    }
    return false;
  };

  // User.addHook("beforeCreate", (user) => {
  //   user.password = bcrypt.hashSync(
  //     user.password,
  //     bcrypt.genSaltSync(10),
  //     null
  //   );
  // });
  return User;
};
