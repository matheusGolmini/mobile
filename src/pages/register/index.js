import React, { useState } from 'react';
import { Alert, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles'; 
import stylesGlobal from '../styles-global';

import api from '../../services/api';

export default function Reagister(){
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
                <Image style={styles.logo} source={logoImg}/>
                <Text style={ stylesGlobal.logoText }>Vida Sustentável</Text>
                <Text style={ stylesGlobal.headerText }>Torne o mundo um lugar melhor!</Text>
            </View> 
            <TextInput 
                style={styles.input} 
                onChangeText={(val) => setName(val)}
                placeholder='Digite seu nome' 
            />
            <TextInput 
                style={styles.input} 
                onChangeText={(val) => setEmail(val)}
                placeholder='Digite seu e-mail' 
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