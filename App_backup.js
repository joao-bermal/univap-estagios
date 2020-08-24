import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import Icon from 'react-native-vector-icons/FontAwesome';
//import styled from 'styled-components/native';

import Login from './src/pages/Login';
import Propostas from './src/pages/Propostas';
import Inserir from './src/pages/Inserir';
import Cadastro from './src/pages/Cadastro';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false, animationEnabled: true }} 
        />
        <Stack.Screen 
          name="Propostas" 
          component={Propostas} 
          options={{ headerShown: true, animationEnabled: true }} 
        />
        <Stack.Screen 
          name="Inserir" 
          component={Inserir} 
          options={{ headerShown: false, animationEnabled: true }} 
        />
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro} 
          options={{ headerShown: true, animationEnabled: true }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}