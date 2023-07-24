import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Login,
  Cadastro,
  Welcome,
  Selection,
  Introduction1,
  Introduction2,
  Introduction3,
} from "../../pages";

import CustomDrawer from "./CustomDrawer";
import DrawerNavigator from "./DrawerNavigator";


const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Welcome" component={Welcome} />
        <AuthStack.Screen name="Selection" component={Selection} />
        <AuthStack.Screen name="Introduction1" component={Introduction1} />
        <AuthStack.Screen name="Introduction2" component={Introduction2} />
        <AuthStack.Screen name="Introduction3" component={Introduction3} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Cadastro" component={Cadastro} />
        <AuthStack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
  );
};

export default AuthNavigator;
