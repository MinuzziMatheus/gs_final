const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller'); // Caminho para o seu controlador

// Defina suas rotas
router.get('/', async (req, res) => {
    try {
        const users = await userController.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter usuários' });
    }
});

router.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userController.getUserById(id);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter usuário' });
    }
});

router.post('/users', async (req, res) => {
    const { nome, cpf, telefone, celular, idFabricante } = req.body;
    try {
        const user = await userController.createUser(nome, cpf, telefone, celular, idFabricante);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

router.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, cpf, telefone, celular } = req.body;
    try {
        const user = await userController.updateUser(id, nome, cpf, telefone, celular);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

router.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userController.deleteUser(id);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});

module.exports = router;