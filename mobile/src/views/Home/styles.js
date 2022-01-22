import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    filter: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center'
    },
    filterTextActived: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ED145B'
    },
    filterTextInative: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 18,
        opacity: 0.5
    },
    content: {
       width: '100%',
       marginTop: 30 
    },
    title: {
       width: '100%',
       borderBottomWidth: 1,
       borderColor: '#000',
       alignItems: 'center'
    },
    titleText: {
        color: '#000',
        fontSize: 18,
        top: 11,
        backgroundColor: '#fff',
        paddingHorizontal: 10
    }
});

export default styles;