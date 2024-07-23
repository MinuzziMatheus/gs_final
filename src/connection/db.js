const Sequelize = require('sequelize')
const sequelize = new Sequelize(
   'gs_final', 
   'root', 
   'password', 
   {
      host: 'localhost',
      dialect: 'mysql',
   }
)

module.exports = sequelize;

