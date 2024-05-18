const express = require('express');
const router = express.Router();

// Rota para lidar com requisições GET
router.get('/api/exemplo', (req, res) => {
  // Aqui você pode retornar dados ou realizar alguma operação
  res.json({ message: 'Rota GET de exemplo' });
});

// Rota para lidar com requisições POST
router.post('/api/exemplo', (req, res) => {
  // Aqui você pode processar os dados recebidos no corpo da requisição
  const { body } = req;
  // Realize alguma operação com os dados recebidos
  console.log(body);
  res.json({ message: 'Rota POST de exemplo' });
});

module.exports = router;
