import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Loja } from '../@types/loja';
import { LojaServices } from '../services/api';

type FormData = Omit<Loja, 'id'>;

export function useCadastroLoja() {
  const navigation = useNavigation();

  const [formData, setFormData] = useState<FormData>({
    nome: '',
    categoria: '',
    imagem: '',
    distancia: '',
    descricao: '',
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSalvar = async () => {
    if (!formData.nome || !formData.categoria || !formData.distancia) {
      Alert.alert('Atenção', 'Preencha todos os campos obrigatórios (*)');
      return;
    }

    try {
      await LojaServices.cadastrarLoja(formData);
      Alert.alert('Sucesso', 'Local cadastrado com sucesso!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      console.log('Erro ao cadastrar:', error);
      Alert.alert('Erro', 'Não foi possível cadastrar o local.');
    }
  };

  return { formData, updateField, handleSalvar };
}