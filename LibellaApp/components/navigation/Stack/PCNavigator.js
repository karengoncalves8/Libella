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
  AtividadeEsp,
  AlterarDados,
  RemoverPaciente,
  TermosCondicoes
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
          name="CadastroPaciente"
          component={CadastroPaciente}
        />
        
      </PacStack.Navigator>
    </TabContextProvider>
  );
};

export default PCNavigator;