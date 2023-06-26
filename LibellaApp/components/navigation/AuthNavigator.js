import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Login, Cadastro, Welcome, Selection, Introduction1, Introduction2, Introduction3 } from "../../pages";
import DrawerNavigator from './DrawerNavigator';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Step'>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
          />
          <Stack.Screen
            name="Selection"
            component={Selection}
          />
          <Stack.Screen
            name="Introduction1"
            component={Introduction1}
          />
          <Stack.Screen
            name="Introduction2"
            component={Introduction2}
          />
          <Stack.Screen
            name="Introduction3"
            component={Introduction3}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
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