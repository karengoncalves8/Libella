import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Inicio,
  PerfilPaciente,
  Pacientes,
  Agenda,
  Notificacoes,
  Atividades,
  CadastroPaciente,
  AtribuirAtividade,
  AtividadeEsp
} from "../../pages";

import DrawerNavigator from "./DrawerNavigator";
import { TabContextProvider } from "./TabContext";

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <TabContextProvider>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <AppStack.Screen 
          name="CadastroPaciente" 
          component={CadastroPaciente} 
        />
        <AppStack.Screen 
          name="PerfilPaciente" 
          component={PerfilPaciente} 
        />
        <AppStack.Screen 
          name="Atividades" 
          component={Atividades} 
        />
        <AppStack.Screen 
          name="AtribuirAtividade" 
          component={AtribuirAtividade} 
        /> 
        <AppStack.Screen 
          name="AtividadeEsp" 
          component={AtividadeEsp} 
        />
      </AppStack.Navigator>
    </TabContextProvider>
  );
};

export default AppNavigator;