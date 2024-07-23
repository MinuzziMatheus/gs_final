'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [
    {
      nome: 'Teste',
      cpf: "000.000.000-11",
      telefone: "(51) 8888-8888",
      celular: "(51) 99999-9999",
      idFabricante: 1
    },
    {
      nome: 'Teste 2',
      cpf: "000.000.000-22",
      telefone: "(51) 8888-8888",
      celular: "(51) 99999-9999",
      idFabricante: 2
    },
  ], {}),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', {});
  }
};