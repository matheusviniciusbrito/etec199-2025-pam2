import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Quiz from '../pages/Quiz/Quiz';
import Resultados from '../pages/Resultados/Resultados';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Resultados" component={Resultados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
