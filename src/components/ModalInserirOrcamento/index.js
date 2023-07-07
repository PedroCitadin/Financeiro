import React, { useState } from 'react';
import { View, Modal, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { insertOrcamento, verificaAnoOrcamento, updateOrcamento } from '../../database/database';
import { Picker } from '@react-native-picker/picker';

const InserirOrcamentoModal = ({ visible, onClose, onSave }) => {
    const [ano, setAno] = useState(new Date().getFullYear());
  const [valor, setValor] = useState('');

  const handleSalvar = async () => {
    // Verifica se os campos estão preenchidos
    if (ano && valor) {
let respo = await verificaAnoOrcamento(ano);

      if(!respo){
         insertOrcamento(ano, valor)
      }else{
        updateOrcamento(ano, valor)
      } 
      
      
      setAno('');
      setValor('');
      onClose()
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Inserir Orçamento</Text>
          <View style={styles.inputContainer}>
            <Text>Ano:</Text>
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
          <View style={styles.inputContainer}>
            <Text>Valor:</Text>
            <TextInput
              style={styles.textInput}
              value={valor}
              onChangeText={setValor}
              placeholder="Informe o valor"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity  style={styles.btnOpcoes} onPress={onClose}>
          <Text style={styles.txtBtn}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.btnOpcoes} onPress={handleSalvar}>
          <Text style={styles.txtBtn}>Salvar</Text>
        </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#F2F3F4',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  seletor:{
   


  },
  btnOpcoes: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: 50,
    marginTop: 10,
    backgroundColor: '#30C221',
    elevation: 3,
  },
  txtBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#F8F9F9',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    elevation: 5,
    borderColor: '#CCD1D1',
    color: '#797D7F'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default InserirOrcamentoModal;
