import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container : {
    width: '100%',
    height: '100%',
    backgroundColor: '#F2F3F4',
    alignItems: 'center'
},
seletor:{
    width: '100%',
   
},
txtBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  SeletorContainer:{
    marginTop: 15,
  
    width: '80%',
    height: '7%',
    elevation: 10,
    borderWidth: 1,
    backgroundColor: '#F2F3F4',
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 5,
    borderColor: '#CCD1D1'
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
  },somaTransacoes: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  totalContainer: {
    justifyContent: 'center',
    marginTop: '15',
    alignItems: 'center',
    borderWidth: 0.5,
    elevation: 5,
    width: '80%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F2F3F4',
    borderColor: '#CCD1D1'

  },

})

export default styles;