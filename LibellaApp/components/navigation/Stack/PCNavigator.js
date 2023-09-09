import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  AlterarDadosPC,
  AtividadeEspPC,
  PerfilPS
} from "../../../pages";

import DrawerNavigator from "../Paciente/Drawer/DrawerNavigator"
import { TabContextProvider } from "../Paciente/BottomTab/TabContext";

const PacStack = createNativeStackNavigator();

const PCNavigator = () => {
  return (
    <TabContextProvider>
      <PacStack.Navigator screenOptions={{ headerShown: false }}>
        <PacStack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <PacStack.Screen
          name="AtividadeEsp"
          component={AtividadeEspPC}
        />
        <PacStack.Screen
          name="PerfilPS"
          component={PerfilPS}
        />
        <PacStack.Screen
          name="AlterarDadosPC"
          component={AlterarDadosPC}
        />
      </PacStack.Navigator>
    </TabContextProvider>
  );
};

export default PCNavigator;