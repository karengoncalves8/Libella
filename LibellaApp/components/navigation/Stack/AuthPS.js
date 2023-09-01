import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  LoginPS,
  CadastroPS,
  Step1PS,
  Step2PS,
  Step3PS,
} from "../../../pages";

import CustomDrawer from "../Drawer/CustomDrawer";
import DrawerNavigator from "../DrawerNavigator";


const AuthStack = createNativeStackNavigator();

const AuthPS = () => {
  return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Step1PS" component={Step1PS} />
        <AuthStack.Screen name="Step2PS" component={Step2PS} />
        <AuthStack.Screen name="Step3PS" component={Step3PS} />
        <AuthStack.Screen name="LoginPS" component={LoginPS} />
        <AuthStack.Screen name="CadastroPS" component={CadastroPS} />
        <AuthStack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
  );
};

export default AuthPS;