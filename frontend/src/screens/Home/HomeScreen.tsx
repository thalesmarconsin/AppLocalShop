import { View, FlatList, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useLojas } from '../../hooks/useLojas';
import LojaCard from '../../components/LojaCard';
import { styles } from './StyleHome';
import { RootStackParamList } from '../../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const { lojas, loading } = useLojas();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  if (loading) return <ActivityIndicator size="large" color="#27ae60" />;

  return (
    <View style={{ flex: 1 }}>
      <FlatList 
        data={lojas}
        renderItem={({ item }) => <LojaCard loja={item} />}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => navigation.navigate("CadastroLoja")}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
 {/* Rodapé */}
      <View style={{
        paddingVertical: 12,
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
        backgroundColor: '#f9f9f9',
      }}>
        <Text style={{ fontSize: 14, color: '#666' }}>
          Desenvolvido por Thales Marconsin de Oliveira
        </Text>
      </View>

    </View>
  );
}