import { useState, useEffect } from 'react';
import { Loja } from '../@types/loja';
import { LojaServices } from '../services/api';

export function useLojas() {
  const [lojas, setLojas] = useState<Loja[]>([]);
  const [loading, setLoading] = useState(true);

  const buscarLojas = () => {
    LojaServices.getLojas()
      .then(data => {
        setLojas(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Erro ao buscar lojas:", err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    buscarLojas();

    // Atualiza a cada 5 segundos
    const intervalo = setInterval(buscarLojas, 1000);

    return () => clearInterval(intervalo); // limpa ao sair da tela
  }, []);

  return { lojas, loading, buscarLojas };
}