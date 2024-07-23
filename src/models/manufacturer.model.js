const Sequelize = require('sequelize');
const database = require('../connection/db');
 
const Manufacturer = database.define('manufacturer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
})


 
module.exports = Manufacturer;