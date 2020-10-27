import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AuthProvider from './src/contexts/auth';

//import Icon from 'react-native-vector-icons/FontAwesome';

import Routes from './src/routes';

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="light-content"/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}
