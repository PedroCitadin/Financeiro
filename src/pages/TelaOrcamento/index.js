import React, { useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import { getOrcamento, obterSomaTransacoesPorAno } from '../../database/database';
import InserirOrcamentoModal from '../../components/ModalInserirOrcamento';

export default function TelaOrcamento({ navigation }) {
    const [ano, setAno] = useState(new Date().getFullYear());
    const [valor, setValor] = useState(0);
    const [visible, setVisible] = useState(false);
    const [txtbutton, setTxtButton] = useState("Gravar Orçamento")
    const [orcAtual, setOrcAtual] = useState(0);
    const [percentual, setPercentual] = useState(0);
    useEffect(() => {
        handleObterOrcamento(ano)

    }, [ano]);


    const handleObterOrcamento = async (ano) => {
        const OrcamentoPromisse = await getOrcamento(ano);
        const totalAnoPromisse = await obterSomaTransacoesPorAno(ano);
        if (OrcamentoPromisse.length != 0) {
            setTxtButton("Alterar Orçamento")
            for (var i = 0; i < OrcamentoPromisse.length; i++) {
                console.log(OrcamentoPromisse.item(i).valor)
                setValor(OrcamentoPromisse.item(i).valor)
                setOrcAtual(OrcamentoPromisse.item(i).valor - totalAnoPromisse)
                setPercentual((totalAnoPromisse*100)/OrcamentoPromisse.item(i).valor)

            }
        } else {
            setOrcAtual(0)
            setValor(0)
            setTxtButton("Gravar Orçamento")
            setPercentual(0)
        }


    }



    return (

        <SafeAreaView style={styles.container}>
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
            <View style={styles.totalContainer}>
                <Text style={styles.somaTransacoes}>Total: R${valor.toFixed(2)}</Text>
            </View>
            <View style={{height: 10}}/>
            <View style={styles.totalContainer}>
                <Text style={styles.somaTransacoes}>Atual: R${orcAtual.toFixed(2)}</Text>
            </View>
            <View style={{height: 10}}/>
            <View style={styles.totalContainer}>
                <Text style={styles.somaTransacoes}>Percentual Consumido: {percentual.toFixed(2)}%</Text>
            </View>
            <TouchableOpacity style={styles.btnOpcoes} onPress={() => setVisible(true)}>
                <Text style={styles.txtBtn}>{txtbutton}</Text>
            </TouchableOpacity>
            <InserirOrcamentoModal visible={visible} onClose={() => setVisible(false)} />
        </SafeAreaView>


    )
}