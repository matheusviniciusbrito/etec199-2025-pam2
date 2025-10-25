import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import UsersScreen from './screens/UsersScreen';
import MapScreen from './screens/MapScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="Users" component={UsersScreen} options={{ title: 'Usuários' }} />
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Mapa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}