import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 5
        
    },
    SeletorContainer:{
        width: '95%',
        height: '7%',
        elevation: 10,
        borderWidth: 1,
        backgroundColor: '#F2F3F4',
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 5,
        borderColor: '#CCD1D1'
    },
    seletor:{
        height: '100',
        width: '100%',
       borderWidth: 1,
    },
    containerGrafico: {
        
        elevation: 10,
        backgroundColor: '#F2F3F4',
        width: '95%',
        height: '45%',
        borderRadius: 10,
        borderColor: '#CCD1D1'
    },
    containerMeses: {
        marginTop: 10,
        elevation: 10,
        backgroundColor: '#F2F3F4',
        width: '90%',
        height: '45%',
        borderRadius: 10,
        borderColor: '#CCD1D1'
    },
    itemContainer: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#CCD1D1',
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      mes: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      gastoTotal: {
        fontSize: 16,
      },
      percentualOrcamento: {
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold'
      },

})

export default styles