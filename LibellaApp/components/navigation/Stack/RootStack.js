import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthPS";
import SelectNavigator from "./SelectNavigator";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>

    {/* 
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={AppNavigator}
      />
    ) : (
      <RootStack.Screen
        name="Select"
        component={SelectNavigator}
      />
    )}
    */}
    <RootStack.Screen
      name="Select"
      component={SelectNavigator}
    />

  </RootStack.Navigator>
);

export default RootStackScreen;
