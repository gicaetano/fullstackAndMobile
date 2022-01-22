import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 5,
        padding: 15,
        height: 85,
        shadowColor: '#000',
        shadowOffset: { 
            width: 0, 
            height: 2, 
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 6,
        borderRadius: 8
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    typeActive: {
        width: 38,
        height: 40,
        margin: 5
    },
    cardTitle: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    cardRight: {
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    cardDate: {
        color: '#ED145B',
        fontWeight: 'bold',
        fontSize: 15
    },
    cardTime: {
        color: '#707070'
    },
    cardDone: {
        opacity: 0.5
    }

});

export default styles;