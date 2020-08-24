import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Propostas from '../pages/Propostas';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
  return(
    <AppDrawer.Navigator
      drawerStyle={{
        //backgroundColor: '#',
      }}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: "bold",
        },
        //activeTintColor: '#',
        //activeBackgroundColor: '#',
        //inactiveBackgroundColor: '#',
        //inactiveTintColor: '#',
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