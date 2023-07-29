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
  Inicio,
  PerfilPaciente,
  Paciente,
  Agenda,
  Notificacoes,
  FichaPaciente
} from "../../pages";

import CustomDrawer from "./CustomDrawer";
import DrawerNavigator from "./DrawerNavigator";
import { TabContextProvider } from "./TabContext";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <TabContextProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Selection" component={Selection} />
        <Stack.Screen name="Introduction1" component={Introduction1} />
        <Stack.Screen name="Introduction2" component={Introduction2} />
        <Stack.Screen name="Introduction3" component={Introduction3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Drawer" component={CustomDrawer} />
        <Stack.Screen name="PerfilPaciente" component={PerfilPaciente} />
        <Stack.Screen name="FichaPaciente" component={FichaPaciente} />
        <Stack.Screen name="Paciente" component={Paciente} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Notificacoes" component={Notificacoes} />
      </Stack.Navigator>
    </TabContextProvider>
  );
};

export default AuthNavigator;
