import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 0,
    backgroundColor: '#F2F3F4'
  },
  seletorContainer: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderWidth: 1,
    width: '95%',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    elevation: 5,
    backgroundColor: '#F8F9F9',
    borderColor: '#CCD1D1',
    borderRadius: 10,

  },
  seletor: {
    flex: 1,
    height: 40,
  },
  item: {
    backgroundColor: '#F2F3F4',
    flex: 1,
    borderColor: '#CCD1D1',
    flexDirection: 'row',
    borderWidth: 1,
    paddingStart: 10,
    borderRadius: 10,
    paddingBottom: 5,
    marginBottom: 10,
    elevation: 5,

  },
  lista: {
    padding: 10,
    height: '50%',

  },
  totalContainer: {
    justifyContent: 'center',
    marginTop: '15',
    alignItems: 'center',
    borderWidth: 0.5,
    elevation: 5,
    width: '45%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F2F3F4',
    borderColor: '#CCD1D1'

  },
  descricao: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  valor: {
    fontSize: 24,
  },
  data: {
    fontSize: 14,
    color: 'gray',
  },
  somaTransacoes: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  containerOpcoes: {
    width: '95%',
    marginTop: 25,

    alignItems: 'flex-start'
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
    width: '75%',
    height: 50,
    marginTop: 10,
    backgroundColor: '#30C221',
    elevation: 3,
  },
  excluirButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,

    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  excluirButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default styles;