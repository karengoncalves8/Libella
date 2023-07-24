import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={AppNavigator}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthNavigator}
      />
    )}
  </RootStack.Navigator>
);

export default RootStackScreen;