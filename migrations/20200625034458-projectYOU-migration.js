"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.dropTable("Fluid");
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.createTable("Fluid", {
    id: INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fluid_type: VARCHAR NOT NULL,
    numOfGlasses: INTEGER(3) NOT NULL,
    user_Id: INTEGER(3),
    FOREIGN KEY: (user_Id) REFERENCES Users(id)});
  },
};
