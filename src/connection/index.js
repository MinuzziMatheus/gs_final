const mysql = require("mysql2/promise")
const connection = mysql.createPool({
    host: "localhost",
    port: "3306",
    database: "gs_final",
    user: "root",
    password: "password",
})

module.exports = { connection }