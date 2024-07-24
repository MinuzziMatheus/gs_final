'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(14),
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING(14),
        allowNull: false
      },
      idFabricante: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
}