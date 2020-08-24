import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const AuthStack = createStackNavigator();

function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen 
        name = "Login" 
        component={Login}
        options={{headerShown: false}}
      />

      <AuthStack.Screen 
        name = "Cadastro" 
        component={Cadastro}
        options={{
          headerStyle:{
            backgroundColor: '#00488B',
            borderBottomWidth: 1,
            borderBottomColor: '#FFF'
          },
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerTitle: 'Voltar',
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;