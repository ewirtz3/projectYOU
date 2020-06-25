"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.dropTable("Exercises");
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.createTable("Exercises", {
      id: INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
      exercise_type: VARCHAR(30) NOT NULL,
      exercise_duration: INTEGER(3) NOT NULL,
      user_Id: INTEGER(3),
      FOREIGN KEY: (user_Id) REFERENCES Users(id)});
  },
};
