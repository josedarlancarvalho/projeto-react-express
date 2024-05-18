const express = require('express');
const routes = require('./routes');

const app = express();

// Configuração do middleware para lidar com JSON
app.use(express.json());

// Configuração das rotas
app.use('/', routes);

// Configuração do servidor para escutar em uma porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
