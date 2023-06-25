import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../CustomDrawer';

// Páginas
import Perfil from "../../pages/Perfil";
import Inicio from "../../pages/Inicio";
import Chat from "../../pages/Chat";
import Notificacoes from "../../pages/Notificacoes";
import Config from "../../pages/Config";
import Ajuda from "../../pages/Ajuda";
import Termos from "../../pages/Termos";

// Icones
import Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator 
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: "#53A7D7",
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: '#313131',
          drawerLabelStyle: {
            fontSize: 20,
            marginLeft: -15,
          },
          headerStyle:{
            backgroundColor: '#53A7D7'
          },
          headerTintColor: 'white'
        }}>
          <Drawer.Screen
            name="Início" 
            component={Inicio}
            options={{
              drawerIcon: ({color}) => (
                <Ionicons name='home-outline' size={35} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Perfil" 
            component={Perfil}
            options={{
              drawerIcon: ({color}) => (
                <Ionicons name='person-outline' size={35} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Chat" 
            component={Chat}
            options={{
              drawerIcon: ({color}) => (
                <Ionicons name='chatbubble-outline' size={35} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Notificações" 
            component={Notificacoes}
            options={{
              drawerIcon: ({color}) => (
                <Ionicons name='notifications-outline' size={35} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Configurações" 
            component={Config}
            options={{
              drawerIcon: ({color}) => (
                <Ionicons name='settings-outline' size={35} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Ajuda" 
            component={Ajuda}
            options={{
              drawerIcon: ({color}) => (
                <Ionicons name='md-help-circle-outline' size={35} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Termos e Condições" 
            component={Termos}
            options={{
              drawerIcon: ({color}) => (
                <Ionicons name='document-text-outline' size={35} color={color} />
              ),
            }}
          />
    </Drawer.Navigator>
  );
}

export default AuthStack;