import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Welcome,
  Selection,
  Introduction1,
} from "../../pages";

const SelectStack = createNativeStackNavigator();

const SelectNavigator = ({ choice }) => {
  return (
    <SelectStack.Navigator screenOptions={{ headerShown: false }}>
      <SelectStack.Screen name="Welcome" component={Welcome} />
      <SelectStack.Screen name="Selection" component={Selection} />
      {choice = 'Pisocologo' ? (
        <RootStack.Screen
          name="PsicologoNav"
          component={PsicologoNavigator}
        />
      ) : choice = 'Paciente'(
        <RootStack.Screen
          name="PacienteNav"
          component={PacienteNavigator}
        />
      )}
    </SelectStack.Navigator>
  );
};

export default SelectNavigator;