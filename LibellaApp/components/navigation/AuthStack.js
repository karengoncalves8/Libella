import * as React from 'react';
import { Text,  View} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../../pages/Login";
import Inicio from "../../pages/Inicio";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login"
    screenOptions={{headerShown:false, }}>
          <Stack.Screen
            name="Login" 
            component={Login}
          />
          <Stack.Screen
            name="Inicio" 
            component={Inicio}
          />
        </Stack.Navigator>
  );
}

export default AuthStack;