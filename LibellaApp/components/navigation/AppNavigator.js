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
  TermosCondicoes,
  ConfigPac,
  AlterarDadosPac
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

        <AppStack.Screen
          name="AlterarDados"
          component={AlterarDados}
        />

        <AppStack.Screen
          name="RemoverPaciente"
          component={RemoverPaciente}
        />

        <AppStack.Screen
          name="AlterarDadosPac"
          component={AlterarDadosPac}
        />

        <AppStack.Screen
          name="ConfigPac"
          component={ConfigPac}
        />
      </AppStack.Navigator>
    </TabContextProvider>
  );
};

export default AppNavigator;