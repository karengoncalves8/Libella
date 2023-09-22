import React, { useContext, useState, useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Welcome,
  Selection,
} from "../../../pages";

import SelectNavigator from "./SelectNavigator";
import AuthPC from "./AuthPC";
import AuthPS from "./AuthPS";
import PCNavigator from "./PCNavigator";
import PSNavigator from "./PSNavigator";

import { AuthContext } from "./AuthContext";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ userStatus, choice }) => (

  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    {userStatus ? (
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
    ) : (
      
      <RootStack.Screen
        name="Select"
        component={SelectNavigator}
        />
    )
    }


  </RootStack.Navigator>
);

export default RootStackScreen;
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