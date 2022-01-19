import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home(){
    return (    
    <View style={styles.container}>
        <Header showNotification={true} showBack={false}/>  
        <Footer icon={'add'}/>
        <Text style={styles.title}> </Text>
    </View>
)
}