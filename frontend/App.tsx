import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroLoja from './src/screens/cadastroLoja/CadastroLoja';
import EditarLoja from './src/screens/editarLoja/EditarLoja';

import HomeScreen from './src/screens/Home/HomeScreen';
import LojaDetalhes from './src/screens/Details/LojaDetalhes';
import { Loja } from './src/@types/loja';

export type RootStackParamList = {
  Home: undefined;
  Detalhes: { loja: Loja };
  CadastroLoja: undefined;
  EditarLoja: { loja: Loja };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTintColor: '#0257c7' }}>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'LocalShop' }} 
        />
        <Stack.Screen 
          name="Detalhes" 
          component={LojaDetalhes} 
          options={({ route }) => ({ title: route.params.loja.nome })}
        />
        <Stack.Screen
          name="CadastroLoja"
          component={CadastroLoja}
          options={{ title: 'Cadastrar Loja' }}
        />
        <Stack.Screen
          name="EditarLoja"
          component={EditarLoja}
          options={{ title: 'Editar Loja' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}