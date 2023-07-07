import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Alert } from 'react-native';
import styles from './style';
import FloatingButton from '../../components/FloatingButton';
import { initDatabase, getTransacoes, excluirTransacao, getOrcamento } from '../../database/database';
import { Picker } from '@react-native-picker/picker';
import { Icon } from 'react-native-elements';





export default function TelaPrincipal({ navigation }) {


  const [mes, setMes] = useState(new Date().getMonth() + 1);
  const [ano, setAno] = useState(new Date().getFullYear());
  const [transacoes, setTransacoes] = useState([]);
  const [somaTransacoes, setSomaTransacoes] = useState(0);
  const [percentualAno, setPercentualAno] = useState(0);


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={{ width: '80%' }}>
        <Text style={styles.descricao}>{item.descricao}</Text>
        <Text style={styles.valor}>{item.valor}</Text>
        <Text style={styles.data}>{item.data}</Text>
      </View>

      <TouchableOpacity
        style={styles.excluirButton}
        onPress={() => handleExcluirTransacao(item.id)}
      >
        <Icon name="delete" size={30} />
      </TouchableOpacity>
    </View>
  );



  useEffect(() => {
    initDatabase();
    handleObterTransacoes(mes, ano);
  }, [mes, ano]);


  const handleExcluirTransacao = (id) => {
    Alert.alert(
      'Confirmação',
      'Deseja excluir esta transação?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            // Chamada para excluir a transação do banco de dados
            console.log('Excluindo transação com ID:', id);
            // Atualiza a lista de transações após a exclusão
            excluirTransacao(id);
            handleObterTransacoes(mes, ano);

          },
        },
      ],
      { cancelable: true }
    );
  };


  const handleObterTransacoes = async (mes, ano) => {
    const transacoesPromisse = await getTransacoes(mes, ano);
    const orcamentoPromisse = await getOrcamento(ano);
    
    if (transacoesPromisse.length != 0) {
      
      
      let tList = [];
      let somaT = 0;
      for (var i = 0; i < transacoesPromisse.length; i++) {
        tList.push(transacoesPromisse.item(i));
        somaT += transacoesPromisse.item(i).valor;

      }
      setSomaTransacoes(somaT);
      setTransacoes(tList)
      setPercentualAno((100 * somaT) /orcamentoPromisse.item(0).valor);
    } else {
      setSomaTransacoes(0);
      setPercentualAno(0);
      setTransacoes([]);
    }

  }









  return (
    <View style={styles.container}>
      <View style={styles.seletorContainer}>
        <Picker
          style={styles.seletor}
          selectedValue={mes}
          onValueChange={(itemValue) => setMes(itemValue)}
        >
          <Picker.Item label="Janeiro" value={1} />
          <Picker.Item label="Fevereiro" value={2} />
          <Picker.Item label="Março" value={3} />
          <Picker.Item label="Abril" value={4} />
          <Picker.Item label="Maio" value={5} />
          <Picker.Item label="Junho" value={6} />
          <Picker.Item label="Julho" value={7} />
          <Picker.Item label="Agosto" value={8} />
          <Picker.Item label="Setembro" value={9} />
          <Picker.Item label="Outubro" value={10} />
          <Picker.Item label="Novembro" value={11} />
          <Picker.Item label="Dezembro" value={12} />
        </Picker>
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
      <View style={styles.lista}>
        <FlatList
          data={transacoes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.totalContainer}>
          <Text style={styles.somaTransacoes}>Total: {somaTransacoes.toFixed(2)}</Text>
        </View>
        <View style={{width: 10}}/>
        <View style={styles.totalContainer}>
          <Text style={styles.somaTransacoes}>Percentual: {percentualAno.toFixed(2)}%</Text>
        </View>


      </View>
      <View style={styles.containerOpcoes}>
        <TouchableOpacity style={styles.btnOpcoes}>
          <Text style={styles.txtBtn}>Relatório anual</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOpcoes} onPress={() => navigation.navigate('Tela Orcamento')}>
          <Text style={styles.txtBtn}>Controle de Orçamento</Text>
        </TouchableOpacity>

      </View>


      <FloatingButton
        onPress={() => navigation.navigate("Tela Adicionar")}
      />
    </View>
  );





}