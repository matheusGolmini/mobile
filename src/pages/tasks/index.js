import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles'; 
import Footer from '../footer';

export default function Tasks(){

    return (
        <View style={styles.container}>
            <Text>Missions</Text>
            <Footer />
        </View>
    )
}