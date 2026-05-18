import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({
    message: 'API do LocalShop rodano com sucesso!',
  });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});