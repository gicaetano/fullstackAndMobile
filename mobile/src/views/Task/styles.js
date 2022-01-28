import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    imageIcon: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
    },
    label: {
        color: '#707070',
        fontSize: 16,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 5
    },
    input: {
       fontSize: 16,
       padding: 10,
       width: '95%',
       borderBottomWidth: 1,
       borderBottomColor: '#ED145B',
       marginHorizontal: 10
    },
    inputarea: {
        fontSize: 16,
        padding: 10,
        width: '95%',
        borderWidth: 1, 
        borderColor: '#ED145B',
        marginHorizontal: 10,
        borderRadius: 10,
        height: 100,
        textAlignVertical: 'top'
     },
     inLine: {
         width: '95%',
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-between',
         padding: 10,
         marginBottom: 80
     },
     inputInline: {
         flexDirection: 'row',
         alignItems: 'center',
         marginVertical: 10
     },
     switchLabel: {
         fontWeight: 'bold',
         color: '#ED145B',
         textTransform: 'uppercase',
         fontSize: 16,
         paddingLeft: 10
     },
     removeLabel: {
         fontWeight: 'bold',
         color: '#000',
         textTransform: 'uppercase',
         fontSize: 16  
     },
     typeIconInative: {
        opacity: 0.5
     }

});

export default styles;



