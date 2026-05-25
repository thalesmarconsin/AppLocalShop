import express from "express";
import admin from "firebase-admin";
import { readFileSync } from "fs";

const app = express();

const PORT = 3000;

app.use(express.json());

const serviceAccount = JSON.parse(
  readFileSync("./firebase-key.json", "utf-8"),
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.post("/lojas", async (request, response) => {
  try {
    const { nome, categoria, imagem, distancia, descricao } = request.body;

    if (!nome || !categoria || !distancia ) {
      return response
        .status(400)
        .json({ error: "Todos os campos são obrigatórios." });
    }

    const novaLoja = {
      nome,
      categoria,
      imagem: imagem || "https://via.placeholder.com/150",
      distancia,
      descricao,
    };

    const docRef = await db.collection("lojas").add(novaLoja);

    return response.status(201).json({
      id: docRef.id,
      ...novaLoja,
    });
  } catch (error) {
    return response.status(500).json({ error: "Erro ao criar loja." });
  }
});

app.get("/", (_request, response) => {
  return response.json({
    message: "API do LocalShop rodando com sucesso!",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
