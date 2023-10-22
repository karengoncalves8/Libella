import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome, Selection } from "../../../pages";

import SelectNavigator from "./SelectNavigator";
import AuthPC from "./AuthPC";
import AuthPS from "./AuthPS";
import PCNavigator from "./PCNavigator";
import PSNavigator from "./PSNavigator";

import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const { user } = useAuth();
  const { isLogged } = useAuth();
  const { userType } = useAuth();

  return userType ? (
    userType === "Paciente" ? (
      isLogged ? (
        <PCNavigator />
      ) : (
        <AuthPC/>
      )
    ) : userType === "Psicologo" ? (
      isLogged ? (
        <PSNavigator />
      ) : (
        <AuthPS />
      )
    ) : (
      <SelectNavigator />  
    )
  ) : (
    <SelectNavigator />
  );
};

export default ProtectedRoute;
/*{userStatus ? (
      <RootStack.Screen
        name="App"
        component={AppNavigator}
      />
    ) : (
      <RootStack.Screen
          name="Select"
          component={SelectNavigator}
      />
    )}

    choice === 'Paciente' ? (
        <RootStack.Screen
        name="PCNavigator"
        component={PCNavigator}
        />
        ) : (
          <RootStack.Screen
        name="PSNavigator"
        component={PSNavigator}
        />
        )
  */
