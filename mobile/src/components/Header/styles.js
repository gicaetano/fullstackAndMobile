import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#000000',
        borderBottomWidth: 5,
        borderBottomColor: '#ED145B',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 55
    },
    notification: {
        position: 'absolute',
        right: 20
    },
    notificationImage: {
       width: 25, 
       height: 30
    },
    notificationText: {
        fontWeight: 'bold', 
        color: '#ED145B'
    },

    circle: {
        width: 20,
        backgroundColor: '#FFF',
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        left: 13,
        bottom:13
    },
    leftIcon: {
        position: 'absolute',
        left: 20
    },
    leftIconImage: {
       width: 30,
       height: 30
    }

});

export default styles;