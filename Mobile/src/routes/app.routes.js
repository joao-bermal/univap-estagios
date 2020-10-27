import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Propostas from '../pages/Propostas';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
  return(
    <AppDrawer.Navigator
      drawerContent={ (props) => <CustomDrawer {...props} /> }
      drawerStyle={{
        backgroundColor: '#00488B',
      }}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: "bold",
        },
        activeTintColor: '#FFF',
        inactiveBackgroundColor: '#1C5D99',
        inactiveTintColor: '#FFF',
        itemStyle: {
          marginVertical: 5,  
        }
      }}
    >
      <AppDrawer.Screen name = "Propostas" component={Propostas}/>
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;