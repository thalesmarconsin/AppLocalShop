import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { LojaServices } from '../../services/api';
import { styles } from './StyleDetalhes';

export default function LojaDetalhes({ route, navigation }) {
  const { loja } = route.params;

  const handleDeletar = () => {
    Alert.alert(
      'Confirmar',
      `Deseja deletar "${loja.nome}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Deletar',
          style: 'destructive',
          onPress: async () => {
            try {
              await LojaServices.deletarLoja(loja.id);
              Alert.alert('Sucesso', 'Loja deletada com sucesso!', [
                { text: 'OK', onPress: () => navigation.goBack() }
              ]);
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível deletar a loja.');
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: loja.imagem }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.nome}>{loja.nome}</Text>
        <Text style={styles.categoria}>{loja.categoria}</Text>
        <Text style={styles.descricao}>
          Bem-vindo à {loja.nome}! Aqui você encontra os melhores produtos da região com entrega rápida.
        </Text>

        <TouchableOpacity 
          style={styles.botaoEditar} 
          onPress={() => navigation.navigate('EditarLoja', { loja })}
        >
          <Text style={styles.botaoTexto}>✏️ Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botaoDeletar} 
          onPress={handleDeletar}
        >
          <Text style={styles.botaoTexto}>🗑️ Deletar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botaoVoltar} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.botaoTexto}>← Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}