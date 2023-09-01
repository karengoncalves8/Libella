import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  PerfilPaciente,
  Atividades,
  CadastroPaciente,
  AtribuirAtividade,
  AtividadeEsp,
  AlterarDados,
  RemoverPaciente,
} from "../../../pages";

import DrawerNavigator from "../DrawerNavigator";
import { TabContextProvider } from "../TabContext";

const PsicoStack = createNativeStackNavigator();

const PsicologoNavigator = () => {
  return (
    <TabContextProvider>
      <PsicoStack.Navigator screenOptions={{ headerShown: false }}>
        <PsicoStack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <PsicoStack.Screen
          name="CadastroPaciente"
          component={CadastroPaciente}
        />
        <PsicoStack.Screen
          name="PerfilPaciente"
          component={PerfilPaciente}
        />
        <PsicoStack.Screen
          name="Atividades"
          component={Atividades}
        />
        <PsicoStack.Screen
          name="AtribuirAtividade"
          component={AtribuirAtividade}
        />
        <PsicoStack.Screen
          name="AtividadeEsp"
          component={AtividadeEsp}
        />

        <PsicoStack.Screen
          name="AlterarDados"
          component={AlterarDados}
        />

        <PsicoStack.Screen
          name="RemoverPaciente"
          component={RemoverPaciente}
        />
      </PsicoStack.Navigator>
    </TabContextProvider>
  );
};

export default PsicologoNavigator;