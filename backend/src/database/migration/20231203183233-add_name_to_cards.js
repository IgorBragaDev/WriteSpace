"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("cards", "name", {
      type: Sequelize.STRING,
      allowNull: true, // ou false, dependendo se o nome é obrigatório ou não
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("cards", "name");
  },
};