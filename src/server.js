const express = require('express');
const app = express();
const PORT = 3302;

// Importando modelos e banco de dados
const database = require('./connection/db');
const User = require('./models/user.model');
const userRoutes = require('./routes/userRoutes');
const Manufacturer = require('./models/manufacturer.model');

app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Servidor Express está rodando!');
});

const initializeDatabase = async () => {
    try {
        // await database.sync({ force: true });
        
        // const manufacturer = await Manufacturer.create({
        //    nome: 'Apple'
        // });

        // const idFabricante = manufacturer.id;

        // const user = await User.create({
        //    nome: 'Agora Vai 3',
        //    cpf: "000.000.000-00",
        //    telefone: "(51) 9999-9999",
        //    celular: "(51) 99999-9999",
        //    idFabricante: idFabricante
        // });

        console.log('Banco de dados sincronizadocom sucesso.');
    } catch (error) {
        console.error('Erro ao inicializar o banco de dados:', error);
    }
};

const startServer = async () => {
    try {
        await initializeDatabase();
        app.listen(PORT, () => {
            console.log(`Servidor Express rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
};

startServer();