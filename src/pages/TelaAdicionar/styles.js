import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: '#F2F3F4',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  label:{
    color: '#797D7F',
    fontSize: 18,
    


  },
  txtInput: {
    backgroundColor: '#F8F9F9',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    borderRadius: 15,
    elevation: 5,
    borderColor: '#CCD1D1',
    color: '#797D7F'
    

  },
  containerInterno: {
    alignItems: 'center',
      justifyContent: 'center',
      width: '95%'
  },
  seletorData: {
    width: 200
  },
  txtBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  btnOpcoes: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 50,
    marginTop: 10,
    backgroundColor: '#30C221',
    elevation: 3,
  },


});

export default styles;