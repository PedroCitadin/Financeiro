import React, { useState } from 'react';
import { View, Text,Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import DatePicker from 'react-native-date-picker';
import { initDatabase, insertTransacao, getTransacoes } from '../../database/database';
import CampoTextoPersonalizado from '../../components/CampoDeTextoCustom';

export default function TelaAdicionar({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState(new Date());
  const [isChecked, setChecked] = useState(false);
  

  function pegaGasto(){

    insertTransacao(descricao, valor, data);
    setDescricao('')
    setValor('')
    setData(new Date())
  }





  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInterno}>

      <CampoTextoPersonalizado label={'Descrição'} value={descricao}
        onChangeText={setDescricao}/>
      
      <CampoTextoPersonalizado
        label={"Valor"}
        value={valor}
        onChangeText={setValor}
        keyboardType='numeric'
      />
      <View style= {styles.containerData}>
      <Text style={styles.label}>Data:</Text>
      <DatePicker style={styles.seletorData}  date={data} onDateChange={setData} 
      mode='date' 
      androidVariant='nativeAndroid'

      />
      </View>



      </View>
     
      
     <TouchableOpacity  style={styles.btnOpcoes} onPress={()=>pegaGasto()}>
          <Text style={styles.txtBtn}>Salvar</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};


