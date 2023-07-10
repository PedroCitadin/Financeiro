import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import { buscarGastosMensais } from '../../database/database';
import { Dimensions, ScrollView } from "react-native";
const screenWidth = Dimensions.get("window").width;
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


export default function TelaRelatorio({ navigation }) {
    const [ano, setAno] = useState(new Date().getFullYear());
    const [gastos, setGastos] = useState([]);
    const [dados, setDados] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);


    useEffect(() => {
        obterGastosMensais();
    }, [ano]);



    

    const renderizarItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.mes}>{obterNomeMes(item.mes)}</Text>
            <Text style={styles.gastoTotal}>Total: R$ {item.totalGastos.toFixed(2)}</Text>
            <Text
                style={[
                    styles.percentualOrcamento,
                    item.percentualOrcamento > 8.33 ? { color: 'red' } : null,
                ]}
            >
                Porcentagem do orçamento: {item.percentualOrcamento.toFixed(2)}%
            </Text>
        </View>
    );

    const obterGastosMensais = async () => {
        const gastosM = await buscarGastosMensais(ano);
        
        let aux = [0,0,0,0,0,0,0,0,0,0,0, 0]
        for(var i = 0; i<gastosM.length; i++){
            
            
            aux[parseInt(gastosM[i].mes)-1] = gastosM[i].totalGastos
            
        }
        setGastos(gastosM);
        setDados(aux);
        
        

    };


    

    

    



    const obterNomeMes = (numeroMes) => {
        const meses = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ];

        return meses[numeroMes - 1] || '';
    };




    return (
        <View style={styles.container}>
            <View style={styles.SeletorContainer}>
            <Picker
                style={styles.seletor}
                selectedValue={ano}
                onValueChange={(itemValue) => setAno(itemValue)}
            >
                <Picker.Item label="2020" value={2020} />
                <Picker.Item label="2021" value={2021} />
                <Picker.Item label="2022" value={2022} />
                <Picker.Item label="2023" value={2023} />
                <Picker.Item label="2024" value={2024} />
                <Picker.Item label="2025" value={2025} />
                <Picker.Item label="2026" value={2026} />
                <Picker.Item label="2027" value={2027} />
                <Picker.Item label="2028" value={2028} />
                <Picker.Item label="2029" value={2029} />
                <Picker.Item label="2030" value={2030} />
                <Picker.Item label="2031" value={2031} />
                <Picker.Item label="2032" value={2032} />
                <Picker.Item label="2033" value={2033} />
                <Picker.Item label="2034" value={2034} />
                <Picker.Item label="2035" value={2035} />
                <Picker.Item label="2036" value={2036} />

            </Picker>

            </View>
            <View style={styles.containerGrafico}>
                <ScrollView horizontal>
                    <View style={{ width: Dimensions.get('window').width * 2, borderRadius: 10 }}>
                        <LineChart
                            data={{
                                labels: [
                                    'Janeiro',
                                    'Fevereiro',
                                    'Março',
                                    'Abril',
                                    'Maio',
                                    'Junho',
                                    'Julho',
                                    'Agosto',
                                    'Setembro',
                                    'Outubro',
                                    'Novembro',
                                    'Dezembro',
                                ],
                                datasets: [
                                    {
                                        data: dados
                                    },
                                ],
                            }}
                            width={Dimensions.get('window').width * 2}
                            height={Dimensions.get('window').height * 0.4}
                            yAxisLabel="R$ "
                            yAxisSuffix=""
                            
                            
                           
                            
                            chartConfig={{
                                
                                backgroundColor: '#e26a00',
                                backgroundGradientFrom: '#30C221',
                                backgroundGradientTo: '#006400',
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                                propsForDots: {
                                    r: '5',
                                    strokeWidth: '3',
                                    stroke: '#CCD1D1',
                                },
                            }}
                            bezier
                            style={{
                                marginVertical: 0,
                                borderRadius: 10,
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.containerMeses}>
                <FlatList
                    data={gastos}
                    renderItem={renderizarItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>




        </View>






    )







}