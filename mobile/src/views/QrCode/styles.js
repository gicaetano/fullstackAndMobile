import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ED145B',
        borderBottomWidth: 5
    },
    headerText: {
       color : '#FFF',
       fontWeight: 'bold',
    },
    containerButtons: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 70,    
    },
    buttonBack: {
       backgroundColor: '#ED145B',
       width: '45%',
       padding: 10,
       alignItems: 'center',
       borderBottomLeftRadius: 10,
       borderTopLeftRadius: 10,
    },
    buttonScanActive: {
        backgroundColor: 'green',
        width: '45%',
        padding: 10,
        alignItems: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        opacity: 1
     },
     buttonScanInative: {
        backgroundColor: '#000000',
        width: '45%',
        padding: 10,
        alignItems: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        opacity: 0.5,
     },
     textButton: {
         color: '#FFF',
         fontWeight: 'bold',
         fontSize: 12,
     }
});


export default styles;
