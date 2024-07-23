const {connection} = require("./connection/index")

const getAllUsers = async () => {
    const [query] = await connection.execute("select * from gs_final.user")
    return query
}

const getUserById = async (id) => {
    const [query] = await connection.execute(`select * from gs_final.user where id = ?`, [id])
    return query
}

const createUser = async (name, cpf, telefone) => {
    const [query] = await connection.execute(`insert into gs_final.user (name, cpf, telefone) values (?, ?)`, [name, cpf, telefone])
    return query
}

const loginUser = async (name, cpf, telefone) => {
    console.log(name, cpf)
    const [query] = await connection.execute(`select * from gs_final.user where name = ?, cpf = ? and telefone = ?`, [name, cpf, telefone])
    return query
}

const updateUser = async (id, name, cpf, telefone) => {
    const item = await getUserById(id)
    if(item.length === 0){
        return null
    }
    const [query] = await connection.execute(`update gs_final.user set name = ?, cpf = ?, telefone = ? where id = ?`, [name, cpf, telefone, id])
    return query
}

const deleteUser = async (id) => {
    const item = await getUserById(id)
    if(item.length === 0){
        return null
    }
    const [query] = await connection.execute(`delete from gs_final.user where id = ?`, [id])
    return query
}

module.exports = {getAllUsers, createUser, updateUser, deleteUser, loginUser}