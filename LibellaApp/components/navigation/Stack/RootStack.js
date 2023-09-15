import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectNavigator from "./SelectNavigator";
import AuthPC from "./AuthPC";
import AuthPS from "./AuthPS";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ userToken, choice }) => (
  
  <RootStack.Navigator screenOptions={{ headerShown: false }}>

    {/* 
    {choice === 'Psicologo' &&
      <RootStack.Screen
        name="AuthPS"
        component={AuthPS}
      />}
      {choice === 'Paciente' &&
      <RootStack.Screen
        name="AuthPC"
        component={AuthPC}
      />}
      {choice === null &&
      <RootStack.Screen
        name="Select"
        component={SelectNavigator}
      />}
    */}
    {choice === 'Psicologo' &&
      <RootStack.Screen
        name="AuthPS"
        component={AuthPS}
      />}
      {choice === 'Paciente' &&
      <RootStack.Screen
        name="AuthPC"
        component={AuthPC}
      />}
      {choice === null &&
      <RootStack.Screen
        name="Select"
        component={SelectNavigator}
      />}
  </RootStack.Navigator>
);

export default RootStackScreen;
