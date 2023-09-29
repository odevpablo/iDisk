const express = require('express');
const app = express();
const port = 3000;

app.get('/sv', (req, res) => {
  res.send('Olá, Mundo!');
});

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
