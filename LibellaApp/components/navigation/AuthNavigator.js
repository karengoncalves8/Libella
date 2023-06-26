import React from 'react';
import { Text,  View} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login, Step, Cadastro, Termos, Inicio} from "../../pages";
import DrawerNavigator from './DrawerNavigator';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Step'>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Step"
            component={Step}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
          />
          <Stack.Screen
            name="Termos"
            component={Termos}
          />
          <Stack.Screen
            name="Inicio"
            component={Inicio}
          />
          <Stack.Screen
            name="Home"
            component={DrawerNavigator}
            options={{headerShown:false}}
          />
      </Stack.Navigator>
  );
}

export default AuthNavigator;