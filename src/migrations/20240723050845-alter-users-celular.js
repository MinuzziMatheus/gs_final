'use strict';
 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'celular', {
      type: Sequelize.STRING(15),
      allowNull: true
    });
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'celular');
  }
};
