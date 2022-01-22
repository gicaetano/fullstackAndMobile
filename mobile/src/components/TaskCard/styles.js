import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        marginVertical: 4,
        padding: 10,
        height: 85,
        shadowColor: '#000',
        shadowOffset: { 
            width: 0, 
            height: 2, 
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 5
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    typeActive: {
        width: 50,
        height: 50,
        //margin: 1
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
    done: {
        opacity: 0.5
    }

});

export default styles;