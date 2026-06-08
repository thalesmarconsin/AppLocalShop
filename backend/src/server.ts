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

app.get("/lojas", async (_request, response) => {
  try {
    const snapshot = await db.collection("lojas").get();
    const lojas = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return response.json(lojas);
  } catch (error) {
    return response.status(500).json({ error: "Erro ao buscar lojas." });
  }
});

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

app.put("/lojas/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { nome, categoria, imagem, distancia, descricao } = request.body;

    if (!nome || !categoria || !distancia) {
      return response
        .status(400)
        .json({ error: "Todos os campos são obrigatórios." });
    }

    const lojaAtualizada = {
      nome,
      categoria,
      imagem: imagem || "https://via.placeholder.com/150",
      distancia,
      descricao,
    };

    await db.collection("lojas").doc(id).update(lojaAtualizada);

    return response.status(200).json({ id, ...lojaAtualizada });
  } catch (error) {
    return response.status(500).json({ error: "Erro ao atualizar loja." });
  }
});

app.delete("/lojas/:id", async (request, response) => {
  try {
    const { id } = request.params;

    await db.collection("lojas").doc(id).delete();

    return response.status(200).json({ message: "Loja deletada com sucesso." });
  } catch (error) {
    return response.status(500).json({ error: "Erro ao deletar loja." });
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
