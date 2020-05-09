import React, { useState } from 'react';
import { Alert, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles'; 

import api from '../../services/api';

export default function Login(){
    const [password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[name, setName] = useState('');

    register = async () => {
        const data = ({
            email,
            password,
            name
        })
        try {
            const response = await api.post('users', data);
            console.log(response.data);
            Alert.alert("Será que foi?", `${response.data}`)
        } catch (error) {
            alert('Deu ruim')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={ styles.headerText }>Torne o mundo um local melhor!</Text>
                <Image style={styles.logo} source={logoImg}/>
            </View> 
            <TextInput 
                style={styles.input} 
                onChangeText={(val) => setName(val)}
                placeholder='Digite seu nome' 
            />
            <TextInput 
                style={styles.input} 
                onChangeText={(val) => setEmail(val)}
                placeholder='Digite seu E-mail' 
            />
            <TextInput 
                style={styles.input} 
                secureTextEntry={true} 
                onChangeText={(val) => setPassword(val)}
                placeholder='Digite sua senha' 
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={ () => { this.register() }}
            >
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}