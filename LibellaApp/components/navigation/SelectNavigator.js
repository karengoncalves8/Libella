import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Welcome,
  Selection, 
  Introduction1, 
} from "../../pages";

const SelectStack = createNativeStackNavigator();

const SelectNavigator = () => {
  return (
      <SelectNavigator.Navigator screenOptions={{ headerShown: false }}>
        <SelectNavigator.Screen name="Welcome" component={Welcome} />
        <SelectNavigator.Screen name="Selection" component={Selection} />
      </SelectNavigator.Navigator>
  );
};

export default AuthNavigator;