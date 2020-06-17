module.exports -
  function (sequelize, DataTypes) {
    const Sleep = sequelize.define("Sleep", {
      sleep_duration: {
        type: DataTypes.Integer(15),
        allowNull: false
      },
      user_id: {
        type: DataTypes.STRING(30),
        allowNull: false
      }
    });

    Sleep.associate = function (models) {
      Sleep.hasOne(models.User, {
        foreignKey: "User.id"
      });
      Sleep.belongsTo(User);
    };

    return Sleep;
  };
