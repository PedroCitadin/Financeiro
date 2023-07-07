import React, { useState } from 'react';
import { View, Text,Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
import { initDatabase, insertTransacao, getTransacoes } from '../../database/database';


export default function TelaAdicionar({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState(new Date());
  const [isChecked, setChecked] = useState(false);
  

  function pegaGasto(){

    insertTransacao(descricao, valor, data);

  }





  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInterno}>

      <Text style={styles.label}>Descrição:</Text>
      <TextInput

        style={styles.txtInput}
        value={descricao}
        onChangeText={setDescricao}
      />
      <Text style={styles.label}>Valor:</Text>
      <TextInput
      style={styles.txtInput}
        value={valor}
        onChangeText={setValor}
        keyboardType='numeric'
      />
      <Text style={styles.label}>Data:</Text>
      <DatePicker style={styles.seletorData}  date={data} onDateChange={setData} 
      mode='date' 
      androidVariant='nativeAndroid'

      />



      </View>
     
      
     <TouchableOpacity  style={styles.btnOpcoes} onPress={()=>pegaGasto()}>
          <Text style={styles.txtBtn}>Salvar</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};


