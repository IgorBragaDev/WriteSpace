"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Altere o tipo da coluna 'text' para 'TEXT'
    await queryInterface.changeColumn("cards", "text", {
      type: Sequelize.TEXT,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    // Reverta a alteração, voltando o tipo da coluna 'text' para 'STRING'
    await queryInterface.changeColumn("cards", "text", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};