import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import TelaPrincipal from "./src/pages/TelaPrincipal";
import TelaAdicionar from "./src/pages/TelaAdicionar";
import TelaOrcamento from "./src/pages/TelaOrcamento";
import TelaRelatorio from "./src/pages/TelaRelatorio";
const Stack = createNativeStackNavigator();

export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tela Principal">
                <Stack.Screen name="Tela Principal" component={TelaPrincipal} options={{
                    headerShown: false,
                    
                }} />
                <Stack.Screen name="Tela Adicionar" component={TelaAdicionar} options={{
                    headerTitle: 'Nova Transação',
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
                    headerStyle: { backgroundColor: '#30C221'
                 }
                }} />
                <Stack.Screen name="Tela Orcamento" component={TelaOrcamento} options={{
                    headerTitle: 'Orçamento',
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
                    headerStyle: { backgroundColor: '#30C221'
                 }
                }} />
                <Stack.Screen name="Tela Relatorio" component={TelaRelatorio} options={{
                    headerTitle: 'Relatório Anual',
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
                    headerStyle: { backgroundColor: '#30C221'
                 }
                    
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}