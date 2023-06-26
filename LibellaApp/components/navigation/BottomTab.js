import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {Paciente, Agenda, Inicio} from '../../pages'


const Tab = createBottomTabNavigator();

function BottomTab(){
    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarInactiveBackgroundColor: 'red', tabBarActiveBackgroundColor: 'pink'}}>
            <Tab.Screen
                name="Inicio"
                component={Inicio}
            />
            <Tab.Screen
                name="Pacientes"
                component={Paciente}
            />
            <Tab.Screen
                name="Agenda"
                component={Agenda}
            />
        </Tab.Navigator>
    )
}

export default BottomTab;