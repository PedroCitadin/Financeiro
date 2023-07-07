import React from "react";
import { View, Text } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import TelaPrincipal from "./src/pages/TelaPrincipal";
import TelaAdicionar from "./src/pages/TelaAdicionar";
import TelaOrcamento from "./src/pages/TelaOrcamento";
const Stack = createNativeStackNavigator();

export default function App(){
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tela Principal">
                <Stack.Screen   name="Tela Principal" component={TelaPrincipal}/>
                <Stack.Screen name="Tela Adicionar" component={TelaAdicionar}/>
                <Stack.Screen name="Tela Orcamento" component={TelaOrcamento}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}