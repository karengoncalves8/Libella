import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectNavigator from "./SelectNavigator";
import PSNavigator from "./PSNavigator";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>

    {/* 
    
        <RootStack.Screen
      name="Select"
      component={SelectNavigator}
    />
    */}

  {userToken ? (
      <RootStack.Screen
        name="App"
        component={PSNavigator}
      />
    ) : (
      <RootStack.Screen
        name="Select"
        component={SelectNavigator}
      />
    )}


  </RootStack.Navigator>
);

export default RootStackScreen;
