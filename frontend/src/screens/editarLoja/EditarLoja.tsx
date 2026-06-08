import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  ScrollView, KeyboardAvoidingView, Platform, Alert
} from 'react-native';
import { LojaServices } from '../../services/api';
import { styles } from '../cadastroLoja/CadastroLojaStyle';

export default function EditarLoja({ route, navigation }) {
  const { loja } = route.params;

  const [formData, setFormData] = useState({
    nome: loja.nome,
    categoria: loja.categoria,
    imagem: loja.imagem,
    distancia: loja.distancia,
    descricao: loja.descricao || '',
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSalvar = async () => {
    if (!formData.nome || !formData.categoria || !formData.distancia) {
      Alert.alert('Atenção', 'Preencha todos os campos obrigatórios (*)');
      return;
    }

    try {
      await LojaServices.editarLoja(loja.id, formData);
      Alert.alert('Sucesso', 'Loja atualizada com sucesso!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      console.log('Erro ao editar:', error);
      Alert.alert('Erro', 'Não foi possível atualizar a loja.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Editar Local</Text>

        <Text style={styles.label}>Nome do Local *</Text>
        <TextInput
          style={styles.input}
          value={formData.nome}
          onChangeText={(v) => updateField('nome', v)}
        />

        <Text style={styles.label}>Categoria *</Text>
        <TextInput
          style={styles.input}
          value={formData.categoria}
          onChangeText={(v) => updateField('categoria', v)}
        />

        <Text style={styles.label}>Link da Imagem</Text>
        <TextInput
          style={styles.input}
          keyboardType="url"
          autoCapitalize="none"
          value={formData.imagem}
          onChangeText={(v) => updateField('imagem', v)}
        />

        <Text style={styles.label}>Distância *</Text>
        <TextInput
          style={styles.input}
          value={formData.distancia}
          onChangeText={(v) => updateField('distancia', v)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar Alterações</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}