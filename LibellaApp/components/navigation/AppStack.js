import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Perfil from "../../pages/Perfil";
import Inicio from "../../pages/Inicio";
import CustomDrawer from '../CustomDrawer';
const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{drawerActiveBackgroundColor: "blue",
        drawerActiveTintColor: 'red',
        drawerInactiveTintColor: 'pink',
        drawerLabelStyle: {
          fontFamily: 'Comfortaa-Bold',
          fontSize: 15,
        },}}>
          <Drawer.Screen
            name="Inicio" 
            component={Inicio}
          />
          <Drawer.Screen
            name="Perfil" 
            component={Perfil}
          />
    </Drawer.Navigator>
  );
}

export default AuthStack;