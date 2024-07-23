const User = require('../models/user.model');

// Obter todos os usuários
const getAllUsers = async () => {
    return await User.findAll();
}

// Obter usuário por ID
const getUserById = async (id) => {
    return await User.findByPk(id);
}

// Criar um novo usuário
const createUser = async (name, cpf, telefone, celular, idFabricante) => {
    return await User.create({
        nome: name,
        cpf,
        telefone,
        celular,
        idFabricante
    });
}

// Login do usuário
const loginUser = async (name, cpf, telefone, celular) => {
    return await User.findOne({
        where: { nome: name, cpf, telefone, celular }
    });
}

// Atualizar um usuário
const updateUser = async (id, name, cpf, telefone, celular) => {
    const user = await getUserById(id);
    if (!user) return null;
    return await user.update({ nome: name, cpf, telefone, celular });
}

// Deletar um usuário
const deleteUser = async (id) => {
    const user = await getUserById(id);
    if (!user) return null;
    await user.destroy();
    return user;
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser, loginUser };
