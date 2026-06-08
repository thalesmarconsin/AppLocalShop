import axios from "axios";
import { Loja } from "../types";

export const api = axios.create({
    baseURL: "http://10.0.2.2:3000",
    timeout: 5000,
});

export const LojaServices = {
    getLojas: async () => {
        const response = await api.get("/lojas");
        return response.data;
    },
    cadastrarLoja: async (loja: Omit<Loja, 'id'>) => {
        const response = await api.post("/lojas", loja);
        return response.data;
    },
    editarLoja: async (id: string, loja: Omit<Loja, 'id'>) => {
        const response = await api.put(`/lojas/${id}`, loja);
        return response.data;
    },
    deletarLoja: async (id: string) => {
        const response = await api.delete(`/lojas/${id}`);
        return response.data;
    }
};