const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection/db");

const Users = database.define("user", {
   id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
   },
   nome: {
      type: DataTypes.STRING,
      allowNull: false
   },
   cpf: {
      type: DataTypes.STRING,
      allowNull: false
   },
   telefone: {
      type: DataTypes.STRING,
      allowNull: false
   },
   celular: {
      type: DataTypes.STRING,
      allowNull: false
   },
});


// Users.create({
//    nome: "Teste 4",
//    cpf: "000.000.000-00",
//    telefone: "(51) 99999-9999",
// }).then(res => {
//       console.log(res)
// }).catch((error) => {
//       console.error('Failed to create a new user : ', error);
// });

// Users.findAll().then(res => {
//    console.log(res)
// }).catch((error) => {
//    console.error('Failed to retrieve data : ', error);
// });

// Users.findByPk(1).then(res => {
//    res.nome = "Teste"
//    console.log(res.nome)
//    res.save()
// }).catch((error) => {
//    console.error('Failed to retrieve data : ', error);
// });

// Users.findOne({
//    where: {
//          id : "1"
//    }
// }).then(res => {
//    console.log(res)
// }).catch((error) => {
//    console.error('Failed to retrieve data : ', error);
// });

// Users.destroy({
//    where: {
//       id: 2
//    }
// }).then(() => {
//    console.log("Successfully deleted record.")
// }).catch((error) => {
//    console.error('Failed to delete record : ', error);
// });

module.exports = Users;