import React, { useContext, useState, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectNavigator from "./SelectNavigator";
import AuthPC from "./AuthPC";
import AuthPS from "./AuthPS";

import { AuthContext } from "./AuthContext";
const RootStack = createNativeStackNavigator();

const RootStackScreen = () => (

  <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
        name="Select"
        component={SelectNavigator}
      />
  </RootStack.Navigator>
);

export default RootStackScreen;
