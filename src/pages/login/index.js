import React from 'react';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/test.jpeg';
import styles from './styles'; 

export default function Login(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={ styles.headerText }>Seja bem vindo!</Text>
            </View> 
            <Text style={styles.title}>Bem vindo</Text>
            <Text style={styles.description}>Faça login e salve o mundo!!</Text>
        </View>
    )
}