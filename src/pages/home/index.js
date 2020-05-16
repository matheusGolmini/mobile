import React from 'react';
import { View, Image, Text } from 'react-native';

import robo from '../../assets/robo.jpeg';
import styles from './styles'; 
import Footer from '../footer';

export default function Home(){

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={robo}/>
                <Text style={styles.level}> Level 1</Text>
            </View> 
            <Footer />
        </View>
    )
}