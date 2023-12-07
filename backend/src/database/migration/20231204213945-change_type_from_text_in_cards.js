"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.changeColumn("cards", "text", {
      type: Sequelize.TEXT,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.changeColumn("cards", "text", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};