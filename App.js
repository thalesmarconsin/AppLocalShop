import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import LojaDetalhes from './src/screens/Details/LojaDetalhes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTintColor: '#27ae60'}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          option={{ title: 'LocalShop '}}
        />
        <Stack.Screen
          name="Detalhes"
          component={LojaDetalhes}
          option={({ route }) => ({title: route.params.loja.nome })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
