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
    color: '#696969',
    fontSize: 18,
    fontWeight: 'bold',
    paddingStart: 10,
    paddingTop: 3,
    


  },
  containerData: {
    borderWidth: 1,
    width: '68%',
    marginTop: 15,
    borderRadius: 10,
    borderColor: '#CCD1D1',
    elevation: 5,
     backgroundColor: '#F2F3F4'
  },




  containerInterno: {
    alignItems: 'center',
      justifyContent: 'center',
      width: '95%'
  },
  seletorData: {
    width: 250
      
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